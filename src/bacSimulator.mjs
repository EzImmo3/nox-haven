/**
 * Calculateur du baccalauréat général — session 2027.
 * Barème scolaire standard (établissement public/privé sous contrat ou homologué).
 * Les notes sont saisies sur 20. Les options ajoutent des coefficients au total.
 */
export const BAC_SESSION = 2027;
export const BAC_MANDATORY_COEFFICIENTS = Object.freeze({ continuous: 40, terminal: 60, total: 100 });

const grade = (id, label, group, coefficient, details = {}) => ({
  id, label, group, coefficient, year: details.year ?? null,
  subject: details.subject ?? null,
  optional: Boolean(details.optional),
});

export function createGeneralBac2027Model({
  specialty1 = 'Mathématiques',
  specialty2 = 'Sciences économiques et sociales',
  droppedSpecialty = 'Physique-chimie',
  options = [{ id: 'maths-expertes', label: 'Mathématiques expertes', years: ['terminale'] }],
} = {}) {
  if (!specialty1?.trim() || !specialty2?.trim() || specialty1.trim() === specialty2.trim()) {
    throw new Error('Les deux spécialités de Terminale doivent être renseignées et différentes.');
  }
  if (!droppedSpecialty?.trim()) throw new Error('La spécialité non poursuivie en Terminale doit être renseignée.');

  const items = [
    // Contrôle continu obligatoire : 40 coefficients.
    grade('cc-hg-1', 'Histoire-géographie — Première', 'continuous', 3, { year: 'premiere' }),
    grade('cc-hg-t', 'Histoire-géographie — Terminale', 'continuous', 3, { year: 'terminale' }),
    grade('cc-lva-1', 'Langue vivante A — Première', 'continuous', 3, { year: 'premiere' }),
    grade('cc-lva-t', 'Langue vivante A — Terminale', 'continuous', 3, { year: 'terminale' }),
    grade('cc-lvb-1', 'Langue vivante B — Première', 'continuous', 3, { year: 'premiere' }),
    grade('cc-lvb-t', 'Langue vivante B — Terminale', 'continuous', 3, { year: 'terminale' }),
    grade('cc-es-1', 'Enseignement scientifique — Première', 'continuous', 3, { year: 'premiere' }),
    grade('cc-es-t', 'Enseignement scientifique — Terminale', 'continuous', 3, { year: 'terminale' }),
    grade('cc-eps-t', 'EPS — Terminale', 'continuous', 6, { year: 'terminale' }),
    grade('cc-emc-1', 'EMC — Première', 'continuous', 1, { year: 'premiere' }),
    grade('cc-emc-t', 'EMC — Terminale', 'continuous', 1, { year: 'terminale' }),
    grade('cc-dropped-specialty', `${droppedSpecialty.trim()} — spécialité abandonnée en Première`, 'continuous', 8, { year: 'premiere', subject: droppedSpecialty.trim() }),

    // Épreuves terminales : 60 coefficients.
    grade('exam-french-written', 'Français — écrit (épreuve anticipée)', 'terminal', 5),
    grade('exam-french-oral', 'Français — oral (épreuve anticipée)', 'terminal', 5),
    grade('exam-maths-anticipated', 'Mathématiques — épreuve anticipée', 'terminal', 2),
    grade('exam-specialty-1', `${specialty1.trim()} — épreuve terminale`, 'terminal', 16, { subject: specialty1.trim() }),
    grade('exam-specialty-2', `${specialty2.trim()} — épreuve terminale`, 'terminal', 16, { subject: specialty2.trim() }),
    grade('exam-philosophy', 'Philosophie', 'terminal', 8),
    grade('exam-grand-oral', 'Grand oral', 'terminal', 8),
  ];

  for (const option of options) {
    if (!option || typeof option.id !== 'string' || !option.id.trim() || typeof option.label !== 'string' || !option.label.trim() || !Array.isArray(option.years)) {
      throw new Error('Une option du baccalauréat est invalide.');
    }
    for (const year of option.years) {
      if (year !== 'premiere' && year !== 'terminale') throw new Error('Année d’option invalide.');
      items.push(grade(`option-${option.id}-${year}`, `${option.label} — ${year === 'premiere' ? 'Première' : 'Terminale'}`, 'option', 2, { year, optional: true, subject: option.label }));
    }
  }

  const mandatoryContinuous = items.filter(item => item.group === 'continuous').reduce((sum, item) => sum + item.coefficient, 0);
  const terminal = items.filter(item => item.group === 'terminal').reduce((sum, item) => sum + item.coefficient, 0);
  if (mandatoryContinuous !== 40 || terminal !== 60) throw new Error('Le référentiel de coefficients du Bac 2027 est incohérent.');
  return { session: BAC_SESSION, pathway: 'general', items, mandatoryCoefficient: 100, totalCoefficient: items.reduce((sum, item) => sum + item.coefficient, 0) };
}

export function validateBacGrades(model, values) {
  if (!model || !Array.isArray(model.items) || !values || typeof values !== 'object' || Array.isArray(values)) return false;
  return Object.entries(values).every(([id, value]) => model.items.some(item => item.id === id) && (value === null || value === '' || (typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 20)));
}

export function calculateBac2027(model, values = {}) {
  if (!validateBacGrades(model, values)) throw new Error('Une note est invalide. Les notes doivent être comprises entre 0 et 20.');
  const entered = model.items.filter(item => typeof values[item.id] === 'number');
  const missing = model.items.filter(item => typeof values[item.id] !== 'number');
  const points = entered.reduce((sum, item) => sum + values[item.id] * item.coefficient, 0);
  const enteredCoefficient = entered.reduce((sum, item) => sum + item.coefficient, 0);
  const average = missing.length === 0 ? points / model.totalCoefficient : null;
  const projectedAverage = enteredCoefficient > 0 ? points / enteredCoefficient : null;
  const totalPoints = model.totalCoefficient * 20;
  const mention = average === null ? null : average >= 16 ? 'Très bien' : average >= 14 ? 'Bien' : average >= 12 ? 'Assez bien' : average >= 10 ? 'Admis' : 'Non admis';
  const thresholds = { 'Assez bien': 12, 'Bien': 14, 'Très bien': 16 };
  const pointsNeeded = average === null ? Object.fromEntries(Object.entries(thresholds).map(([label, target]) => [label, Math.max(0, target * model.totalCoefficient - points)])) : {};
  return {
    complete: missing.length === 0,
    average,
    projectedAverage,
    mention,
    points,
    totalPoints,
    enteredCoefficient,
    totalCoefficient: model.totalCoefficient,
    missingIds: missing.map(item => item.id),
    pointsNeeded,
    enteredCount: entered.length,
    itemCount: model.items.length,
  };
}
