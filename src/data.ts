
import type { Flashcard, Subject, StudyData } from './types';
export const STORAGE_KEY = 'studyflow_data_v1';
export const PROFILE_KEY = 'studyflow_profile_v1';
export const DEFAULT_SUBJECTS: Subject[] = [
  { id: 'hggsp-spe', name: 'HGGSP — Histoire-géographie, géopolitique et sciences politiques', category: 'specialite', weight: 1, includeInAverage: true, active: false, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'maths-spe', name: 'Mathématiques — Spécialité', category: 'specialite', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'pc-spe', name: 'Physique-chimie — Spécialité', category: 'specialite', weight: 1, includeInAverage: true, active: false, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'svt-spe', name: 'SVT — Spécialité', category: 'specialite', weight: 1, includeInAverage: true, active: false, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'ses-spe', name: 'SES — Spécialité', category: 'specialite', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'maths-exp', name: 'Mathématiques expertes', category: 'option', weight: 1, includeInAverage: true, active: true, calculationMode: 'bonus', bonusThreshold: 10, bonusCoefficient: 3 },
  { id: 'maths-comp', name: 'Mathématiques complémentaires', category: 'option', weight: 1, includeInAverage: true, active: false, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'philo', name: 'Philosophie', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'histoire-geo', name: 'Histoire-Géographie', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'emc', name: 'Enseignement moral et civique', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'anglais', name: 'Anglais — LVA', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'espagnol', name: 'Espagnol — LVB', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'allemand', name: 'Allemand — LVB', category: 'tronc', weight: 1, includeInAverage: true, active: false, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'ens-scientifique', name: 'Enseignement scientifique', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'eps', name: 'EPS', category: 'tronc', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 },
  { id: 'francais-eaf', name: 'Français — Épreuves anticipées', category: 'autre', weight: 1, includeInAverage: false, active: false, calculationMode: 'excluded', bonusThreshold: 10, bonusCoefficient: 1 },
];
export const EMPTY_DATA: StudyData = { version: 3, subjects: DEFAULT_SUBJECTS, grades: [], bacGrades: {}, grandOral: [], notebook: [], orientation: [], notes: [], flashcards: [], errors: [], sessions: [], tasks: [] };
export const makeId = () => typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const today = () => { const d = new Date(); const pad = (n: number) => String(n).padStart(2, '0'); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
export const isValidDateKey = (value: string) => { if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false; const [year, month, day] = value.split('-').map(Number); const date = new Date(year, month - 1, day, 12); return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day; };
export const isoNow = () => new Date().toISOString();

/** Planifie une carte selon une variante simple et testable de SM-2.
 * quality: 0 = à revoir, 1 = difficile, 2 = bien, 3 = facile.
 */
export function scheduleFlashcardReview(card: Flashcard, quality: 0 | 1 | 2 | 3, reviewedAt = new Date()): Flashcard {
  let interval = card.interval;
  let repetitions = card.repetitions;
  let ease = card.ease;
  let lapses = card.lapses;
  if (quality === 0) {
    interval = 1;
    repetitions = 0;
    lapses += 1;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    const previousRepetitions = repetitions;
    repetitions += 1;
    if (quality === 1) interval = previousRepetitions === 0 ? 1 : previousRepetitions === 1 ? 3 : Math.max(1, Math.round(Math.max(1, interval) * ease * 1.2));
    else if (quality === 2) interval = previousRepetitions === 0 ? 1 : previousRepetitions === 1 ? 6 : Math.max(1, Math.round(Math.max(1, interval) * ease));
    else interval = previousRepetitions === 0 ? 4 : previousRepetitions === 1 ? 10 : Math.max(1, Math.round(Math.max(1, interval) * ease * 1.3));
    ease = Math.max(1.3, ease + (quality === 1 ? -0.15 : quality === 3 ? 0.15 : 0));
  }
  const due = new Date(reviewedAt);
  due.setHours(12, 0, 0, 0);
  due.setDate(due.getDate() + interval);
  const pad = (n: number) => String(n).padStart(2, '0');
  const dueAt = `${due.getFullYear()}-${pad(due.getMonth() + 1)}-${pad(due.getDate())}T12:00:00`;
  return { ...card, interval, ease, repetitions, lapses, dueAt, lastReviewedAt: reviewedAt.toISOString() };
}

export function isRecord(v: unknown): v is Record<string, any> { return typeof v === 'object' && v !== null && !Array.isArray(v); }
export function migrateData(value: unknown): StudyData {
  if (!isRecord(value) || !Array.isArray(value.subjects) || !Array.isArray(value.grades)) throw new Error('Sauvegarde StudyFlow invalide.');
  const subjects = (value.subjects as any[]).map(s => isRecord(s) ? ({ ...s, calculationMode: s.calculationMode ?? (s.id === 'maths-exp' ? 'bonus' : (s.includeInAverage ? 'normal' : 'excluded')), bonusThreshold: Number.isFinite(s.bonusThreshold) ? s.bonusThreshold : 10, bonusCoefficient: Number.isFinite(s.bonusCoefficient) ? s.bonusCoefficient : (s.id === 'maths-exp' ? 3 : 1) }) : s) as Subject[];
  const grades = (value.grades as any[]).map(g => isRecord(g) ? ({ ...g, status: g.status ?? 'normal', bonusThreshold: Number.isFinite(g.bonusThreshold) ? g.bonusThreshold : 10 }) : g) as StudyData['grades'];
  const bacGrades = value.bacGrades === undefined ? {} : value.bacGrades;
  if (!isRecord(bacGrades) || Object.entries(bacGrades).some(([id, score]) => !id.trim() || typeof score !== 'number' || !Number.isFinite(score) || score < 0 || score > 20)) throw new Error('Notes du simulateur du Bac invalides dans la sauvegarde.');
  if (value.version !== 1 && value.version !== 2 && value.version !== 3) throw new Error('Version de sauvegarde non prise en charge.');
  const subjectIds = new Set<string>();
  for (const s of subjects) {
    if (!isRecord(s) || typeof s.id !== 'string' || !s.id.trim() || typeof s.name !== 'string' || !s.name.trim() ||
      !['specialite','option','tronc','autre'].includes(s.category) || !['normal','bonus','excluded'].includes(s.calculationMode) || !Number.isFinite(s.bonusThreshold) || !Number.isFinite(s.bonusCoefficient) || s.bonusCoefficient <= 0 || typeof s.weight !== 'number' || !Number.isFinite(s.weight) || s.weight <= 0 || typeof s.includeInAverage !== 'boolean' || subjectIds.has(s.id)) throw new Error('Matière invalide dans la sauvegarde.');
    subjectIds.add(s.id);
  }
  const gradeIds = new Set<string>();
  for (const g of grades) {
    if (!isRecord(g) || typeof g.id !== 'string' || gradeIds.has(g.id) || !subjectIds.has(g.subjectId) ||
      typeof g.title !== 'string' || !g.title.trim() || !['normal','facultative','bonus'].includes(g.status) || !Number.isFinite(g.bonusThreshold) || !Number.isFinite(g.score) || !Number.isFinite(g.outOf) || g.outOf <= 0 || g.score < 0 || g.score > g.outOf || !Number.isFinite(g.coefficient) || g.coefficient <= 0 || typeof g.date !== 'string' || typeof g.comment !== 'string') throw new Error('Note invalide dans la sauvegarde.');
    gradeIds.add(g.id);
  }
  const grandOral = Array.isArray(value.grandOral) ? value.grandOral : [];
  const notebook = Array.isArray(value.notebook) ? value.notebook : [];
  const orientation = Array.isArray(value.orientation) ? value.orientation : [];
  const notes = Array.isArray(value.notes) ? value.notes : [];
  const flashcards = Array.isArray(value.flashcards) ? value.flashcards : [];
  const errors = Array.isArray(value.errors) ? value.errors : [];
  const sessions = Array.isArray(value.sessions) ? value.sessions : [];
  const tasks = Array.isArray(value.tasks) ? value.tasks : [];
  const checkLinked = (items: any[], label: string) => {
    const ids = new Set<string>();
    for (const x of items) {
      if (!isRecord(x) || typeof x.id !== 'string' || ids.has(x.id) || !subjectIds.has(x.subjectId)) throw new Error(`${label} invalide dans la sauvegarde.`);
      ids.add(x.id);
    }
  };
  checkLinked(notes,'Fiche'); checkLinked(flashcards,'Flashcard'); checkLinked(errors,'Erreur'); checkLinked(grandOral,'Question Grand oral'); checkLinked(notebook,'Carnet de formules');
  for (const oral of grandOral) {
    if (typeof oral.title !== 'string' || !oral.title.trim() || typeof oral.question !== 'string' || typeof oral.introduction !== 'string' || typeof oral.plan !== 'string' || typeof oral.conclusion !== 'string' || typeof oral.sources !== 'string' || typeof oral.rehearsalNotes !== 'string' || !['draft','ready'].includes(oral.status) || typeof oral.updatedAt !== 'string') throw new Error('Préparation du Grand oral invalide dans la sauvegarde.');
  }
  for (const entry of notebook) {
    if (typeof entry.title !== 'string' || !entry.title.trim() || typeof entry.content !== 'string' || !entry.content.trim() || !['formule','definition','date','auteur','methode','autre'].includes(entry.category) || !Array.isArray(entry.tags) || entry.tags.some((tag: unknown) => typeof tag !== 'string') || typeof entry.createdAt !== 'string' || typeof entry.updatedAt !== 'string') throw new Error('Entrée du carnet de formules invalide dans la sauvegarde.');
  }
  const orientationIds = new Set<string>();
  for (const item of orientation) {
    if (!isRecord(item) || typeof item.id !== 'string' || !item.id.trim() || orientationIds.has(item.id) || typeof item.formation !== 'string' || !item.formation.trim() || typeof item.establishment !== 'string' || typeof item.city !== 'string' || typeof item.url !== 'string' || !['a_etudier','favori','dossier','acceptee','refusee'].includes(item.status) || typeof item.deadline !== 'string' || (item.deadline && !/^\d{4}-\d{2}-\d{2}$/.test(item.deadline)) || typeof item.notes !== 'string' || typeof item.createdAt !== 'string' || typeof item.updatedAt !== 'string') throw new Error('Entrée du carnet d’orientation invalide dans la sauvegarde.');
    orientationIds.add(item.id);
  }
  for (const note of notes) {
    if (typeof note.title !== 'string' || !note.title.trim() || typeof note.chapter !== 'string' || typeof note.content !== 'string' || !Array.isArray(note.tags) || note.tags.some((tag: unknown) => typeof tag !== 'string') || typeof note.favorite !== 'boolean' || typeof note.createdAt !== 'string' || typeof note.updatedAt !== 'string') throw new Error('Fiche invalide dans la sauvegarde.');
  }
  for (const card of flashcards) {
    if (typeof card.front !== 'string' || !card.front.trim() || typeof card.back !== 'string' || !card.back.trim() || typeof card.chapter !== 'string' || !Array.isArray(card.tags) || card.tags.some((tag: unknown) => typeof tag !== 'string') || typeof card.createdAt !== 'string' || typeof card.dueAt !== 'string' || !Number.isFinite(card.interval) || card.interval < 0 || !Number.isFinite(card.ease) || card.ease < 1.3 || !Number.isInteger(card.repetitions) || card.repetitions < 0 || !Number.isInteger(card.lapses) || card.lapses < 0 || !(card.lastReviewedAt === null || typeof card.lastReviewedAt === 'string')) throw new Error('Flashcard invalide dans la sauvegarde.');
  }
  for (const error of errors) {
    if (typeof error.title !== 'string' || !error.title.trim() || typeof error.chapter !== 'string' || typeof error.mistake !== 'string' || typeof error.explanation !== 'string' || typeof error.method !== 'string' || !['todo','working','mastered'].includes(error.status) || typeof error.createdAt !== 'string' || typeof error.updatedAt !== 'string') throw new Error('Entrée du carnet d’erreurs invalide dans la sauvegarde.');
  }
  const sessionIds = new Set<string>();
  for (const session of sessions) {
    if (!isRecord(session) || typeof session.id !== 'string' || !session.id.trim() || sessionIds.has(session.id) || typeof session.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(session.date) || typeof session.startedAt !== 'string' || Number.isNaN(Date.parse(session.startedAt)) || !Number.isInteger(session.durationMinutes) || session.durationMinutes < 0 || !Number.isInteger(session.cardsReviewed) || session.cardsReviewed < 0 || !Number.isInteger(session.correct) || session.correct < 0 || !['flashcards','quiz','focus'].includes(session.mode) || (session.mode === 'focus' ? session.cardsReviewed !== 0 || session.correct !== 0 : session.cardsReviewed < 1 || session.correct > session.cardsReviewed) || (session.subjectId !== undefined && (typeof session.subjectId !== 'string' || !subjectIds.has(session.subjectId))) || (session.intention !== undefined && (typeof session.intention !== 'string' || session.intention.length > 240)) || (session.reflection !== undefined && (typeof session.reflection !== 'string' || session.reflection.length > 1000)) || (session.energyBefore !== undefined && (!Number.isInteger(session.energyBefore) || session.energyBefore < 1 || session.energyBefore > 5)) || (session.energyAfter !== undefined && (!Number.isInteger(session.energyAfter) || session.energyAfter < 1 || session.energyAfter > 5))) throw new Error('Session de révision invalide dans la sauvegarde.');
    sessionIds.add(session.id);
  }
  const taskIds = new Set<string>();
  for (const task of tasks) {
    if (!isRecord(task) || typeof task.id !== 'string' || taskIds.has(task.id) || !subjectIds.has(task.subjectId) || typeof task.title !== 'string' || !task.title.trim() || typeof task.chapter !== 'string' || typeof task.dueDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(task.dueDate) || !Number.isInteger(task.durationMinutes) || task.durationMinutes < 5 || task.durationMinutes > 600 || typeof task.completed !== 'boolean' || typeof task.createdAt !== 'string') throw new Error('Séance de planning invalide dans la sauvegarde.');
    taskIds.add(task.id);
  }
  return { version: 3, subjects, grades, bacGrades, grandOral, notebook, orientation, notes, flashcards, errors, sessions, tasks };
}
export function loadData(): StudyData {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? migrateData(JSON.parse(raw)) : EMPTY_DATA; }
  catch (e) { console.error('StudyFlow local data:',e); return EMPTY_DATA; }
}
/**
 * Pronote-style average: each assessment contributes its earned points and
 * its maximum points, both multiplied by the assessment coefficient.
 * The resulting ratio is converted to a mark out of 20.
 *
 * Example: 9/10 coef. 1 and 12/20 coef. 2 =>
 * ((9*1) + (12*2)) / ((10*1) + (20*2)) * 20.
 */
