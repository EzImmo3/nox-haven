/** Optional Supabase cloud adapter. Local IndexedDB remains the source of truth offline. */
import { decideSync, validateSyncSnapshot } from './syncProtocol.mjs';

let session = null;
let config = null;
const SESSION_KEY = 'nox-haven:cloud-session:v1';
function persistSession() { try { if (session?.refreshToken) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); else sessionStorage.removeItem(SESSION_KEY); } catch { /* Session persistence is best-effort; local study data remains independent. */ } }
function restoreSession() { try { const raw = sessionStorage.getItem(SESSION_KEY); if (!raw) return; const saved = JSON.parse(raw); if (saved?.refreshToken && saved?.user?.id) session = saved; } catch { session = null; } }

export function configureCloudSync({ url, anonKey, fetchImpl = globalThis.fetch }) {
  if (!url || !anonKey || typeof fetchImpl !== 'function') throw new Error('Configuration cloud incomplète.');
  const normalized = new URL(url);
  if (normalized.protocol !== 'https:' && normalized.hostname !== 'localhost') throw new Error('Le serveur cloud doit utiliser HTTPS.');
  const safeFetch = fetchImpl === globalThis.fetch
  ? fetchImpl.bind(globalThis)
  : fetchImpl;

config = {
  url: normalized.origin,
  anonKey,
  fetchImpl: safeFetch
};
  restoreSession();
}

