export type SyncSnapshot<T> = {
  protocol: 1; accountId: string; deviceId: string; revision: number;
  parentRevision: number; updatedAt: string; checksum: string; payload: T;
};
export type SyncDecision<T> =
  | { status: 'unchanged' | 'upload-local' | 'download-remote'; snapshot: SyncSnapshot<T> }
  | { status: 'conflict'; local: SyncSnapshot<T>; remote: SyncSnapshot<T>; reason: string };
export function validateSyncSnapshot<T>(value: unknown): value is SyncSnapshot<T>;
export function decideSync<T>(input: { local: SyncSnapshot<T>; remote: SyncSnapshot<T> | null; lastSyncedRevision: number }): SyncDecision<T>;
export function createDeviceId(cryptoApi?: Pick<Crypto, 'getRandomValues'>): string;
