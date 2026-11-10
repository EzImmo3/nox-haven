/** Monthly weighted averages, with empty months represented by null. */
export function buildMonthlyAverageTrend(grades, now = new Date(), months = 6) {
  const safeMonths = Math.max(1, Math.min(24, Math.floor(months)));
  const buckets = [];
  for (let offset = safeMonths - 1; offset >= 0; offset--) {
    const date = new Date(now.getFullYear(), now.getMonth() - offset, 1, 12);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthGrades = grades.filter(g => g.status === 'normal' && /^\d{4}-\d{2}-\d{2}$/.test(g.date) && g.date.slice(0, 7) === key);
    const earned = monthGrades.reduce((sum, g) => sum + (g.score / g.outOf) * 20 * g.coefficient, 0);
    const weights = monthGrades.reduce((sum, g) => sum + g.coefficient, 0);
    buckets.push({ key, label: new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date).replace('.', ''), average: weights ? earned / weights : null, count: monthGrades.length });
  }
  return buckets;
}

export function getSubjectPerformance(data) {
  return data.subjects.filter(s => s.active !== false && s.includeInAverage && s.calculationMode === 'normal')
    .map(subject => {
      const grades = data.grades.filter(g => g.subjectId === subject.id && g.status === 'normal');
      const earned = grades.reduce((sum, g) => sum + g.score * g.coefficient, 0);
      const possible = grades.reduce((sum, g) => sum + g.outOf * g.coefficient, 0);
      return { id: subject.id, name: subject.name, average: possible ? earned / possible * 20 : null, gradeCount: grades.length, weight: subject.weight };
    }).sort((a, b) => (a.average ?? -1) - (b.average ?? -1));
}

export function getTargetProgress(average, target) {
  if (target === null || average === null) return { average, target, gap: null, percent: null, reached: false };
  return { average, target, gap: Math.max(0, target - average), percent: Math.min(100, Math.round(average / Math.max(target, 0.01) * 100)), reached: average >= target };
}

/** Overall mastery summary for the exact set of active curriculum subjects supplied by the caller. */
export function getChapterProgressSummary(subjects, chapterProgress = {}) {
  const chapters = (Array.isArray(subjects) ? subjects : []).flatMap(subject => Array.isArray(subject.chapters) ? subject.chapters : []);
  const mastered = chapters.filter(chapter => chapterProgress?.[chapter.id] === 'mastered').length;
  const started = chapters.filter(chapter => chapterProgress?.[chapter.id] === 'started').length;
  const total = chapters.length;
  const pending = Math.max(0, total - mastered - started);
  return { total, mastered, started, pending, percentage: total ? Math.round(mastered / total * 100) : 0 };
}

/** Per-subject learning progress, based only on saved chapter statuses and revision data. */
export function buildSubjectLearningProgress(subjects, chapterProgress, flashcards = [], errors = [], resources = {}, todayKey = new Date().toISOString().slice(0, 10)) {
  return subjects.map(subject => {
    const chapters = Array.isArray(subject.chapters) ? subject.chapters : [];
    const mastered = chapters.filter(chapter => chapterProgress?.[chapter.id] === 'mastered').length;
    const started = chapters.filter(chapter => chapterProgress?.[chapter.id] === 'started').length;
    const subjectCards = flashcards.filter(card => card.subjectId === subject.id);
    const subjectErrors = errors.filter(error => error.subjectId === subject.id && error.status !== 'mastered');
    const availableResources = chapters.filter(chapter => Boolean(resources?.[chapter.id])).length;
    return {
      id: subject.id, name: subject.title ?? subject.name ?? subject.id,
      total: chapters.length, mastered, started, pending: Math.max(0, chapters.length - mastered - started),
      percentage: chapters.length ? Math.round(mastered / chapters.length * 100) : 0,
      cards: subjectCards.length, dueCards: subjectCards.filter(card => typeof card.dueAt === 'string' && /^\d{4}-\d{2}-\d{2}/.test(card.dueAt) && card.dueAt.slice(0, 10) <= todayKey).length,
      openErrors: subjectErrors.length, availableResources,
    };
  }).filter(subject => subject.total > 0).sort((a, b) => a.percentage - b.percentage || b.openErrors - a.openErrors || a.name.localeCompare(b.name, 'fr'));
}
