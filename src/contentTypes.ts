/** Contrat éditorial des ressources pédagogiques StudyFlow V4.
 * Les ressources peuvent être publiées progressivement, mais leur état doit rester explicite.
 */
export type ContentSource = {
  title: string;
  institution: string;
  url: string;
  consultedAt: string;
  supports: string[];
};

export type CourseSection = {
  heading: string;
  body: string[];
  example?: { prompt: string; solution: string };
};

export type QuizQuestion = {
  level: 'Facile' | 'Intermédiaire' | 'Difficile';
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
  skill?: string;
};

export type FlashcardContent = {
  front: string;
  back: string;
  tags?: string[];
};

export type ExerciseContent = {
  title: string;
  level: 'Facile' | 'Intermédiaire' | 'Difficile';
  statement: string;
  correction: string;
  skills: string[];
  hints?: string[];
  points?: number;
};

export type RevisionSheet = {
  title: string;
  /** Résumé plat ou regroupé par grandes parties du cours. */
  summary: (string | string[])[];
  mustKnow: string[];
  methods: string[];
};

export type MockExam = {
  title: string;
  format: string;
  durationMinutes: number;
  instructions: string[];
  sections: { title: string; prompt: string; expectedSkills: string[]; points: number }[];
  markingRubric: { criterion: string; points: number; expectations: string[] }[];
  correction: string[];
  isOfficialSubject: false;
};

export type ChapterResourceV4 = {
  title: string;
  objectives: string[];
  course: CourseSection[];
  keyPoints: string[];
  method: string[];
  flashcards: FlashcardContent[];
  quiz: QuizQuestion[];
  exercises: ExerciseContent[];
  revisionSheets?: RevisionSheet[];
  mockExams?: MockExam[];
  sources?: ContentSource[];
  sourceNote: string;
  validationStatus?: 'draft' | 'reviewed' | 'validated';
};
