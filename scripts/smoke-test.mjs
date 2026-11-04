import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import Module from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function loadTs(relativePath) {
  const filename = path.join(root, relativePath);
  const source = readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
  const mod = new Module(filename);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  mod._compile(output, filename);
  return mod.exports;
}

const { CHAPTER_RESOURCES } = loadTs('src/chapterResources.ts');
const { validateChapterResource } = loadTs('src/contentModel.ts');
const { migrateData, getGeneralAverage, scheduleFlashcardReview, isValidDateKey, projectRequiredGrade } = loadTs('src/data.ts');
const { buildDailyStudyPlan, buildWeeklyStudyPlan, getChapterSignal, rankChapterRecommendations, getWeeklyLearningSummary, normalizeDailyCapacity, getWeeklyPlanSummary, getRevisionUrgency } = loadTs('src/learningEngine.ts');
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const appSource = readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const pwaManifest = JSON.parse(readFileSync(path.join(root, 'public/manifest.webmanifest'), 'utf8'));
const serviceWorker = readFileSync(path.join(root, 'public/sw.js'), 'utf8');
const mainSource = readFileSync(path.join(root, 'src/main.tsx'), 'utf8');
const storageSource = readFileSync(path.join(root, 'src/storage.ts'), 'utf8');
assert(storageSource.includes('indexedDB.open(DB_NAME, DB_VERSION)'), 'Le stockage principal doit utiliser IndexedDB versionné.');
assert(storageSource.includes('safeLocalStorageGet(STORAGE_KEY)'), 'La migration doit récupérer les anciennes données localStorage sans bloquer en cas de stockage indisponible.');
assert(storageSource.includes('await writeRecord(db, DATA_KEY, DATA_META_KEY, data'), 'Les données restaurées doivent être écrites atomiquement dans IndexedDB avec leurs métadonnées.');
assert(!storageSource.includes('localStorage.removeItem(STORAGE_KEY)'), 'La migration ne doit pas supprimer la sauvegarde historique.');
assert(storageSource.includes('subscribeToRemoteChanges') && storageSource.includes('new BroadcastChannel(CHANGE_CHANNEL)'), 'Les changements inter-onglets doivent être signalés.');
assert(appSource.includes('storageConflict') && appSource.includes('Recharge cette page avant de continuer'), 'Un onglet devenu obsolète doit arrêter ses écritures et demander un rechargement.');
assert(!appSource.includes("localStorage.setItem('studyflow_chapter_progress_v1'") && !appSource.includes("localStorage.setItem('studyflow_weekly_goal_v1'") && !appSource.includes("localStorage.setItem('studyflow_daily_capacity_v1'"), 'Les préférences migrées ne doivent plus être réécrites dans localStorage.');
assert(appSource.includes("storageMode==='error'") && appSource.includes('Aucune sauvegarde automatique ne sera effectuée'), 'Une erreur de lecture doit suspendre les écritures pour protéger les données.');
assert(storageSource.includes('db.onversionchange = () => db.close()') && storageSource.includes('const DB_VERSION = 2'), 'La base doit gérer les changements de version et fermer les connexions obsolètes.');
assert(appSource.includes('if(!dataReady)return'), 'L’interface doit attendre le chargement du stockage avant d’afficher le setup ou le tableau de bord.');
const viteConfig = readFileSync(path.join(root, 'vite.config.ts'), 'utf8');
assert(pwaManifest.start_url === './' && pwaManifest.scope === './' && pwaManifest.icons.every(icon => icon.src.startsWith('./')), 'Le manifeste PWA doit utiliser des chemins relatifs pour fonctionner sous un sous-répertoire.');
assert(viteConfig.includes("base: './'") && mainSource.includes('import.meta.env.BASE_URL') && mainSource.includes('`${baseUrl}sw.js`') && mainSource.includes('scope: baseUrl'), 'Les assets et le service worker doivent respecter le chemin de déploiement relatif.');
assert(serviceWorker.includes('self.registration.scope') && serviceWorker.includes("request.mode === 'navigate'") && serviceWorker.includes('Response.error()'), 'Le service worker doit respecter son scope, prévoir le fallback de navigation et ne pas renvoyer du HTML pour les assets manquants.');
assert(!serviceWorker.includes("caches.match('/index.html')"), 'Le service worker ne doit pas utiliser un fallback absolu incompatible avec GitHub Pages.');
assert(appSource.includes("'Hors ligne'") && appSource.includes("'En ligne'") && appSource.includes('aria-live="polite"'), 'L’interface doit annoncer clairement l’état de connexion de manière accessible.');
assert(appSource.includes('if(!isValidDateKey(dueDate))') && appSource.includes("aria-current={tab===id?'page':undefined}"), 'La création de séance doit rejeter les dates calendaires impossibles et la navigation doit annoncer la page active.');
assert(appSource.includes('quizRemaining') && appSource.includes('quizMode') && appSource.includes('setQuizRemaining(quizMode===\'examen\'?quizDuration*60:null)'), 'Le quiz doit proposer un mode chronométré avec durée configurable.');
assert(appSource.includes('Objectif hebdomadaire') && appSource.includes('studyflow_weekly_goal_v1') && appSource.includes('Série actuelle'), 'Les statistiques doivent suivre un objectif hebdomadaire persistant et la régularité.');
assert(appSource.includes('Simulateur de moyenne générale') && appSource.includes('projection-only') && appSource.includes('payload={data,targetAverage,chapterProgress,weeklyGoal,dailyCapacity,dark,profileReady}'), 'Le simulateur global doit rester fictif et les préférences doivent être exportées.');
const appSyntax = ts.transpileModule(appSource, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.ReactJSX }, reportDiagnostics: true });
const syntaxErrors = (appSyntax.diagnostics ?? []).filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error);
assert(syntaxErrors.length === 0, `Erreur de syntaxe TSX : ${syntaxErrors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join(' | ')}`);

