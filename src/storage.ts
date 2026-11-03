import type { StudyData } from './types';
import { EMPTY_DATA, STORAGE_KEY, PROFILE_KEY, migrateData } from './data';

const DB_NAME = 'studyflow-local';
const DB_VERSION = 2;
const STORE_NAME = 'app';
const DATA_KEY = 'study-data';
const PREFERENCES_KEY = 'app-preferences';
const DATA_META_KEY = 'study-data-meta';
const PREFERENCES_META_KEY = 'app-preferences-meta';
const DATA_MIRROR_KEY = 'nox-haven:durable-data:v1';
const PREFERENCES_MIRROR_KEY = 'nox-haven:durable-preferences:v1';
const CHANGE_CHANNEL = 'studyflow-storage-v1';
let changeChannel: BroadcastChannel | null = null;

type Snapshot<T> = { savedAt: number; value: T };

function safeLocalStorageGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeLocalStorageSet(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}
function readSnapshot<T>(key: string, validate: (value: unknown) => T): Snapshot<T> | null {
  try {
    const raw = safeLocalStorageGet(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { savedAt?: unknown; value?: unknown };
    if (!parsed || typeof parsed !== 'object' || !Number.isFinite(parsed.savedAt) || !('value' in parsed)) return null;
    return { savedAt: Number(parsed.savedAt), value: validate(parsed.value) };
  } catch { return null; }
}
function writeSnapshot<T>(key: string, value: T, savedAt = Date.now()): boolean {
  return safeLocalStorageSet(key, JSON.stringify({ savedAt, value }));
}
function announceChange(kind: 'data' | 'preferences') {
  if (typeof BroadcastChannel === 'undefined') return;
  changeChannel ??= new BroadcastChannel(CHANGE_CHANNEL);
  changeChannel.postMessage({ type: 'updated', kind, at: Date.now() });
}

/** Signale les écritures provenant d'un autre onglet afin d'éviter qu'un onglet ancien écrase silencieusement les changements. */
export function subscribeToRemoteChanges(callback: (kind: 'data' | 'preferences') => void): () => void {
  if (typeof BroadcastChannel === 'undefined') return () => undefined;
  const channel = new BroadcastChannel(CHANGE_CHANNEL);
  const handler = (event: MessageEvent) => {
    if (event.data?.type === 'updated' && (event.data.kind === 'data' || event.data.kind === 'preferences')) callback(event.data.kind);
  };
  channel.addEventListener('message', handler);
  return () => { channel.removeEventListener('message', handler); channel.close(); };
}

export type StudyPreferences = {
  profileReady: boolean;
  chapterProgress: Record<string, 'started' | 'mastered'>;
  targetAverage: number | null;
  weeklyGoal: number;
  dailyCapacity: number;
  dark: boolean;
};

function validatePreferences(value: unknown): StudyPreferences {
  if (!value || typeof value !== 'object') throw new Error('Préférences invalides.');
  const p = value as Partial<StudyPreferences>;
  const target = typeof p.targetAverage === 'number' && Number.isFinite(p.targetAverage) && p.targetAverage >= 0 && p.targetAverage <= 20 ? p.targetAverage : null;
  const progress: Record<string, 'started' | 'mastered'> = {};
  if (p.chapterProgress && typeof p.chapterProgress === 'object' && !Array.isArray(p.chapterProgress)) {
    for (const [id, status] of Object.entries(p.chapterProgress)) if (status === 'started' || status === 'mastered') progress[id] = status;
  }
  return {
    profileReady: p.profileReady === true,
    chapterProgress: progress,
    targetAverage: target,
    weeklyGoal: Number.isInteger(p.weeklyGoal) && Number(p.weeklyGoal) >= 1 && Number(p.weeklyGoal) <= 30 ? Number(p.weeklyGoal) : 5,
    dailyCapacity: [30, 45, 60, 90, 120].includes(Number(p.dailyCapacity)) ? Number(p.dailyCapacity) : 60,
    dark: p.dark !== false,
  };
}

function readLegacyPreferences(): StudyPreferences {
  const targetRaw = safeLocalStorageGet('studyflow_target_average_v1');
  const targetValue = targetRaw === null ? NaN : Number(targetRaw);
  let progress: Record<string, 'started' | 'mastered'> = {};
  try {
    const parsed: unknown = JSON.parse(safeLocalStorageGet('studyflow_chapter_progress_v1') || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      progress = Object.fromEntries(Object.entries(parsed).filter((entry): entry is [string, 'started' | 'mastered'] => entry[1] === 'started' || entry[1] === 'mastered'));
    }
  } catch { /* ancienne progression illisible : on conserve une valeur vide sans toucher à la source */ }
  const weekly = Number(safeLocalStorageGet('studyflow_weekly_goal_v1'));
  const capacity = Number(safeLocalStorageGet('studyflow_daily_capacity_v1'));
  return {
    profileReady: safeLocalStorageGet(PROFILE_KEY) === 'done',
    chapterProgress: progress,
    targetAverage: Number.isFinite(targetValue) && targetValue >= 0 && targetValue <= 20 ? targetValue : null,
    weeklyGoal: Number.isInteger(weekly) && weekly >= 1 && weekly <= 30 ? weekly : 5,
    dailyCapacity: [30,45,60,90,120].includes(capacity) ? capacity : 60,
    dark: safeLocalStorageGet('studyflow_theme') !== 'light',
  };
}

function openDatabase(): Promise<IDBDatabase> {
  if (typeof indexedDB === 'undefined') return Promise.reject(new Error('IndexedDB indisponible dans ce navigateur.'));
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => { const db = request.result; db.onversionchange = () => db.close(); resolve(db); };
    request.onerror = () => reject(request.error ?? new Error('Ouverture du stockage impossible.'));
    request.onblocked = () => { /* L'ouverture reste en attente jusqu'à la fermeture de l'ancien onglet. */ };
  });
}