export function getSubjectAverage(id: string, grades: StudyData['grades']): number | null {
  const list = grades.filter(g => g.subjectId === id && g.status === 'normal');
  const earned = list.reduce((sum, g) => sum + g.score * g.coefficient, 0);
  const possible = list.reduce((sum, g) => sum + g.outOf * g.coefficient, 0);
  return possible > 0 ? (earned / possible) * 20 : null;
}

/** Calcule la note nécessaire à la prochaine évaluation pour atteindre une moyenne cible dans une matière normale. */
export function projectRequiredGrade(subjectId: string, grades: StudyData['grades'], targetAverage: number, outOf = 20, coefficient = 1): { requiredScore: number; possible: boolean; currentAverage: number | null } {
  if (!Number.isFinite(targetAverage) || targetAverage < 0 || targetAverage > 20 || !Number.isFinite(outOf) || outOf <= 0 || !Number.isFinite(coefficient) || coefficient <= 0) {
    throw new Error('Paramètres de simulation invalides.');
  }
  const list = grades.filter(g => g.subjectId === subjectId && g.status === 'normal');
  const earned = list.reduce((sum, grade) => sum + grade.score * grade.coefficient, 0);
  const possible = list.reduce((sum, grade) => sum + grade.outOf * grade.coefficient, 0);
  const requiredScore = (targetAverage / 20 * (possible + outOf * coefficient) - earned) / coefficient;
  return { requiredScore, possible: requiredScore <= outOf, currentAverage: possible > 0 ? earned / possible * 20 : null };
}

