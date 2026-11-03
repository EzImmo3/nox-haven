import type { ErrorEntry, Flashcard } from './types';

export type ChapterCandidate = {
  id: string;
  title: string;
  subjectId: string;
  status: 'pending' | 'started' | 'mastered';
};

export type ChapterSignal = {
  chapterId: string;
  cards: number;
  matureCards: number;
  dueCards: number;
  lapses: number;
  openErrors: number;
  score: number;
  label: 'Non évalué' | 'À consolider' | 'En progression' | 'Solide';
  reasons: string[];
};

/**
 * Estimation indicative fondée sur les traces disponibles pour un chapitre.
 * Elle ne remplace jamais la validation humaine du statut « maîtrisé ».
 */
export function getChapterSignal(chapterId: string, cards: Flashcard[], errors: ErrorEntry[], today: string, subjectId?: string): ChapterSignal {
  const normalizedChapter = chapterId.trim().toLocaleLowerCase();
  const belongsToChapter = (entry: { chapter: string; subjectId: string }) => entry.chapter.trim().toLocaleLowerCase() === normalizedChapter && (!subjectId || entry.subjectId === subjectId);
  const chapterCards = cards.filter(belongsToChapter);
  const chapterErrors = errors.filter(error => belongsToChapter(error) && error.status !== 'mastered');
  const matureCards = chapterCards.filter(card => card.repetitions >= 3).length;
  const dueCards = chapterCards.filter(card => { const date = card.dueAt.slice(0, 10); return /^\d{4}-\d{2}-\d{2}$/.test(date) && date <= today; }).length;
  const lapses = chapterCards.reduce((sum, card) => sum + card.lapses, 0);
  const openErrors = chapterErrors.length;
  const coverage = chapterCards.length ? matureCards / chapterCards.length : 0;
  const penalty = Math.min(35, openErrors * 12 + lapses * 2 + (dueCards ? 5 : 0));
  const score = chapterCards.length ? Math.max(0, Math.min(100, Math.round(coverage * 100 - penalty))) : 0;
  const label = !chapterCards.length && !openErrors ? 'Non évalué' : score >= 80 && openErrors === 0 && dueCards === 0 ? 'Solide' : score >= 45 ? 'En progression' : 'À consolider';
  const reasons: string[] = [];
  if (openErrors) reasons.push(`${openErrors} erreur(s) à retravailler`);
  if (dueCards) reasons.push(`${dueCards} rappel(s) arrivé(s) à échéance`);
  if (lapses) reasons.push(`${lapses} oubli(s) enregistré(s)`);
  if (!chapterCards.length && !openErrors) reasons.push('aucune donnée de révision pour le moment');
  if (!reasons.length) reasons.push('continuer à entretenir les acquis');
  return { chapterId, cards: chapterCards.length, matureCards, dueCards, lapses, openErrors, score, label, reasons };
}

/** Classe les chapitres sans inventer de résultats : les erreurs et rappels échus passent avant les chapitres vierges. */
export function rankChapterRecommendations<T extends ChapterCandidate>(chapters: T[], cards: Flashcard[], errors: ErrorEntry[], today: string): Array<T & { signal: ChapterSignal; priority: number }> {
  return chapters
    .filter(chapter => chapter.status !== 'mastered')
    .map(chapter => {
      const signal = getChapterSignal(chapter.title, cards, errors, today, chapter.subjectId);
      // A chapter with no learning traces is not treated as weak: existing evidence drives the ranking.
      const hasEvidence = signal.cards > 0 || signal.openErrors > 0;
      const priority = signal.openErrors * 25 + signal.dueCards * 8 + signal.lapses * 3 + (chapter.status === 'started' ? 8 : 0) + (hasEvidence ? (100 - signal.score) * 0.1 : 0);
      return { ...chapter, signal, priority };
    })
    .sort((a, b) => b.priority - a.priority);
}

