/** Aggregate only explicitly attributed quiz results; legacy sessions remain global-only. */
export function buildChapterQuizStats(sessions, limit = 8) {
  const aggregate = new Map();
  for (const session of Array.isArray(sessions) ? sessions : []) {
    if (!Array.isArray(session?.chapterBreakdown)) continue;
    for (const item of session.chapterBreakdown) {
      if (!item || typeof item.subjectId !== 'string' || !item.subjectId ||
          typeof item.chapterId !== 'string' || !item.chapterId ||
          typeof item.chapterTitle !== 'string' || !item.chapterTitle ||
          !Number.isInteger(item.verified) || item.verified <= 0 ||
          !Number.isInteger(item.correct) || item.correct < 0 || item.correct > item.verified) continue;
      const current = aggregate.get(item.chapterId) ?? {
        subjectId: item.subjectId, chapterId: item.chapterId,
        chapterTitle: item.chapterTitle, verified: 0, correct: 0, sessions: 0,
      };
      current.verified += item.verified;
      current.correct += item.correct;
      current.sessions += 1;
      aggregate.set(item.chapterId, current);
    }
  }
  const safeLimit = Number.isInteger(limit) ? Math.max(0, Math.min(100, limit)) : 8;
  return [...aggregate.values()]
    .sort((a, b) => b.verified - a.verified || b.correct - a.correct || a.chapterTitle.localeCompare(b.chapterTitle))
    .slice(0, safeLimit)
    .map(item => ({ ...item, accuracy: Math.round(item.correct / item.verified * 100) }));
}
