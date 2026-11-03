import assert from 'node:assert/strict';
import { buildMonthlyAverageTrend, getSubjectPerformance, getTargetProgress } from '../src/dashboard.mjs';
const grade = (id, date, score, outOf = 20, coefficient = 1, status = 'normal') => ({ id, subjectId: 'maths-spe', title: id, score, outOf, coefficient, date, comment: '', status, bonusThreshold: 10 });
const trend = buildMonthlyAverageTrend([grade('a', '2026-10-02', 12), grade('b', '2026-10-20', 16), grade('c', '2026-10-21', 20, 20, 1, 'facultative')], new Date(2026, 10, 2, 12), 3);
assert.equal(trend.length, 3); assert.equal(trend[1].count, 2); assert.equal(trend[1].average, 14); assert.equal(trend[0].average, null);
const data = { version: 3, subjects: [{ id: 'maths-spe', name: 'Maths', category: 'specialite', weight: 1, includeInAverage: true, calculationMode: 'normal' }], grades: [grade('a', '2026-10-02', 14)], notes: [], flashcards: [], errors: [], sessions: [], tasks: [] };
assert.equal(getSubjectPerformance(data)[0].average, 14); assert.equal(getTargetProgress(14, 16).gap, 2); assert.equal(getTargetProgress(14, 12).reached, true); assert.equal(getTargetProgress(14, null).percent, null);
console.log('COCKPIT PERSONNALISÉ — 8 assertions réussies');
