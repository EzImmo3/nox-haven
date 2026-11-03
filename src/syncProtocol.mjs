/** NOX HAVEN sync protocol primitives. No server is contacted by this module. */
export function validateSyncSnapshot(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value)
    && value.protocol === 1
    && typeof value.accountId === 'string' && value.accountId.length > 0
    && typeof value.deviceId === 'string' && value.deviceId.length > 0
    && Number.isSafeInteger(value.revision) && value.revision >= 0
    && Number.isSafeInteger(value.parentRevision) && value.parentRevision >= 0
    && typeof value.updatedAt === 'string' && Number.isFinite(Date.parse(value.updatedAt))
    && typeof value.checksum === 'string' && /^[a-f0-9]{64}$/i.test(value.checksum)
    && Object.hasOwn(value, 'payload'));
}

export function decideSync({ local, remote, lastSyncedRevision }) {
  if (!Number.isSafeInteger(lastSyncedRevision) || lastSyncedRevision < 0) throw new Error('Révision de synchronisation invalide.');
  if (!validateSyncSnapshot(local)) throw new Error('Copie locale invalide.');
  if (!remote) return { status: 'upload-local', snapshot: local };
  if (!validateSyncSnapshot(remote)) throw new Error('Copie distante invalide.');
  if (remote.accountId !== local.accountId) throw new Error('Les copies appartiennent à des comptes différents.');
  if (remote.checksum === local.checksum) return { status: 'unchanged', snapshot: local };
  const localChanged = local.revision > lastSyncedRevision;
  const remoteChanged = remote.revision > lastSyncedRevision;
  if (localChanged && !remoteChanged) return { status: 'upload-local', snapshot: local };
  if (!localChanged && remoteChanged) return { status: 'download-remote', snapshot: remote };
  return { status: 'conflict', local, remote, reason: localChanged && remoteChanged
    ? 'Les deux appareils ont modifié les données depuis la dernière synchronisation. Aucun écrasement automatique ne sera effectué.'
    : 'Les révisions ne permettent pas de déterminer une copie plus récente.' };
}

export function createDeviceId(cryptoApi = globalThis.crypto) {
  const bytes = new Uint8Array(16);
  cryptoApi.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}