let checked = 0;
for (const [id, resource] of Object.entries(CHAPTER_RESOURCES)) {
  assert(resource.validationStatus === 'draft', `${id}: le statut éditorial doit rester draft.`);
  assert(resource.flashcards.length >= 30, `${id}: moins de 30 flashcards.`);
  assert(resource.quiz.length >= 20, `${id}: moins de 20 questions.`);
  assert(resource.exercises.length >= 10, `${id}: moins de 10 exercices.`);
  assert(new Set(resource.flashcards.map(card => card.front)).size === resource.flashcards.length, `${id}: flashcard dupliquée.`);
  for (const [index, question] of resource.quiz.entries()) {
    assert(question.choices.length >= 2, `${id}: question ${index + 1} sans choix suffisants.`);
    assert(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.choices.length, `${id}: index de réponse invalide.`);
    assert(question.explanation.trim().length > 0, `${id}: correction manquante.`);
  }
  for (const [index, exercise] of resource.exercises.entries()) assert(exercise.correction.trim() && exercise.skills.length, `${id}: exercice ${index + 1} incomplet.`);
  const issues = validateChapterResource(resource);
  assert(issues.every(issue => issue.path === 'sources' && issue.severity === 'warning'), `${id}: problème de validation bloquant : ${JSON.stringify(issues)}`);
  checked++;
}

