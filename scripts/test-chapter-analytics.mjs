import assert from 'node:assert/strict';
import { buildChapterQuizStats } from '../src/chapterAnalytics.mjs';

const sessions = [
  { id:'old', mode:'quiz', cardsReviewed:20, correct:14 },
  { id:'one', chapterBreakdown:[
    {subjectId:'maths',chapterId:'suites',chapterTitle:'Suites',verified:4,correct:3},
    {subjectId:'ses',chapterId:'marche',chapterTitle:'Marché',verified:2,correct:2},
  ]},
  { id:'two', chapterBreakdown:[
    {subjectId:'maths',chapterId:'suites',chapterTitle:'Suites',verified:6,correct:4},
    {subjectId:'maths',chapterId:'bad',chapterTitle:'Incorrect',verified:2,correct:3},
  ]},
];
const result = buildChapterQuizStats(sessions);
assert.equal(result.length, 2);
assert.equal(result[0].chapterId, 'suites');
assert.equal(result[0].verified, 10);
assert.equal(result[0].correct, 7);
assert.equal(result[0].sessions, 2);
assert.equal(result[0].accuracy, 70);
assert.equal(result[1].accuracy, 100);
assert.equal(buildChapterQuizStats(sessions, 1).length, 1);
assert.equal(buildChapterQuizStats(sessions, 0).length, 0);
assert.equal(buildChapterQuizStats(null).length, 0);
assert.equal(buildChapterQuizStats([{chapterBreakdown:[null,{}, {subjectId:'x',chapterId:'y',chapterTitle:'Z',verified:1,correct:1.5}]}]).length, 0);
console.log('ANALYTIQUES PAR CHAPITRE — 11 assertions réussies.');