async function readRecord<T>(db: IDBDatabase, key: string, metaKey: string, validate: (value: unknown) => T): Promise<Snapshot<T> | null> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const valueRequest = store.get(key);
    const metaRequest = store.get(metaKey);
    tx.oncomplete = () => {
      try {
        if (valueRequest.result === undefined) { resolve(null); return; }
        const savedAt = Number(metaRequest.result) || 0;
        resolve({ savedAt, value: validate(valueRequest.result) });
      } catch (error) { reject(error); }
    };
    tx.onerror = () => reject(tx.error ?? new Error('Lecture des données impossible.'));
    tx.onabort = () => reject(tx.error ?? new Error('Lecture des données annulée.'));
  });
}

async function writeRecord<T>(db: IDBDatabase, key: string, metaKey: string, value: T, savedAt: number): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put(value, key);
    store.put(savedAt, metaKey);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error('Écriture des données impossible.'));
    transaction.onabort = () => reject(transaction.error ?? new Error('Écriture des données annulée.'));
  });
}

/** Charge la copie la plus récente entre IndexedDB et le miroir localStorage. */
export async function loadPrimaryData(): Promise<{ data: StudyData; preferences: StudyPreferences; migrated: boolean; preferencesMigrated: boolean; persistent: boolean }> {
  const mirrorData = readSnapshot(DATA_MIRROR_KEY, value => migrateData(value));
  const mirrorPreferences = readSnapshot(PREFERENCES_MIRROR_KEY, validatePreferences);
  let db: IDBDatabase | null = null;
  try { db = await openDatabase(); } catch { /* Le miroir local reste une voie de récupération. */ }

  if (!db) {
    const legacyRaw = safeLocalStorageGet(STORAGE_KEY);
    const data = mirrorData?.value ?? (legacyRaw ? migrateData(JSON.parse(legacyRaw)) : { ...EMPTY_DATA, subjects: EMPTY_DATA.subjects.map(subject => ({ ...subject })) });
    const preferences = mirrorPreferences?.value ?? readLegacyPreferences();
    writeSnapshot(DATA_MIRROR_KEY, data, mirrorData?.savedAt ?? Date.now());
    writeSnapshot(PREFERENCES_MIRROR_KEY, preferences, mirrorPreferences?.savedAt ?? Date.now());
    return { data, preferences, migrated: Boolean(legacyRaw && !mirrorData), preferencesMigrated: !mirrorPreferences, persistent: false };
  }

  try {
    const dbData = await readRecord(db, DATA_KEY, DATA_META_KEY, value => migrateData(value));
    const dbPreferences = await readRecord(db, PREFERENCES_KEY, PREFERENCES_META_KEY, validatePreferences);
    const legacyRaw = safeLocalStorageGet(STORAGE_KEY);
    const legacyData = !dbData && !mirrorData && legacyRaw ? { savedAt: 1, value: migrateData(JSON.parse(legacyRaw)) } : null;
    const dataCandidates = [dbData, mirrorData, legacyData].filter((item): item is Snapshot<StudyData> => Boolean(item));
    const chosenData = dataCandidates.sort((a, b) => b.savedAt - a.savedAt)[0];
    const data = chosenData?.value ?? { ...EMPTY_DATA, subjects: EMPTY_DATA.subjects.map(subject => ({ ...subject })) };
    const legacyPreferences = !dbPreferences && !mirrorPreferences ? { savedAt: 1, value: readLegacyPreferences() } : null;
    const preferenceCandidates = [dbPreferences, mirrorPreferences, legacyPreferences].filter((item): item is Snapshot<StudyPreferences> => Boolean(item));
    const chosenPreferences = preferenceCandidates.sort((a, b) => b.savedAt - a.savedAt)[0];
    let preferences = chosenPreferences?.value ?? readLegacyPreferences();
    // Le marqueur de profil historique est synchronisé immédiatement lors de la validation du formulaire.
    // Il protège le cas où l'application a été arrêtée avant la fin de la transaction IndexedDB.
    if (safeLocalStorageGet(PROFILE_KEY) === 'done' && !preferences.profileReady) preferences = { ...preferences, profileReady: true };
    const now = Math.max(chosenData?.savedAt ?? 0, Date.now());
    const prefsAt = Math.max(chosenPreferences?.savedAt ?? 0, Date.now());
    writeSnapshot(DATA_MIRROR_KEY, data, chosenData?.savedAt || now);
    writeSnapshot(PREFERENCES_MIRROR_KEY, preferences, chosenPreferences?.savedAt || prefsAt);
    if (!dbData || (mirrorData && mirrorData.savedAt > dbData.savedAt)) await writeRecord(db, DATA_KEY, DATA_META_KEY, data, chosenData?.savedAt || now);
    if (!dbPreferences || (mirrorPreferences && mirrorPreferences.savedAt > dbPreferences.savedAt)) await writeRecord(db, PREFERENCES_KEY, PREFERENCES_META_KEY, preferences, chosenPreferences?.savedAt || prefsAt);
    return { data, preferences, migrated: Boolean(legacyRaw && !dbData && !mirrorData), preferencesMigrated: !dbPreferences && !mirrorPreferences, persistent: true };
  } catch (error) {
    // Une base endommagée ou temporairement inaccessible ne doit pas masquer la copie de secours.
    if (!mirrorData && !mirrorPreferences) throw error;
    const legacyRaw = safeLocalStorageGet(STORAGE_KEY);
    const data = mirrorData?.value ?? (legacyRaw ? migrateData(JSON.parse(legacyRaw)) : { ...EMPTY_DATA, subjects: EMPTY_DATA.subjects.map(subject => ({ ...subject })) });
    let preferences = mirrorPreferences?.value ?? readLegacyPreferences();
    if (safeLocalStorageGet(PROFILE_KEY) === 'done') preferences = { ...preferences, profileReady: true };
    return { data, preferences, migrated: false, preferencesMigrated: false, persistent: false };
  } finally { db.close(); }
}