const subject = { id: 'maths-spe', name: 'Mathématiques', category: 'specialite', weight: 1, includeInAverage: true, active: true, calculationMode: 'normal', bonusThreshold: 10, bonusCoefficient: 1 };
const validBackup = { version: 3, subjects: [subject], grades: [], notes: [], flashcards: [], errors: [], sessions: [], tasks: [] };
assert(migrateData(validBackup).version === 3, 'Une sauvegarde valide doit être migrée.');
const focusSession = { id:'focus-1', date:'2026-11-04', startedAt:'2026-11-04T10:00:00.000Z', durationMinutes:25, cardsReviewed:0, correct:0, mode:'focus' };
assert(migrateData({ ...validBackup, sessions:[focusSession] }).sessions[0].mode === 'focus', 'Une session Deep Work valide doit être conservée dans les sauvegardes.');
let invalidFocusRejected=false;try{migrateData({ ...validBackup, sessions:[{ ...focusSession, cardsReviewed:1 }] });}catch{invalidFocusRejected=true;}
assert(invalidFocusRejected, 'Une session Deep Work ne doit pas compter de cartes ni de réponses correctes.');
const focusSummary=getWeeklyLearningSummary([focusSession],'2026-11-04');
assert(focusSummary.sessions===1&&focusSummary.minutes===25&&focusSummary.cardsReviewed===0&&focusSummary.accuracy===null, 'Le Deep Work doit compter dans le temps et les séances, sans fausser le taux de réussite.');
assert(isValidDateKey('2026-11-01') && !isValidDateKey('2026-02-31') && !isValidDateKey('2026-2-01'), 'La validation des dates doit rejeter les dates impossibles et les formats non canoniques.');
let rejected = false;
try { migrateData({ ...validBackup, sessions: [{ id: 'bad', date: '2026-11-01', startedAt: 'not-a-date', durationMinutes: -1, cardsReviewed: 0, correct: 2, mode: 'quiz' }] }); } catch { rejected = true; }
assert(rejected, 'Une session corrompue doit être rejetée.');

const excludedBonusData = {
  version: 3,
  subjects: [{ ...subject, calculationMode: 'excluded', includeInAverage: false }],
  grades: [{ id: 'b1', subjectId: 'maths-spe', title: 'Bonus', score: 20, outOf: 20, coefficient: 1, date: '2026-11-01', comment: '', status: 'bonus', bonusThreshold: 10 }],
  notes: [], flashcards: [], errors: [], sessions: [], tasks: []
};
assert(getGeneralAverage(excludedBonusData) === null, 'Une matière exclue ne doit pas ajouter de points bonus.');
const projectionGrades = [{ id:'g1', subjectId:'maths-spe', title:'Contrôle', score:10, outOf:20, coefficient:1, date:'2026-11-01', comment:'', status:'normal', bonusThreshold:10 }];
const projection = projectRequiredGrade('maths-spe', projectionGrades, 12, 20, 1);
assert(Math.abs(projection.requiredScore - 14) < 1e-9 && projection.possible && projection.currentAverage === 10, 'La projection doit calculer la note requise avec les coefficients.');
const impossibleProjection = projectRequiredGrade('maths-spe', projectionGrades, 16, 20, 1);
assert(impossibleProjection.requiredScore === 22 && !impossibleProjection.possible, 'La projection doit signaler un objectif impossible en une seule note.');
const reachedProjection = projectRequiredGrade('maths-spe', projectionGrades, 5, 20, 1);
assert(reachedProjection.requiredScore <= 0, 'La projection doit reconnaître qu’une cible est déjà atteinte même avec zéro à la prochaine note.');
const baseCard = { id:'card-1', subjectId:'maths-spe', chapter:'Suites', front:'Question', back:'Réponse', tags:[], createdAt:'2026-11-01T10:00:00.000Z', dueAt:'2026-11-01T12:00:00', interval:0, ease:2.5, repetitions:0, lapses:0, lastReviewedAt:null };
const again = scheduleFlashcardReview(baseCard, 0, new Date('2026-11-01T10:00:00.000Z'));
const hard = scheduleFlashcardReview(baseCard, 1, new Date('2026-11-01T10:00:00.000Z'));
const good = scheduleFlashcardReview(baseCard, 2, new Date('2026-11-01T10:00:00.000Z'));
const easy = scheduleFlashcardReview(baseCard, 3, new Date('2026-11-01T10:00:00.000Z'));
assert(again.repetitions === 0 && again.lapses === 1 && again.interval === 1, 'La réponse À revoir doit réinitialiser la série et programmer un nouvel essai rapide.');
assert(hard.interval === 1 && good.interval === 1 && easy.interval === 4, 'Les quatre niveaux doivent produire des intervalles cohérents au premier rappel.');
assert(hard.ease < baseCard.ease && good.ease === baseCard.ease && easy.ease > baseCard.ease, 'Le facteur de facilité doit évoluer selon la qualité du rappel.');
assert(easy.lastReviewedAt === '2026-11-01T10:00:00.000Z', 'La date de rappel doit être enregistrée.');
const chapterCards = [
  { ...baseCard, id:'c1', chapter:'Suites', repetitions:4, lapses:0, dueAt:'2026-11-05T12:00:00' },
  { ...baseCard, id:'c2', chapter:'Suites', repetitions:3, lapses:0, dueAt:'2026-11-05T12:00:00' },
  { ...baseCard, id:'c3', chapter:'Suites', repetitions:1, lapses:1, dueAt:'2026-11-01T12:00:00' }
];
const chapterErrors = [{ id:'e1', subjectId:'maths-spe', chapter:'Suites', title:'Erreur de signe', mistake:'', explanation:'', method:'', status:'working', createdAt:'', updatedAt:'' }];
const signal = getChapterSignal('Suites', chapterCards, chapterErrors, '2026-11-01');
assert(signal.cards === 3 && signal.matureCards === 2 && signal.dueCards === 1 && signal.openErrors === 1, 'Le signal de maîtrise doit agréger cartes, échéances et erreurs.');
assert(signal.reasons.length >= 2, 'Le signal doit expliquer les raisons de sa recommandation.');
assert(getRevisionUrgency({kind:'errors',errorStatus:'todo',count:1,today:'2026-11-02'}) > getRevisionUrgency({kind:'errors',errorStatus:'working',count:1,today:'2026-11-02'}), 'Une erreur non commencée doit être plus urgente qu’une erreur déjà travaillée.');
assert(getRevisionUrgency({kind:'flashcards',count:2,dueDate:'2026-10-25',today:'2026-11-02'}) > getRevisionUrgency({kind:'flashcards',count:2,dueDate:'2026-11-02',today:'2026-11-02'}), 'Un rappel en retard doit gagner en priorité avec le nombre de jours écoulés.');

