export type BacYear = 'premiere' | 'terminale';
export type BacModelItem = {
  id: string;
  label: string;
  group: 'continuous' | 'terminal' | 'option';
  coefficient: number;
  year: BacYear | null;
  subject: string | null;
  optional: boolean;
};
export type BacModel = {
  session: 2027;
  pathway: 'general';
  items: BacModelItem[];
  mandatoryCoefficient: 100;
  totalCoefficient: number;
};
export function createGeneralBac2027Model(options?: {
  specialty1?: string;
  specialty2?: string;
  droppedSpecialty?: string;
  options?: Array<{ id: string; label: string; years: BacYear[] }>;
}): BacModel;
export function validateBacGrades(model: BacModel, values: Record<string, number | null | ''>): boolean;
export function calculateBac2027(model: BacModel, values?: Record<string, number>): {
  complete: boolean; average: number | null; projectedAverage: number | null; mention: string | null;
  points: number; totalPoints: number; enteredCoefficient: number; totalCoefficient: number;
  missingIds: string[]; pointsNeeded: Record<string, number>; enteredCount: number; itemCount: number;
};