export function getWeeklyLearningSummary(sessions: Array<{ date: string; durationMinutes: number; cardsReviewed: number; correct: number }>, today: string) {
  const end = new Date(`${today}T12:00:00`);
  const start = new Date(end);
  start.setDate(start.getDate() - 6);
  const startKey = `${start.getFullYear()}-${String(start.getMonth()+1).padStart(2,'0')}-${String(start.getDate()).padStart(2,'0')}`;
  const current = sessions.filter(session => session.date >= startKey && session.date <= today);
  const minutes = current.reduce((sum, session) => sum + session.durationMinutes, 0);
  const reviewed = current.reduce((sum, session) => sum + session.cardsReviewed, 0);
  const correct = current.reduce((sum, session) => sum + session.correct, 0);
  return { sessions: current.length, minutes, cardsReviewed: reviewed, accuracy: reviewed ? Math.round(correct / reviewed * 100) : null, startDate: startKey, endDate: today };
}


/** Calcule un indice d'urgence explicable à partir des données réellement enregistrées. */
export function getRevisionUrgency(input: {
  kind: 'flashcards' | 'errors' | 'chapter';
  count?: number;
  dueDate?: string;
  today: string;
  errorStatus?: 'todo' | 'working' | 'mastered';
  updatedAt?: string;
}): number {
  if (input.kind === 'chapter') return 10;
  if (input.kind === 'flashcards') {
    const due = input.dueDate?.slice(0, 10) ?? input.today;
    const lateDays = Math.max(0, Math.floor((Date.parse(`${input.today}T12:00:00`) - Date.parse(`${due}T12:00:00`)) / 86400000));
    return 60 + Math.min(25, lateDays * 3) + Math.min(15, Math.max(0, input.count ?? 0) * 2);
  }
  const statusWeight = input.errorStatus === 'todo' ? 45 : input.errorStatus === 'working' ? 32 : 0;
  const updated = input.updatedAt?.slice(0, 10);
  const ageDays = updated && /^\d{4}-\d{2}-\d{2}$/.test(updated)
    ? Math.max(0, Math.floor((Date.parse(`${input.today}T12:00:00`) - Date.parse(`${updated}T12:00:00`)) / 86400000))
    : 0;
  return statusWeight + Math.min(15, ageDays) + Math.min(10, Math.max(0, input.count ?? 0) * 2);
}

export type StudyPlanSuggestion = {
  id: string;
  title: string;
  subjectId: string;
  chapter: string;
  durationMinutes: number;
  reason: string;
  kind: 'flashcards' | 'errors' | 'chapter';
};

