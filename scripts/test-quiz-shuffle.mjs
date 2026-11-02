import assert from 'node:assert/strict';
import { getStableOptionOrder } from '../src/quizOptions.mjs';

for (let length = 0; length <= 8; length++) {
  const order = getStableOptionOrder(length, 'studyflow-test');
  assert.equal(order.length, length, `longueur ${length}`);
  assert.deepEqual([...order].sort((a, b) => a - b), Array.from({ length }, (_, i) => i), `permutation complète ${length}`);
}
const seedA = getStableOptionOrder(4, 'maths-fonctions');
assert.deepEqual(seedA, getStableOptionOrder(4, 'maths-fonctions'), 'ordre stable pour une même question');
const distinct = new Set(Array.from({ length: 80 }, (_, i) => getStableOptionOrder(4, `question-${i}`).join('')));
assert.ok(distinct.size >= 12, `diversité suffisante des positions (${distinct.size}/24)`);
assert.deepEqual(getStableOptionOrder(4, 'same'), getStableOptionOrder(4, 'same'), 'seed reproductible');
assert.deepEqual(getStableOptionOrder(-1, 'invalid'), []);
assert.deepEqual(getStableOptionOrder(21, 'invalid'), []);
console.log(`Tests mélange QCM : 14 assertions réussies ; ${distinct.size}/24 permutations observées sur 80 questions.`);