/** Le miroir synchrone est écrit avant IndexedDB pour survivre à une fermeture mobile immédiate. */
export async function savePrimaryPreferences(preferences: StudyPreferences): Promise<void> {
  const savedAt = Date.now();
  const mirrored = writeSnapshot(PREFERENCES_MIRROR_KEY, preferences, savedAt);
  if (preferences.profileReady) safeLocalStorageSet(PROFILE_KEY, 'done');
  else safeLocalStorageSet(PROFILE_KEY, '');
  safeLocalStorageSet('studyflow_target_average_v1', preferences.targetAverage === null ? '' : String(preferences.targetAverage));
  safeLocalStorageSet('studyflow_chapter_progress_v1', JSON.stringify(preferences.chapterProgress));
  safeLocalStorageSet('studyflow_weekly_goal_v1', String(preferences.weeklyGoal));
  safeLocalStorageSet('studyflow_daily_capacity_v1', String(preferences.dailyCapacity));
  safeLocalStorageSet('studyflow_theme', preferences.dark ? 'dark' : 'light');
  const db = await openDatabase();
  try { await writeRecord(db, PREFERENCES_KEY, PREFERENCES_META_KEY, preferences, savedAt); announceChange('preferences'); }
  catch (error) { if (!mirrored) throw new Error(`Échec IndexedDB et miroir local : les préférences ne sont pas garanties. ${String(error)}`); throw error; }
  finally { db.close(); }
}

