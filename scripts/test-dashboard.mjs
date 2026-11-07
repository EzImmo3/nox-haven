import assert from 'node:assert/strict';
import { buildMonthlyAverageTrend, buildSubjectLearningProgress, getSubjectPerformance, getTargetProgress } from '../src/dashboard.mjs';
import fs from 'node:fs';
const grade = (id, date, score, outOf = 20, coefficient = 1, status = 'normal') => ({ id, subjectId: 'maths-spe', title: id, score, outOf, coefficient, date, comment: '', status, bonusThreshold: 10 });
const trend = buildMonthlyAverageTrend([grade('a', '2026-10-02', 12), grade('b', '2026-10-20', 16), grade('c', '2026-10-21', 20, 20, 1, 'facultative')], new Date(2026, 10, 2, 12), 3);
assert.equal(trend.length, 3); assert.equal(trend[1].count, 2); assert.equal(trend[1].average, 14); assert.equal(trend[0].average, null);
const data = { version: 3, subjects: [{ id: 'maths-spe', name: 'Maths', category: 'specialite', weight: 1, includeInAverage: true, calculationMode: 'normal' }], grades: [grade('a', '2026-10-02', 14)], notes: [], flashcards: [], errors: [], sessions: [], tasks: [] };
assert.equal(getSubjectPerformance(data)[0].average, 14); assert.equal(getTargetProgress(14, 16).gap, 2); assert.equal(getTargetProgress(14, 12).reached, true); assert.equal(getTargetProgress(14, null).percent, null);
const app=fs.readFileSync('src/App.tsx','utf8');
assert(app.includes('Ma priorité du jour')&&app.includes('dailyPlan.slice(0,3)'), 'Le cockpit doit afficher les priorités du jour.');
assert(app.includes('Objectif hebdomadaire : {weeklySummary.sessions}/{weeklyGoal}'), 'Le cockpit doit relier les séances à l’objectif hebdomadaire.');
assert(app.includes('Priorité ajoutée à ton planning.'), 'Une priorité doit pouvoir être ajoutée au planning réel.');
console.log('COCKPIT PERSONNALISÉ — 11 assertions réussies');

assert(app.includes('État de tes révisions')&&app.includes('revisionHealth.overdueCards'), 'Le planning doit exposer les indicateurs de santé des révisions.');

const progress = buildSubjectLearningProgress([
  { id: 'maths-spe', title: 'Mathématiques', chapters: [{ id: 'm1' }, { id: 'm2' }, { id: 'm3' }] },
  { id: 'ses-spe', title: 'SES', chapters: [{ id: 's1' }, { id: 's2' }] },
], { m1: 'mastered', m2: 'started', s1: 'mastered' },
[{ id: 'c1', subjectId: 'maths-spe', dueAt: '2020-01-01' }, { id: 'c2', subjectId: 'ses-spe', dueAt: '2999-01-01' }],
[{ id: 'e1', subjectId: 'maths-spe', status: 'todo' }, { id: 'e2', subjectId: 'maths-spe', status: 'mastered' }],
{ m1: {}, m2: {}, s1: {} });
assert.equal(progress.length, 2);
assert.equal(progress[0].id, 'maths-spe', 'La matière avec la progression la plus faible doit apparaître en premier.');
assert.equal(progress[0].percentage, 33);
assert.equal(progress[0].pending, 1);
assert.equal(progress[1].dueCards, 0, 'Une carte future ne doit pas être comptée comme due.');
assert.equal(progress[0].dueCards, 1);
assert.equal(progress[0].openErrors, 1, 'Les erreurs maîtrisées ne doivent pas être comptées comme ouvertes.');
assert.equal(progress[0].availableResources, 2);
assert(app.includes('Progression par matière') && app.includes('subjectLearningProgress.map'), 'Le cockpit doit afficher le suivi détaillé par matière.');
console.log('PROGRESSION PAR MATIÈRE — 8 assertions supplémentaires réussies');
