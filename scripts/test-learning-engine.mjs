import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const output = mkdtempSync(join(tmpdir(), 'nox-learning-'));
try {
  const tscPath = resolve('node_modules/typescript/bin/tsc');
const compile = spawnSync(process.execPath, [tscPath, '--target','ES2022','--module','ES2022','--moduleResolution','bundler','--skipLibCheck','--outDir',output,'src/learningEngine.ts'], { encoding:'utf8' });
  assert.equal(compile.status, 0, `Compilation du moteur impossible : ${compile.stdout}\n${compile.stderr}`);
  const engine = await import(pathToFileURL(join(output, 'learningEngine.js')).href);
  const card = (id, dueAt, repetitions = 0) => ({ id, subjectId:'maths-spe', chapter:'Suites', front:'Q', back:'R', tags:[], createdAt:'2026-11-01T10:00:00Z', dueAt, interval:1, ease:2.5, repetitions, lapses:0, lastReviewedAt:null });
  const error = (id, status) => ({ id, subjectId:'maths-spe', chapter:'Suites', title:'Erreur', mistake:'M', explanation:'E', method:'M', status, createdAt:'2026-11-01T10:00:00Z', updatedAt:'2026-11-05T10:00:00Z' });
  const health = engine.getRevisionHealth([card('a','2026-11-06',3),card('b','2026-11-07'),card('c','2026-11-10'),card('d','date-invalide')],[error('e','todo'),error('f','mastered')],'2026-11-07');
  assert.equal(health.totalCards,4);
  assert.equal(health.dueCards,2);
  assert.equal(health.overdueCards,1);
  assert.equal(health.upcomingCards,1);
  assert.equal(health.invalidDates,1);
  assert.equal(health.matureCards,1);
  assert.equal(health.openErrors,1);
  assert.equal(health.todoErrors,1);
  assert.equal(health.hasEvidence,true);
  assert.equal(Number.isFinite(engine.getRevisionUrgency({kind:'flashcards',dueDate:'date-invalide',today:'2026-11-07',count:2})),true);
  assert.equal(Number.isFinite(engine.getRevisionUrgency({kind:'errors',updatedAt:'bad-date',today:'bad-today',errorStatus:'todo',count:1})),true);
  const summary = engine.getWeeklyLearningSummary([{date:'2026-11-06',durationMinutes:20,cardsReviewed:4,correct:3},{date:'not-a-date',durationMinutes:999,cardsReviewed:999,correct:999}],'2026-11-07');
  assert.equal(summary.sessions,1);
  assert.equal(summary.minutes,20);
  assert.equal(summary.accuracy,75);
  const noData = engine.getRevisionHealth([],[],'2026-11-07');
  assert.equal(noData.hasEvidence,false);
  assert.equal(noData.dueCards,0);
  console.log('MOTEUR DE RÉVISION — 16 assertions réussies.');
} finally {
  rmSync(output,{recursive:true,force:true});
}