/** Sauvegarde synchrone de secours + transaction IndexedDB atomique. */
export async function savePrimaryData(data: StudyData): Promise<void> {
  const savedAt = Date.now();
  const mirrored = writeSnapshot(DATA_MIRROR_KEY, data, savedAt);
  // Ancienne clé conservée et actualisée pour récupération par les versions précédentes.
  safeLocalStorageSet(STORAGE_KEY, JSON.stringify(data));
  const db = await openDatabase();
  try { await writeRecord(db, DATA_KEY, DATA_META_KEY, data, savedAt); announceChange('data'); }
  catch (error) { if (!mirrored) throw new Error(`Échec IndexedDB et miroir local : les données ne sont pas garanties. ${String(error)}`); throw error; }
  finally { db.close(); }
}

/** Fallback de compatibilité pour navigateurs sans IndexedDB. */
export function saveLegacyData(data: StudyData): void {
  const savedAt = Date.now();
  writeSnapshot(DATA_MIRROR_KEY, data, savedAt);
  safeLocalStorageSet(STORAGE_KEY, JSON.stringify(data));
}
export function saveLegacyPreferences(preferences: StudyPreferences): void {
  const savedAt = Date.now();
  writeSnapshot(PREFERENCES_MIRROR_KEY, preferences, savedAt);
  if (preferences.profileReady) safeLocalStorageSet(PROFILE_KEY, 'done');
  safeLocalStorageSet('studyflow_target_average_v1', preferences.targetAverage === null ? '' : String(preferences.targetAverage));
  safeLocalStorageSet('studyflow_chapter_progress_v1', JSON.stringify(preferences.chapterProgress));
  safeLocalStorageSet('studyflow_weekly_goal_v1', String(preferences.weeklyGoal));
  safeLocalStorageSet('studyflow_daily_capacity_v1', String(preferences.dailyCapacity));
  safeLocalStorageSet('studyflow_theme', preferences.dark ? 'dark' : 'light');
}

/** Demande au navigateur de protéger les données du nettoyage automatique quand cette API existe. */
export async function requestPersistentStorage(): Promise<boolean | null> {
  const manager = navigator.storage;
  if (!manager?.persist) return null;
  try { return await manager.persist(); } catch { return false; }
}

/** Écriture synchrone d'urgence déclenchée lorsque le navigateur masque ou ferme l'application. */
export function saveEmergencySnapshot(data: StudyData, preferences: StudyPreferences): void {
  const savedAt = Date.now();
  writeSnapshot(DATA_MIRROR_KEY, data, savedAt);
  writeSnapshot(PREFERENCES_MIRROR_KEY, preferences, savedAt);
  safeLocalStorageSet(STORAGE_KEY, JSON.stringify(data));
  if (preferences.profileReady) safeLocalStorageSet(PROFILE_KEY, 'done');
  safeLocalStorageSet('studyflow_target_average_v1', preferences.targetAverage === null ? '' : String(preferences.targetAverage));
  safeLocalStorageSet('studyflow_chapter_progress_v1', JSON.stringify(preferences.chapterProgress));
  safeLocalStorageSet('studyflow_weekly_goal_v1', String(preferences.weeklyGoal));
  safeLocalStorageSet('studyflow_daily_capacity_v1', String(preferences.dailyCapacity));
  safeLocalStorageSet('studyflow_theme', preferences.dark ? 'dark' : 'light');
}
