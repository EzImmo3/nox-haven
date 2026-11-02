import type { StudyData } from './types';
import { EMPTY_DATA, STORAGE_KEY, PROFILE_KEY, migrateData } from './data';

const DB_NAME = 'studyflow-local';
const DB_VERSION = 2;
const STORE_NAME = 'app';
const DATA_KEY = 'study-data';
const PREFERENCES_KEY = 'app-preferences';
const CHANGE_CHANNEL = 'studyflow-storage-v1';
let changeChannel: BroadcastChannel | null = null;

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

function readLegacyPreferences(): StudyPreferences {
  const targetRaw = localStorage.getItem('studyflow_target_average_v1');
  const targetValue = targetRaw === null ? NaN : Number(targetRaw);
  let progress: Record<string, 'started' | 'mastered'> = {};
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem('studyflow_chapter_progress_v1') || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      progress = Object.fromEntries(Object.entries(parsed).filter((entry): entry is [string, 'started' | 'mastered'] => entry[1] === 'started' || entry[1] === 'mastered'));
    }
  } catch { /* ancienne progression illisible : on conserve une valeur vide sans toucher à la source */ }
  const weekly = Number(localStorage.getItem('studyflow_weekly_goal_v1'));
  const capacity = Number(localStorage.getItem('studyflow_daily_capacity_v1'));
  return {
    profileReady: localStorage.getItem(PROFILE_KEY) === 'done',
    chapterProgress: progress,
    targetAverage: Number.isFinite(targetValue) && targetValue >= 0 && targetValue <= 20 ? targetValue : null,
    weeklyGoal: Number.isInteger(weekly) && weekly >= 1 && weekly <= 30 ? weekly : 5,
    dailyCapacity: [30,45,60,90,120].includes(capacity) ? capacity : 60,
    dark: localStorage.getItem('studyflow_theme') !== 'light',
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
    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    request.onerror = () => reject(request.error ?? new Error('Ouverture du stockage impossible.'));
    request.onblocked = () => { /* L'ouverture reste en attente jusqu'à la fermeture de l'ancien onglet. */ };
  });
}

async function readRecord(db: IDBDatabase): Promise<StudyData | null> {
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(DATA_KEY);
    request.onsuccess = () => {
      try { resolve(request.result ? migrateData(request.result) : null); }
      catch (error) { reject(error); }
    };
    request.onerror = () => reject(request.error ?? new Error('Lecture des données impossible.'));
  });
}

async function writeRecord(db: IDBDatabase, data: StudyData): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    transaction.objectStore(STORE_NAME).put(data, DATA_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error('Écriture des données impossible.'));
    transaction.onabort = () => reject(transaction.error ?? new Error('Écriture des données annulée.'));
  });
}

/** Charge IndexedDB en priorité. Les anciennes données localStorage restent intactes après migration. */
export async function loadPrimaryData(): Promise<{ data: StudyData; preferences: StudyPreferences; migrated: boolean; preferencesMigrated: boolean; persistent: boolean }> {
  const db = await openDatabase();
  try {
    const stored = await readRecord(db);
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const preferenceRequest = transaction.objectStore(STORE_NAME).get(PREFERENCES_KEY);
    const storedPreferences = await new Promise<StudyPreferences | undefined>((resolve, reject) => {
      preferenceRequest.onsuccess = () => resolve(preferenceRequest.result as StudyPreferences | undefined);
      preferenceRequest.onerror = () => reject(preferenceRequest.error ?? new Error('Lecture des préférences impossible.'));
    });
    const preferences = storedPreferences ?? readLegacyPreferences();
    if (!storedPreferences) await writePreferences(db, preferences);
    if (stored) return { data: stored, preferences, migrated: false, preferencesMigrated: !storedPreferences, persistent: true };
    const legacyRaw = localStorage.getItem(STORAGE_KEY);
    const legacy = legacyRaw ? migrateData(JSON.parse(legacyRaw)) : { ...EMPTY_DATA, subjects: EMPTY_DATA.subjects.map(subject => ({ ...subject })) };
    await writeRecord(db, legacy);
    return { data: legacy, preferences, migrated: Boolean(legacyRaw), preferencesMigrated: !storedPreferences, persistent: true };
  } finally { db.close(); }
}

async function writePreferences(db: IDBDatabase, preferences: StudyPreferences): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    transaction.objectStore(STORE_NAME).put(preferences, PREFERENCES_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error('Écriture des préférences impossible.'));
    transaction.onabort = () => reject(transaction.error ?? new Error('Écriture des préférences annulée.'));
  });
}

/** Sauvegarde atomique des préférences utilisateur dans IndexedDB. */
export async function savePrimaryPreferences(preferences: StudyPreferences): Promise<void> {
  const db = await openDatabase();
  try { await writePreferences(db, preferences); announceChange('preferences'); }
  finally { db.close(); }
}

/** Sauvegarde atomique du document principal dans IndexedDB. */
export async function savePrimaryData(data: StudyData): Promise<void> {
  const db = await openDatabase();
  try { await writeRecord(db, data); announceChange('data'); }
  finally { db.close(); }
}

/** Fallback de compatibilité pour navigateurs sans IndexedDB. */
export function saveLegacyData(data: StudyData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
