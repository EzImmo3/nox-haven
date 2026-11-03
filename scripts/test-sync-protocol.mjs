import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { decideSync, validateSyncSnapshot, createDeviceId } from '../src/syncProtocol.mjs';
const make = (revision, parentRevision, checksum, deviceId='device-a') => ({
  protocol: 1, accountId: 'account-a', deviceId, revision, parentRevision,
  updatedAt: '2026-11-02T12:00:00.000Z', checksum, payload: { revision },
});
const a = 'a'.repeat(64), b = 'b'.repeat(64);
assert.equal(validateSyncSnapshot(make(1, 0, a)), true);
assert.equal(validateSyncSnapshot({ ...make(1, 0, a), checksum: 'bad' }), false);
assert.equal(decideSync({ local: make(1, 0, a), remote: null, lastSyncedRevision: 0 }).status, 'upload-local');
assert.equal(decideSync({ local: make(1, 0, a), remote: make(1, 0, a, 'device-b'), lastSyncedRevision: 1 }).status, 'unchanged');
assert.equal(decideSync({ local: make(2, 1, b), remote: make(1, 0, a, 'device-b'), lastSyncedRevision: 1 }).status, 'upload-local');
assert.equal(decideSync({ local: make(1, 0, a), remote: make(2, 1, b, 'device-b'), lastSyncedRevision: 1 }).status, 'download-remote');
assert.equal(decideSync({ local: make(2, 1, b), remote: make(2, 1, 'c'.repeat(64), 'device-b'), lastSyncedRevision: 1 }).status, 'conflict');
assert.throws(() => decideSync({ local: make(1, 0, a), remote: { ...make(1, 0, a, 'device-b'), accountId: 'other' }, lastSyncedRevision: 1 }), /comptes différents/);
assert.equal(createDeviceId(webcrypto).length, 32);
console.log('PROTOCOLE DE SYNCHRONISATION — 8/8 tests réussis');
