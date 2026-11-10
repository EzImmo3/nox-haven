type FocusSessionShape = { mode: string; date: string; durationMinutes: number; energyBefore?: number; energyAfter?: number };
export function summarizeFocusSessions<T extends FocusSessionShape>(sessions: T[], todayKey: string): {
  totalSessions: number; weekSessions: T[]; weekMinutes: number; energyPairs: number;
  energyDelta: number | null; startDate: string; endDate: string;
};
export function getFocusEnergyLabel(value: number): string;
export function getRecommendedFocusDuration(energy: number): number;
