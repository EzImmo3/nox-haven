import type { Grade, StudyData } from './types';
export type MonthlyAverage = { key: string; label: string; average: number | null; count: number };
export function buildMonthlyAverageTrend(grades: Grade[], now?: Date, months?: number): MonthlyAverage[];
export function getSubjectPerformance(data: StudyData): { id: string; name: string; average: number | null; gradeCount: number; weight: number }[];
export function getChapterProgressSummary(subjects: { id: string; chapters: { id: string }[] }[], chapterProgress: Record<string, string>): { total: number; mastered: number; started: number; pending: number; percentage: number };
export function getTargetProgress(average: number | null, target: number | null): { average: number | null; target: number | null; gap: number | null; percent: number | null; reached: boolean };
export type SubjectLearningProgress = { id: string; name: string; total: number; mastered: number; started: number; pending: number; percentage: number; cards: number; dueCards: number; openErrors: number; availableResources: number };
export function buildSubjectLearningProgress(subjects: { id: string; title?: string; name?: string; chapters: { id: string }[] }[], chapterProgress: Record<string, string>, flashcards?: { subjectId: string; dueAt?: string }[], errors?: { subjectId: string; status: string }[], resources?: Record<string, unknown>, todayKey?: string): SubjectLearningProgress[];
