export type ChapterQuizBreakdown = {
  subjectId: string;
  chapterId: string;
  chapterTitle: string;
  verified: number;
  correct: number;
};

export type ChapterQuizSession = {
  chapterBreakdown?: ChapterQuizBreakdown[];
};

export type ChapterQuizStat = ChapterQuizBreakdown & {
  sessions: number;
  accuracy: number;
};

/** Aggregate only explicitly attributed quiz results; legacy sessions remain global-only. */
export function buildChapterQuizStats(
  sessions: readonly ChapterQuizSession[] | null | undefined,
  limit?: number,
): ChapterQuizStat[];
