
export type Subject = {
  id: string; name: string; category: 'specialite' | 'option' | 'tronc' | 'autre';
  weight: number; includeInAverage: boolean; active?: boolean;
  calculationMode: 'normal' | 'bonus' | 'excluded'; bonusThreshold: number; bonusCoefficient: number;
};
export type Grade = {
  id: string; subjectId: string; title: string; score: number; outOf: number;
  coefficient: number; date: string; comment: string; status: 'normal' | 'facultative' | 'bonus'; bonusThreshold: number;
};
export type RevisionNote = {
  id: string; subjectId: string; title: string; chapter: string; content: string;
  tags: string[]; favorite: boolean; createdAt: string; updatedAt: string;
};
export type Flashcard = {
  id: string; subjectId: string; chapter: string; front: string; back: string;
  tags: string[]; createdAt: string; dueAt: string; interval: number;
  ease: number; repetitions: number; lapses: number; lastReviewedAt: string | null;
};
export type ErrorEntry = {
  id: string; subjectId: string; chapter: string; title: string; mistake: string;
  explanation: string; method: string; status: 'todo' | 'working' | 'mastered';
  createdAt: string; updatedAt: string;
};
export type RevisionTask = { id: string; title: string; subjectId: string; chapter: string; dueDate: string; durationMinutes: number; completed: boolean; createdAt: string; };
export type StudySession = {
  id: string; date: string; startedAt: string; durationMinutes: number;
  cardsReviewed: number; correct: number; mode: 'flashcards' | 'quiz' | 'focus';
  chapterBreakdown?: Array<{ subjectId: string; chapterId: string; chapterTitle: string; verified: number; correct: number }>;
  subjectId?: string; intention?: string; energyBefore?: number; energyAfter?: number; reflection?: string;
};
export type OralQuestion = {
  id: string; title: string; subjectId: string; question: string;
  introduction: string; plan: string; conclusion: string; sources: string;
  rehearsalNotes: string; status: 'draft' | 'ready'; updatedAt: string;
};
export type NotebookEntry = {
  id: string; subjectId: string; category: 'formule'|'definition'|'date'|'auteur'|'methode'|'autre';
  title: string; content: string; tags: string[]; createdAt: string; updatedAt: string;
};
export type OrientationEntry = {
  id: string; formation: string; establishment: string; city: string; url: string;
  status: 'a_etudier'|'favori'|'dossier'|'acceptee'|'refusee'; deadline: string; notes: string;
  createdAt: string; updatedAt: string;
};
export type StudyData = {
  version: 3; subjects: Subject[]; grades: Grade[]; bacGrades: Record<string, number>;
  grandOral: OralQuestion[]; notebook: NotebookEntry[]; orientation: OrientationEntry[];
  notes: RevisionNote[]; flashcards: Flashcard[]; errors: ErrorEntry[];
  sessions: StudySession[]; tasks: RevisionTask[];
};