export async function refreshCloudSession() {
  if (!session?.refreshToken) return false;
  try {
    const { body } = await request('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: session.refreshToken }) });
    if (!body?.access_token || !body?.user?.id) throw new Error('Session cloud invalide.');
    session = { accessToken: body.access_token, refreshToken: body.refresh_token, user: body.user }; persistSession(); return true;
  } catch { session = null; persistSession(); return false; }
}

function requireConfig() { if (!config) throw new Error('La synchronisation cloud n’est pas configurée.'); return config; }
function headers(token = null, extra = {}) {
  const c = requireConfig();
  return { apikey: c.anonKey, Authorization: `Bearer ${token || c.anonKey}`, 'Content-Type': 'application/json', ...extra };
}
async function request(path, options = {}, token = null) {
  const c = requireConfig();
  const response = await c.fetchImpl(`${c.url}${path}`, { ...options, headers: headers(token, options.headers) });
  const bodyText = await response.text();
  let body = null;
  if (bodyText) { try { body = JSON.parse(bodyText); } catch { body = bodyText; } }
  if (!response.ok) {
    const message = typeof body?.msg === 'string' ? body.msg : typeof body?.message === 'string' ? body.message : `Erreur du service cloud (${response.status}).`;
    const error = new Error(message); error.status = response.status; throw error;
  }
  return { body, response };
}

export async function signUp(email, password) {
  if (!/^\S+@\S+\.\S+$/.test(email) || typeof password !== 'string' || password.length < 10) throw new Error('Adresse e-mail invalide ou mot de passe trop court (10 caractères minimum).');
  const { body } = await request('/auth/v1/signup', { method: 'POST', body: JSON.stringify({ email, password }) });
  if (body?.access_token) { session = { accessToken: body.access_token, refreshToken: body.refresh_token, user: body.user }; persistSession(); }
  return { user: body?.user ?? null, needsEmailConfirmation: !body?.access_token };
}

export async function signIn(email, password) {
  const { body } = await request('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email, password }) });
  if (!body?.access_token || !body?.user?.id) throw new Error('La connexion n’a pas renvoyé de session valide.');
  session = { accessToken: body.access_token, refreshToken: body.refresh_token, user: body.user }; persistSession();
  return { id: body.user.id, email: body.user.email };
}

export function currentCloudUser() {
  return session?.user ? { id: session.user.id, email: session.user.email } : null;
}

export async function signOut() {
  if (session?.accessToken) {
    try { await request('/auth/v1/logout', { method: 'POST' }, session.accessToken); }
    finally { session = null; persistSession(); }
  } else { session = null; persistSession(); }
}

export async function checksumPayload(payload) {
  if (!globalThis.crypto?.subtle) throw new Error('Calcul cryptographique indisponible dans ce navigateur sécurisé.');
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

export async function createCloudSnapshot({ accountId, deviceId, revision, parentRevision, payload }) {
  return { protocol: 1, accountId, deviceId, revision, parentRevision, updatedAt: new Date().toISOString(), checksum: await checksumPayload(payload), payload };
}

export async function readCloudSnapshot() {
  if (!session?.accessToken) throw new Error('Connecte-toi pour accéder à la synchronisation.');
  const { body } = await request('/rest/v1/study_snapshots?select=account_id,device_id,revision,parent_revision,updated_at,checksum,payload&order=updated_at.desc&limit=1', { method: 'GET' }, session.accessToken);
  if (!Array.isArray(body) || body.length === 0) return null;
  const row = body[0];
  const snapshot = { protocol: 1, accountId: row.account_id, deviceId: row.device_id, revision: row.revision, parentRevision: row.parent_revision, updatedAt: row.updated_at, checksum: row.checksum, payload: row.payload };
  if (!validateSyncSnapshot(snapshot) || snapshot.accountId !== session.user.id || await checksumPayload(snapshot.payload) !== snapshot.checksum) throw new Error('La sauvegarde distante est invalide ou altérée.');
  return snapshot;
}

export async function uploadCloudSnapshot(snapshot, expectedRemoteRevision = null) {
  if (!session?.accessToken) throw new Error('Connecte-toi pour accéder à la synchronisation.');
  if (!validateSyncSnapshot(snapshot) || snapshot.accountId !== session.user.id) throw new Error('La copie à envoyer est invalide ou ne correspond pas au compte connecté.');
  if (await checksumPayload(snapshot.payload) !== snapshot.checksum) throw new Error('La vérification d’intégrité locale a échoué.');
  const row = { account_id: snapshot.accountId, device_id: snapshot.deviceId, revision: snapshot.revision, parent_revision: snapshot.parentRevision, updated_at: snapshot.updatedAt, checksum: snapshot.checksum, payload: snapshot.payload };
  if (expectedRemoteRevision === null) {
    const { response } = await request('/rest/v1/study_snapshots', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify(row) }, session.accessToken);
    return response.status === 201;
  }
  const { response, body } = await request(`/rest/v1/study_snapshots?account_id=eq.${encodeURIComponent(session.user.id)}&revision=eq.${expectedRemoteRevision}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify(row) }, session.accessToken);
  return response.status === 204 || (Array.isArray(body) && body.length > 0);
}

export async function synchronizeSnapshot(localSnapshot, lastSyncedRevision) {
  if (!session?.accessToken) throw new Error('Connecte-toi pour accéder à la synchronisation.');
  const remote = await readCloudSnapshot();
  const decision = decideSync({ local: localSnapshot, remote, lastSyncedRevision });
  if (decision.status === 'upload-local') {
    try {
      const uploaded = await uploadCloudSnapshot(localSnapshot, remote?.revision ?? null);
      if (!uploaded) return { status: 'conflict', local: localSnapshot, remote: await readCloudSnapshot(), reason: 'La copie distante a changé pendant l’envoi. Relance une comparaison avant toute modification.' };
    } catch (error) {
      if (error?.status === 409) return { status: 'conflict', local: localSnapshot, remote: await readCloudSnapshot(), reason: 'La sauvegarde distante existe déjà. Aucune donnée n’a été écrasée.' };
      throw error;
    }
  }
  return decision.status === 'upload-local' ? { status: 'uploaded', snapshot: localSnapshot } : decision;
}

/** Vérifie la configuration sans exposer la clé publique. */
export function cloudSyncConfigured() { return Boolean(config); }

/** Crée un compte avec les mêmes règles de validation que l'interface. */
export async function createAccount(email, password) { return signUp(email.trim(), password); }

/** Retourne l'identité de session sans exposer les jetons. */
export function getCloudSessionStatus() { return { configured: cloudSyncConfigured(), connected: Boolean(session?.accessToken), user: currentCloudUser() }; }
