export type SmartReminder = { id: string; priority: number; title: string; detail: string; action: string; tab: string };
export function buildSmartReminders(data: unknown, today: string): SmartReminder[];
