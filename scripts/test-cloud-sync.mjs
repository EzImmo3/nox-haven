import assert from 'node:assert/strict';
import { configureCloudSync, signIn, currentCloudUser, signOut, refreshCloudSession, createCloudSnapshot, checksumPayload, uploadCloudSnapshot, readCloudSnapshot, readCloudRevision, writeCloudRevision } from '../src/cloudSync.mjs';

const accountId = '11111111-1111-4111-8111-111111111111';
const revisionValues = new Map();
const revisionStorage = {
  getItem: key => revisionValues.has(key) ? revisionValues.get(key) : null,
  setItem: (key, value) => revisionValues.set(key, String(value)),
  removeItem: key => revisionValues.delete(key),
};
assert.equal(readCloudRevision('account-a', revisionStorage), 0);
writeCloudRevision('account-a', 7, revisionStorage);
assert.equal(readCloudRevision('account-a', revisionStorage), 7);
assert.equal(readCloudRevision('account-b', revisionStorage), 0, 'Les révisions de deux comptes doivent rester indépendantes.');
revisionStorage.setItem('nox-haven:last-cloud-revision:v1', '99');
assert.equal(readCloudRevision('account-b', revisionStorage), 0, 'Une ancienne révision globale ne doit pas contaminer un nouveau compte.');
assert.throws(() => writeCloudRevision('account-a', -1, revisionStorage), /Révision/);
assert.throws(() => writeCloudRevision('', 1, revisionStorage), /Compte/);

let stored = null;
let calls = [];
const fetchMock = async (url, options = {}) => {
  calls.push({ url, options });
  if (url.includes('/auth/v1/token')) return new Response(JSON.stringify({ access_token: 'test-access', refresh_token: 'test-refresh', user: { id: accountId, email: 'test@example.com' } }), { status: 200 });
  if (url.includes('/rest/v1/study_snapshots') && options.method === 'GET') return new Response(JSON.stringify(stored ? [stored] : []), { status: 200 });
  if (url.includes('/rest/v1/study_snapshots') && options.method === 'POST') { stored = JSON.parse(options.body); return new Response('', { status: 201 }); }
  if (url.includes('/rest/v1/study_snapshots') && options.method === 'PATCH') { stored = JSON.parse(options.body); return new Response(JSON.stringify([stored]), { status: 200 }); }
  if (url.includes('/auth/v1/logout')) return new Response(null, { status: 204 });
  return new Response(JSON.stringify({ message: 'Unexpected request' }), { status: 404 });
};

configureCloudSync({ url: 'https://example.supabase.co', anonKey: 'public-anon-test-key', fetchImpl: fetchMock });
await assert.rejects(() => import('../src/cloudSync.mjs').then(m => m.signUp('bad', 'pw')), /Adresse e-mail invalide/);
await signIn('test@example.com', 'a-long-test-password');
assert.equal(currentCloudUser().id, accountId);
assert.equal(await refreshCloudSession(), true);
assert.equal(currentCloudUser().email, 'test@example.com');
const payload = { version: 3, grades: [{ id: 'g1', score: 15 }] };
const snapshot = await createCloudSnapshot({ accountId, deviceId: '0123456789abcdef0123456789abcdef', revision: 1, parentRevision: 0, payload });
assert.equal(snapshot.checksum, await checksumPayload(payload));
assert.equal(await uploadCloudSnapshot(snapshot, null), true);
const restored = await readCloudSnapshot();
assert.deepEqual(restored.payload, payload);
assert.equal(restored.revision, 1);
assert.ok(calls.every(call => call.options.headers?.apikey === 'public-anon-test-key'));
await signOut();
assert.equal(currentCloudUser(), null);
console.log('Cloud sync adapter and account-scoped revisions: assertions passed. (Mock server only; no real Supabase project contacted.)');
