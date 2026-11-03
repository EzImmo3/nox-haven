import type { Grade, StudyData } from './types';
export type MonthlyAverage = { key: string; label: string; average: number | null; count: number };
export function buildMonthlyAverageTrend(grades: Grade[], now?: Date, months?: number): MonthlyAverage[];
export function getSubjectPerformance(data: StudyData): { id: string; name: string; average: number | null; gradeCount: number; weight: number }[];
export function getTargetProgress(average: number | null, target: number | null): { average: number | null; target: number | null; gap: number | null; percent: number | null; reached: boolean };
