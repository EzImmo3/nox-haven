import assert from 'node:assert/strict';
import { buildSmartReminders } from '../src/reminderAnalytics.mjs';
const base = {subjects:[{id:'maths',active:true},{id:'pc',active:false}],tasks:[],flashcards:[],errors:[],orientation:[]};
const empty = buildSmartReminders(base,'2026-11-09');
assert.equal(empty.length,0);
const populated = {...base,
 tasks:[
  {id:'1',title:'DM maths',subjectId:'maths',dueDate:'2026-11-08',completed:false},
  {id:'2',title:'Exercice PC',subjectId:'pc',dueDate:'2026-11-09',completed:false},
  {id:'3',title:'Cours',subjectId:'maths',dueDate:'2026-11-09',completed:true},
  {id:'4',title:'Réviser',subjectId:'maths',dueDate:'2026-11-09',completed:false}
 ],
 flashcards:[{subjectId:'maths',dueAt:'2026-11-08T00:00:00Z'},{subjectId:'pc',dueAt:'2026-11-08T00:00:00Z'}],
 errors:[{subjectId:'maths',status:'todo'},{subjectId:'pc',status:'todo'}],
 orientation:[
  {formation:'Licence A',deadline:'2026-11-10',status:'dossier'},
  {formation:'Licence B',deadline:'2026-11-20',status:'favori'}
 ]
};
const result = buildSmartReminders(populated,'2026-11-09');
assert.deepEqual(result.map(x=>x.id),['overdue-tasks','today-tasks','orientation-deadline','due-cards','open-errors']);
assert.match(result[0].title,/1 tâche/);
assert.match(result[2].title,/dans 1 jour/);
assert.match(result[1].title,/1 tâche/);
assert.match(result[3].title,/1 carte/);
assert.match(result[4].title,/1 erreur/);
assert.equal(result.length,5);
assert.equal(buildSmartReminders(null,'2026-11-09').length,0);
console.log('SMART REMINDERS — 10/10 assertions réussies.');