/** Construit quelques séances concrètes à partir des besoins observés, sans créer de données fictives. */
export function buildDailyStudyPlan(input: {
  cards: Flashcard[];
  errors: ErrorEntry[];
  recommendations: Array<{ id: string; title: string; subjectId: string; status: 'pending' | 'started' | 'mastered' }>;
  tasks: Array<{ subjectId: string; chapter: string; dueDate: string; completed: boolean }>;
  today: string;
  limit?: number;
}): StudyPlanSuggestion[] {
  const limit = Math.max(0, Math.min(6, Math.floor(input.limit ?? 4)));
  const pendingTasks = input.tasks.filter(task => !task.completed);
  const alreadyPlanned = (subjectId: string, chapter: string) => pendingTasks.some(task => task.subjectId === subjectId && task.chapter.trim().toLocaleLowerCase() === chapter.trim().toLocaleLowerCase());
  const suggestions: StudyPlanSuggestion[] = [];
  const dueGroups = new Map<string, { subjectId: string; chapter: string; count: number }>();
  for (const card of input.cards) {
    if (card.dueAt.slice(0, 10) > input.today) continue;
    const key = `${card.subjectId}::${card.chapter.trim().toLocaleLowerCase()}`;
    const group = dueGroups.get(key) ?? { subjectId: card.subjectId, chapter: card.chapter, count: 0 };
    group.count += 1;
    dueGroups.set(key, group);
  }
  for (const group of [...dueGroups.values()].sort((a, b) => b.count - a.count)) {
    if (alreadyPlanned(group.subjectId, group.chapter)) continue;
    suggestions.push({ id: `cards:${group.subjectId}:${group.chapter}`, title: 'Réviser les flashcards dues', subjectId: group.subjectId, chapter: group.chapter, durationMinutes: Math.min(30, Math.max(10, Math.ceil(group.count * 1.5 / 5) * 5)), reason: `${group.count} carte(s) attendent une révision dans ce chapitre.`, kind: 'flashcards' });
  }
  const errorGroups = new Map<string, { subjectId: string; chapter: string; count: number }>();
  for (const error of input.errors) {
    if (error.status === 'mastered') continue;
    const key = `${error.subjectId}::${error.chapter.trim().toLocaleLowerCase()}`;
    const group = errorGroups.get(key) ?? { subjectId: error.subjectId, chapter: error.chapter, count: 0 };
    group.count += 1;
    errorGroups.set(key, group);
  }
  for (const group of [...errorGroups.values()].sort((a, b) => b.count - a.count)) {
    if (alreadyPlanned(group.subjectId, group.chapter)) continue;
    suggestions.push({ id: `errors:${group.subjectId}:${group.chapter}`, title: 'Reprendre les erreurs', subjectId: group.subjectId, chapter: group.chapter, durationMinutes: Math.min(35, 15 + group.count * 5), reason: `${group.count} erreur(s) ne sont pas encore maîtrisée(s).`, kind: 'errors' });
  }
  for (const chapter of input.recommendations) {
    if (chapter.status === 'mastered' || alreadyPlanned(chapter.subjectId, chapter.title)) continue;
    if (suggestions.some(item => item.subjectId === chapter.subjectId && item.chapter.trim().toLocaleLowerCase() === chapter.title.trim().toLocaleLowerCase())) continue;
    suggestions.push({ id: `chapter:${chapter.id}`, title: 'Consolider un chapitre', subjectId: chapter.subjectId, chapter: chapter.title, durationMinutes: 25, reason: chapter.status === 'started' ? 'Chapitre commencé : une séance courte permet de poursuivre.' : 'Chapitre à découvrir : commence par les objectifs et les notions essentielles.', kind: 'chapter' });
  }
  const urgency = (item: StudyPlanSuggestion) => {
    if (item.kind === 'chapter') return getRevisionUrgency({ kind: 'chapter', today: input.today });
    if (item.kind === 'flashcards') {
      const matching = input.cards.filter(card => card.subjectId === item.subjectId && card.chapter.trim().toLocaleLowerCase() === item.chapter.trim().toLocaleLowerCase() && card.dueAt.slice(0, 10) <= input.today);
      const oldestDue = matching.map(card => card.dueAt.slice(0, 10)).sort()[0];
      return getRevisionUrgency({ kind: 'flashcards', count: matching.length, dueDate: oldestDue, today: input.today });
    }
    const matching = input.errors.filter(error => error.subjectId === item.subjectId && error.chapter.trim().toLocaleLowerCase() === item.chapter.trim().toLocaleLowerCase() && error.status !== 'mastered');
    const status = matching.some(error => error.status === 'todo') ? 'todo' : 'working';
    const oldestUpdate = matching.map(error => error.updatedAt.slice(0, 10)).sort()[0];
    return getRevisionUrgency({ kind: 'errors', count: matching.length, errorStatus: status, updatedAt: oldestUpdate, today: input.today });
  };
  return suggestions.map((item, index) => ({ item, index, score: urgency(item) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(entry => entry.item);
}


export type WeeklyStudySuggestion = StudyPlanSuggestion & { date: string };

/** Répartit les priorités sur sept jours en respectant une enveloppe quotidienne et les séances déjà prévues. */
export function buildWeeklyStudyPlan(input: {
  cards: Flashcard[];
  errors: ErrorEntry[];
  recommendations: Array<{ id: string; title: string; subjectId: string; status: 'pending' | 'started' | 'mastered' }>;
  tasks: Array<{ subjectId: string; chapter: string; dueDate: string; durationMinutes: number; completed: boolean }>;
  today: string;
  dailyCapacityMinutes?: number;
}): WeeklyStudySuggestion[] {
  const capacity = Math.max(15, Math.min(240, Math.floor(input.dailyCapacityMinutes ?? 60)));
  const candidates = buildDailyStudyPlan({
    cards: input.cards,
    errors: input.errors,
    recommendations: input.recommendations,
    tasks: input.tasks,
    today: input.today,
    limit: 6
  });
  const loadByDay = new Map<string, number>();
  for (const task of input.tasks) {
    if (task.completed || task.dueDate < input.today) continue;
    loadByDay.set(task.dueDate, (loadByDay.get(task.dueDate) ?? 0) + task.durationMinutes);
  }
  const result: WeeklyStudySuggestion[] = [];
  const pad = (n: number) => String(n).padStart(2, '0');
  const dateAt = (offset: number) => {
    const date = new Date(`${input.today}T12:00:00`);
    date.setDate(date.getDate() + offset);
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  };
  let dayOffset = 0;
  for (const candidate of candidates) {
    let placed = false;
    for (let attempt = 0; attempt < 7; attempt++) {
      const offset = (dayOffset + attempt) % 7;
      const date = dateAt(offset);
      const currentLoad = loadByDay.get(date) ?? 0;
      if (currentLoad + candidate.durationMinutes <= capacity) {
        result.push({ ...candidate, id: `week:${date}:${candidate.id}`, date });
        loadByDay.set(date, currentLoad + candidate.durationMinutes);
        dayOffset = (offset + 1) % 7;
        placed = true;
        break;
      }
    }
    if (!placed) continue;
  }
  return result;
}

export function normalizeDailyCapacity(value: unknown, fallback = 60): number {
  const allowed = [30, 45, 60, 90, 120];
  const parsed = typeof value === 'number' ? value : Number(value);
  return allowed.includes(parsed) ? parsed : fallback;
}

export function getWeeklyPlanSummary(
  suggestions: WeeklyStudySuggestion[],
  tasks: Array<{ dueDate: string; durationMinutes: number; completed: boolean }>,
  today: string,
  dailyCapacityMinutes: number
) {
  const end = new Date(`${today}T12:00:00`);
  end.setDate(end.getDate() + 6);
  const endKey = `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}-${String(end.getDate()).padStart(2, '0')}`;
  const inRange = (date: string) => date >= today && date <= endKey;
  const existing = tasks.filter(task => !task.completed && inRange(task.dueDate));
  const suggested = suggestions.filter(item => inRange(item.date));
  const minutesAlreadyPlanned = existing.reduce((sum, task) => sum + task.durationMinutes, 0);
  const suggestedMinutes = suggested.reduce((sum, item) => sum + item.durationMinutes, 0);
  const dayLoads = new Map<string, number>();
  for (const task of existing) dayLoads.set(task.dueDate, (dayLoads.get(task.dueDate) ?? 0) + task.durationMinutes);
  for (const item of suggested) dayLoads.set(item.date, (dayLoads.get(item.date) ?? 0) + item.durationMinutes);
  const overloadedDays = [...dayLoads.values()].filter(minutes => minutes > dailyCapacityMinutes).length;
  return {
    startDate: today, endDate: endKey,
    sessions: existing.length + suggested.length,
    minutesAlreadyPlanned, suggestedMinutes, totalMinutes: minutesAlreadyPlanned + suggestedMinutes,
    daysUsed: dayLoads.size, overloadedDays,
    remainingCapacityMinutes: Math.max(0, dailyCapacityMinutes * 7 - (minutesAlreadyPlanned + suggestedMinutes))
  };
}

