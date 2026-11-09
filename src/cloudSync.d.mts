export type CloudSnapshot<T = unknown> = { protocol: 1; accountId: string; deviceId: string; revision: number; parentRevision: number; updatedAt: string; checksum: string; payload: T };
export type CloudSyncResult<T = unknown> =
  | { status: 'uploaded'; snapshot: CloudSnapshot<T> }
  | { status: 'unchanged'; snapshot: CloudSnapshot<T> }
  | { status: 'download-remote'; snapshot: CloudSnapshot<T> }
  | { status: 'conflict'; local: CloudSnapshot<T>; remote: CloudSnapshot<T> | null; reason: string };
export function configureCloudSync(options: { url: string; anonKey: string; fetchImpl?: typeof fetch }): void;
export function signUp(email: string, password: string): Promise<{ user: unknown; needsEmailConfirmation: boolean }>;
export function signIn(email: string, password: string): Promise<{ id: string; email: string }>;
export function currentCloudUser(): { id: string; email: string } | null;
export function signOut(): Promise<void>;
export function checksumPayload(payload: unknown): Promise<string>;
export function createCloudSnapshot<T>(input: { accountId: string; deviceId: string; revision: number; parentRevision: number; payload: T }): Promise<CloudSnapshot<T>>;
export function readCloudSnapshot<T>(): Promise<CloudSnapshot<T> | null>;
export function uploadCloudSnapshot<T>(snapshot: CloudSnapshot<T>, expectedRemoteRevision?: number | null, expectedRemoteChecksum?: string | null): Promise<boolean>;
export function synchronizeSnapshot<T>(localSnapshot: CloudSnapshot<T>, lastSyncedRevision: number): Promise<CloudSyncResult<T>>;
export function cloudSyncConfigured(): boolean;
export function createAccount(email: string, password: string): Promise<{ user: unknown; needsEmailConfirmation: boolean }>;
export function getCloudSessionStatus(): { configured: boolean; connected: boolean; user: { id: string; email: string } | null };

export function refreshCloudSession(): Promise<boolean>;

export function inspectCloudSnapshot<T = unknown>(): Promise<{ status: 'empty' } | { status: 'valid'; snapshot: CloudSnapshot<T> } | { status: 'invalid'; revision: number; checksum: string }>;
export function replaceInvalidCloudSnapshot<T = unknown>(input: { snapshot: CloudSnapshot<T>; expectedRevision: number; expectedChecksum: string }): Promise<boolean>;
