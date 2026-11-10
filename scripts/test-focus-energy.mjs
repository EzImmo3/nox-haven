import assert from 'node:assert/strict';
import { summarizeFocusSessions, getFocusEnergyLabel, getRecommendedFocusDuration } from '../src/focusAnalytics.mjs';

const sessions = [
  { mode: 'focus', date: '2026-11-09', durationMinutes: 25, energyBefore: 2, energyAfter: 4 },
  { mode: 'focus', date: '2026-11-07', durationMinutes: 15, energyBefore: 3, energyAfter: 3 },
  { mode: 'quiz', date: '2026-11-09', durationMinutes: 10 },
  { mode: 'focus', date: '2026-11-01', durationMinutes: 40, energyBefore: 1, energyAfter: 2 },
];
const result = summarizeFocusSessions(sessions, '2026-11-09');
assert.equal(result.totalSessions, 3);
assert.equal(result.weekSessions.length, 2);
assert.equal(result.weekMinutes, 40);
assert.equal(result.energyPairs, 2);
assert.equal(result.energyDelta, 1);
assert.equal(result.startDate, '2026-11-03');
assert.equal(getFocusEnergyLabel(1), 'Très basse');
assert.equal(getFocusEnergyLabel(5), 'Très bonne');
assert.equal(getFocusEnergyLabel(0), 'Non renseignée');
assert.equal(getRecommendedFocusDuration(1), 10);
assert.equal(getRecommendedFocusDuration(3), 20);
assert.equal(getRecommendedFocusDuration(5), 25);
assert.equal(getRecommendedFocusDuration(9), 15);
assert.throws(() => summarizeFocusSessions([], 'bad-date'));
assert.throws(() => summarizeFocusSessions([], '2026-02-31'));
console.log('Focus energy: 15 assertions passed.');