const sameTitleOtherSubject = { ...baseCard, id:'other-subject', subjectId:'pc', chapter:'Suites', repetitions:0, dueAt:'2026-11-01T12:00:00' };
const scopedSignal = getChapterSignal('Suites', [...chapterCards, sameTitleOtherSubject], chapterErrors, '2026-11-01', 'maths-spe');
assert(scopedSignal.cards === 3, 'Les cartes d’une autre matière ne doivent pas contaminer le signal du chapitre.');
const ranked = rankChapterRecommendations([{id:'a',title:'Suites',subjectId:'maths-spe',status:'pending'},{id:'b',title:'Probabilités',subjectId:'maths-spe',status:'started'}],chapterCards,chapterErrors,'2026-11-01');
assert(ranked.length === 2 && ranked[0].id === 'a', 'Le chapitre présentant une erreur et un rappel dû doit être priorisé.');
const week = getWeeklyLearningSummary([{date:'2026-11-01',durationMinutes:30,cardsReviewed:10,correct:8},{date:'2026-10-20',durationMinutes:50,cardsReviewed:10,correct:10}], '2026-11-01');
assert(week.sessions === 1 && week.minutes === 30 && week.accuracy === 80, 'Le bilan hebdomadaire doit exclure les sessions hors période.');
const planned = buildDailyStudyPlan({
  cards: chapterCards, errors: [{ ...chapterErrors[0], chapter:'Limites' }],
  recommendations: [{ id:'a', title:'Suites', subjectId:'maths-spe', status:'started' }, { id:'b', title:'Probabilités', subjectId:'maths-spe', status:'pending' }],
  tasks: [], today:'2026-11-01', limit:4
});
assert(planned.length === 3, 'Le plan du jour doit regrouper les besoins par chapitre et éviter les doublons.');
assert(planned[0].kind === 'flashcards' && planned[0].durationMinutes >= 10 && planned[0].durationMinutes <= 30, 'Les rappels dus doivent être proposés avec une durée réaliste.');
assert(planned.some(item => item.kind === 'errors') && planned.some(item => item.chapter === 'Probabilités'), 'Le plan doit aussi proposer les erreurs ouvertes et un chapitre à commencer.');
const plannedAgain = buildDailyStudyPlan({ cards:chapterCards, errors:chapterErrors, recommendations:[], tasks:[{subjectId:'maths-spe',chapter:'Suites',dueDate:'2026-11-01',completed:false}], today:'2026-11-01' });

