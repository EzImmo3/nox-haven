export type CloudSnapshot<T = unknown> = { protocol: 1; accountId: string; deviceId: string; revision: number; parentRevision: number; updatedAt: string; checksum: string; payload: T };
export function configureCloudSync(options: { url: string; anonKey: string; fetchImpl?: typeof fetch }): void;
export function signUp(email: string, password: string): Promise<{ user: unknown; needsEmailConfirmation: boolean }>;
export function signIn(email: string, password: string): Promise<{ id: string; email: string }>;
export function currentCloudUser(): { id: string; email: string } | null;
export function signOut(): Promise<void>;
export function checksumPayload(payload: unknown): Promise<string>;
export function createCloudSnapshot<T>(input: { accountId: string; deviceId: string; revision: number; parentRevision: number; payload: T }): Promise<CloudSnapshot<T>>;
export function readCloudSnapshot<T>(): Promise<CloudSnapshot<T> | null>;
export function uploadCloudSnapshot<T>(snapshot: CloudSnapshot<T>, expectedRemoteRevision?: number | null): Promise<boolean>;
export function synchronizeSnapshot<T>(localSnapshot: CloudSnapshot<T>, lastSyncedRevision: number): Promise<unknown>;
export function cloudSyncConfigured(): boolean;
export function createAccount(email: string, password: string): Promise<{ user: unknown; needsEmailConfirmation: boolean }>;
export function getCloudSessionStatus(): { configured: boolean; connected: boolean; user: { id: string; email: string } | null };

export function refreshCloudSession(): Promise<boolean>;
