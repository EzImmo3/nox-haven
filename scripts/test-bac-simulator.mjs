import assert from 'node:assert/strict';
import { createGeneralBac2027Model, calculateBac2027 } from '../src/bacSimulator.mjs';

const model = createGeneralBac2027Model({
  specialty1: 'Mathématiques',
  specialty2: 'Sciences économiques et sociales',
  droppedSpecialty: 'Physique-chimie',
  options: [{ id: 'maths-exp', label: 'Mathématiques expertes', years: ['terminale'] }],
});
assert.equal(model.session, 2027);
assert.equal(model.items.filter(x => x.group === 'continuous').reduce((s, x) => s + x.coefficient, 0), 40);
assert.equal(model.items.filter(x => x.group === 'terminal').reduce((s, x) => s + x.coefficient, 0), 60);
assert.equal(model.totalCoefficient, 102, 'Maths expertes suivies uniquement en Terminale ajoutent 2 coefficients.');
assert.equal(model.items.find(x => x.id === 'exam-grand-oral').coefficient, 8);
assert.equal(model.items.find(x => x.id === 'exam-maths-anticipated').coefficient, 2);
assert.equal(model.items.find(x => x.id === 'cc-dropped-specialty').coefficient, 8);

const all20 = Object.fromEntries(model.items.map(item => [item.id, 20]));
const perfect = calculateBac2027(model, all20);
assert.equal(perfect.complete, true);
assert.equal(perfect.average, 20);
assert.equal(perfect.mention, 'Très bien');
assert.equal(perfect.enteredCoefficient, 102);

const all10 = Object.fromEntries(model.items.map(item => [item.id, 10]));
const average10 = calculateBac2027(model, all10);
assert.equal(average10.average, 10);
assert.equal(average10.mention, 'Admis');

const partial = calculateBac2027(model, { 'exam-grand-oral': 16, 'exam-philosophy': 14 });
assert.equal(partial.complete, false);
assert.equal(partial.average, null, 'Ne pas présenter une moyenne partielle comme la note finale.');
assert.equal(partial.enteredCoefficient, 16);
assert.equal(partial.pointsNeeded['Très bien'], 16 * 102 - (16 * 8 + 14 * 8));

assert.throws(() => calculateBac2027(model, { 'exam-grand-oral': 21 }), /invalide/);
assert.throws(() => createGeneralBac2027Model({ specialty1: 'Maths', specialty2: 'Maths' }), /différentes/);
assert.throws(() => createGeneralBac2027Model({ options: [{ id: 'bad', label: 'Option', years: ['terminale', 'seconde'] }] }), /Année d’option invalide/);

console.log('Bac simulator: 15 assertions passed.');