assert(plannedAgain.length === 0, 'Une séance déjà planifiée ne doit pas être proposée une seconde fois.');
const weekly = buildWeeklyStudyPlan({
  cards: chapterCards, errors: [{ ...chapterErrors[0], chapter:'Limites' }],
  recommendations: [{ id:'a', title:'Suites', subjectId:'maths-spe', status:'started' }, { id:'b', title:'Probabilités', subjectId:'maths-spe', status:'pending' }],
  tasks: [{ subjectId:'maths-spe', chapter:'Déjà prévu', dueDate:'2026-11-01', durationMinutes:30, completed:false }],
  today:'2026-11-01', dailyCapacityMinutes:60
});
assert(weekly.length > 0 && weekly.every(item => /^2026-11-0[1-7]$/.test(item.date)), 'Le plan hebdomadaire doit rester dans les sept jours demandés.');
assert(normalizeDailyCapacity('90') === 90 && normalizeDailyCapacity('999') === 60 && normalizeDailyCapacity('abc') === 60, 'La préférence de temps doit être normalisée avec une valeur de repli sûre.');
const planSummary = getWeeklyPlanSummary(weekly, [{dueDate:'2026-11-01',durationMinutes:30,completed:false},{dueDate:'2026-10-31',durationMinutes:45,completed:false}], '2026-11-01', 60);
assert(planSummary.minutesAlreadyPlanned === 30 && planSummary.suggestedMinutes === weekly.reduce((sum,item)=>sum+item.durationMinutes,0), 'Le bilan hebdomadaire doit distinguer les séances existantes des suggestions et exclure les dates passées.');
assert(planSummary.totalMinutes === planSummary.minutesAlreadyPlanned + planSummary.suggestedMinutes && planSummary.remainingCapacityMinutes >= 0, 'Le bilan du planning doit calculer la charge et la capacité restante sans valeur négative.');
const weeklyLoads = new Map([['2026-11-01',30]]);
for (const item of weekly) weeklyLoads.set(item.date,(weeklyLoads.get(item.date)??0)+item.durationMinutes);
assert([...weeklyLoads.values()].every(minutes => minutes <= 60), 'Le plan hebdomadaire doit respecter la capacité quotidienne en incluant les séances existantes.');
assert(new Set(weekly.map(item=>`${item.date}:${item.subjectId}:${item.chapter}`)).size===weekly.length, 'Le plan hebdomadaire ne doit pas dupliquer une séance le même jour.');
console.log(`Smoke tests réussis : ${checked} ressources contrôlées, migration valide, session corrompue rejetée, bonus exclu ignoré, dates calendaires validées, 4 cas SM-2 vérifiés, moteur de maîtrise/recommandation, plans quotidien et hebdomadaire, préférences de durée persistables, bilan de charge hebdomadaire, bilan d’apprentissage, simulateur de note, stockage IndexedDB local-first et migration non destructive, configuration PWA en sous-répertoire, service worker, état de connexion accessible, dates de planning et navigation clavier, quiz chronométré, objectif hebdomadaire, série de révision, simulateur de moyenne générale et sauvegarde des préférences contrôlés, syntaxe TSX contrôlée.`);