export function getGeneralAverage(data: StudyData): number | null {
  const normalSubjects = data.subjects.filter(s => s.active !== false && s.includeInAverage && s.calculationMode === 'normal');
  const weighted = normalSubjects
    .map(s => ({ average: getSubjectAverage(s.id, data.grades), weight: s.weight }))
    .filter(x => x.average !== null);
  const denominator = weighted.reduce((sum, x) => sum + x.weight, 0);
  if (!denominator) return null;
  const basePoints = weighted.reduce((sum, x) => sum + (x.average as number) * x.weight, 0);
  const subjectBonuses = data.subjects
    .filter(s => s.active !== false && s.includeInAverage && s.calculationMode === 'bonus')
    .reduce((sum, s) => {
      const average = getSubjectAverage(s.id, data.grades);
      return sum + (average === null ? 0 : Math.max(0, average - s.bonusThreshold) * s.bonusCoefficient);
    }, 0);
  const gradeBonuses = data.grades
    .filter(g => g.status === 'bonus' && data.subjects.some(s => s.id === g.subjectId && s.active !== false && s.includeInAverage && s.calculationMode !== 'excluded'))
    .reduce((sum, g) => {
      const mark20 = (g.score / g.outOf) * 20;
      return sum + Math.max(0, mark20 - g.bonusThreshold) * g.coefficient;
    }, 0);
  return (basePoints + subjectBonuses + gradeBonuses) / denominator;
}
