import type { ChapterResourceV4, ContentSource } from './contentTypes';

/** Métadonnées éditoriales d'un chapitre de la bibliothèque StudyFlow. */
export type ChapterLearningPackage = ChapterResourceV4 & {
  id: string;
  subjectId: string;
  curriculumYear: '2026-2027';
  status: 'draft' | 'review' | 'validated' | 'published';
  estimatedMinutes: number;
  lastReviewedAt?: string;
};

/** Fiche de révision complémentaire liée à un chapitre. */
export type RevisionSheet = {
  id: string;
  title: string;
  objective: string;
  sections: { heading: string; bullets: string[] }[];
  mustKnow: string[];
  commonMistakes: string[];
  sources: ContentSource[];
};

/** Sujet blanc original : ne doit jamais être présenté comme un sujet officiel. */
export type MockExam = {
  id: string;
  subjectId: string;
  title: string;
  format: 'epreuve-ecrite' | 'epreuve-orale' | 'pratique' | 'evaluation-adaptee';
  durationMinutes?: number;
  instructions: string[];
  materials: { title: string; content: string; source?: ContentSource }[];
  questions: { id: string; prompt: string; points: number; expectedSkills: string[] }[];
  correction: { questionId: string; expectedAnswer: string; reasoning: string; markingCriteria: string[] }[];
  totalPoints: number;
  rubric: { criterion: string; points: number; descriptors: string[] }[];
  sources: ContentSource[];
  original: true;
};

export type ContentIssue = { path: string; message: string; severity: 'error' | 'warning' };

/** Contrôle qualité quantitatif et structurel avant publication d'un chapitre. */
export function validateChapterResource(resource: ChapterResourceV4): ContentIssue[] {
  const issues: ContentIssue[] = [];
  if (!resource.title.trim()) issues.push({ path: 'title', message: 'Titre manquant.', severity: 'error' });
  if (resource.objectives.length < 2) issues.push({ path: 'objectives', message: 'Prévoir au moins deux objectifs observables.', severity: 'warning' });
  if (resource.course.length < 3) issues.push({ path: 'course', message: 'Cours trop court : au moins trois sections sont attendues.', severity: 'warning' });
  if (resource.flashcards.length < 30) issues.push({ path: 'flashcards', message: `Seulement ${resource.flashcards.length}/30 cartes.`, severity: 'warning' });
  if (resource.quiz.length < 20) issues.push({ path: 'quiz', message: `Seulement ${resource.quiz.length}/20 questions.`, severity: 'warning' });
  if (resource.exercises.length < 10) issues.push({ path: 'exercises', message: `Seulement ${resource.exercises.length}/10 exercices.`, severity: 'warning' });
  if (!resource.sources?.length) issues.push({ path: 'sources', message: 'Aucune source institutionnelle renseignée.', severity: 'warning' });
  resource.quiz.forEach((question, index) => {
    if (question.choices.length < 2) issues.push({ path: `quiz[${index}].choices`, message: 'Une question doit proposer au moins deux choix.', severity: 'error' });
    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.choices.length) issues.push({ path: `quiz[${index}].answer`, message: 'Index de réponse correcte invalide.', severity: 'error' });
    if (!question.explanation.trim()) issues.push({ path: `quiz[${index}].explanation`, message: 'Correction expliquée manquante.', severity: 'error' });
  });
  resource.exercises.forEach((exercise, index) => {
    if (!exercise.correction.trim()) issues.push({ path: `exercises[${index}].correction`, message: 'Correction détaillée manquante.', severity: 'error' });
    if (!exercise.skills.length) issues.push({ path: `exercises[${index}].skills`, message: 'Compétences évaluées non renseignées.', severity: 'warning' });
  });
  return issues;
}
