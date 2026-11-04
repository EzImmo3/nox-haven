import { readFileSync } from 'node:fs';

const curriculum = readFileSync(new URL('../src/curriculum.ts', import.meta.url), 'utf8');
const resources = readFileSync(new URL('../src/chapterResources.ts', import.meta.url), 'utf8');
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const contentModel = readFileSync(new URL('../src/contentModel.ts', import.meta.url), 'utf8');
const learningEngine = readFileSync(new URL('../src/learningEngine.ts', import.meta.url), 'utf8');
const sw = readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8');
const manifest = readFileSync(new URL('../public/manifest.webmanifest', import.meta.url), 'utf8');
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const chapterIds = [...curriculum.matchAll(/\bc\('([^']+)'/g)].map((match) => match[1]);
const resourceBlocks = [...resources.matchAll(/^  '([^']+)': \{(.*?)(?=^  '[^']+': \{|^\};)/gms)];
const resourceIds = resourceBlocks.map((match) => match[1]);
const duplicates = chapterIds.filter((id, index) => chapterIds.indexOf(id) !== index);
const duplicateResources = resourceIds.filter((id, index) => resourceIds.indexOf(id) !== index);
const unknownResources = resourceIds.filter((id) => !chapterIds.includes(id));
const missingResources = chapterIds.filter((id) => !resourceIds.includes(id));

function arraySection(block, field) {
  const start = block.search(new RegExp(`${field}\\s*:\\s*\\[`));
  if (start < 0) return '';
  const open = block.indexOf('[', start);
  let depth = 0, quote = null, escaped = false;
  for (let i = open; i < block.length; i++) {
    const ch = block[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === '[') depth++;
    else if (ch === ']' && --depth === 0) return block.slice(open + 1, i);
  }
  return '';
}
function arrayItems(block, field, marker) {
  const section = arraySection(block, field);
  return [...section.matchAll(new RegExp(`\\{\\s*${marker}\\s*:`, 'g'))].length;
}
function fieldValues(block, field, marker, fieldName) {
  const section = arraySection(block, field);
  return [...section.matchAll(new RegExp(`\\{\\s*${marker}\\s*:[\\s\\S]*?${fieldName}\\s*:\\s*['\\"]([^'\\"]*)`, 'g'))].map(m => m[1]);
}
const rows = resourceBlocks.map(([, id, block]) => {
  const flashcards = arrayItems(block, 'flashcards', 'front');
  const quiz = arrayItems(block, 'quiz', 'level');
  const exercises = arrayItems(block, 'exercises', 'title');
  const fronts = fieldValues(block, 'flashcards', 'front', 'front');
  const questions = fieldValues(block, 'quiz', 'level', 'question');
  const titles = fieldValues(block, 'exercises', 'title', 'title');
  const quizSection = arraySection(block, 'quiz');
  const answerIndexes = [...quizSection.matchAll(/answer\s*:\s*(\d+)/g)].map(m => Number(m[1]));
  const choices = [...quizSection.matchAll(/choices\s*:\s*\[([^\]]*)\]/g)].map(m => [...m[1].matchAll(/['\"]([^'\"]*)['\"]/g)].map(x => x[1]));
  const issues = [];
  if (flashcards < 30) issues.push(`flashcards ${flashcards}/30 minimum`);
  if (quiz < 20) issues.push(`quiz ${quiz}/20 minimum`);
  if (exercises < 10) issues.push(`exercices ${exercises}/10 minimum`);
  if (new Set(fronts).size !== fronts.length) issues.push('flashcards dupliquées');
  if (new Set(questions).size !== questions.length) issues.push('questions dupliquées');
  if (new Set(titles).size !== titles.length) issues.push('titres d’exercices dupliqués');
  if (answerIndexes.some((answer, i) => !choices[i] || answer < 0 || answer >= choices[i].length || choices[i].length < 2)) issues.push('index de réponse ou choix invalide');
  if (!/sourceNote\s*:\s*['"`]/.test(block)) issues.push('note éditoriale absente');
  return { id, flashcards, quiz, exercises, issues };
});

const errors = [];
const version = pkg.version;
if (!/^\d+\.\d+\.\d+$/.test(version)) errors.push(`Version package invalide : ${version}`);
if (!app.includes(`NOX HAVEN · Version ${version}`)) errors.push('Version visible de l’interface non synchronisée.');
if (!app.includes(`appVersion:'${version}'`)) errors.push('Version de sauvegarde non synchronisée.');
if (!sw.includes(`noxhaven-shell-v${version}`)) errors.push('Cache service worker non versionné V5.');
if (!manifest.includes('\"short_name\": \"NOX HAVEN\"')) errors.push('Nom court du manifeste PWA non synchronisé.');
if (!manifest.includes('\"start_url\": \"./\"') || !manifest.includes('\"scope\": \"./\"')) errors.push('Manifeste PWA incompatible avec un déploiement en sous-répertoire.');
if (!sw.includes('self.registration.scope') || !sw.includes("request.mode === 'navigate'")) errors.push('Stratégie de cache PWA incomplète.');
const main = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8');
if (!main.includes('import.meta.env.BASE_URL') || !main.includes('`${baseUrl}sw.js`') || !main.includes('scope: baseUrl')) errors.push('Enregistrement du Service Worker incompatible avec le chemin de base Vite.');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
if (!html.includes(`NOX HAVEN ${version}`)) errors.push('Titre HTML non synchronisé.');
if (!app.includes('Quelle moyenne générale vises-tu ?') || !app.includes('studyflow_target_average_v1')) errors.push('Le parcours de définition de l’objectif de moyenne est absent ou incomplet.');
if (!app.includes('Maîtrise du programme') || !app.includes('recommendedChapter') || !app.includes('aria-valuenow={chapterCompletion}')) errors.push('Le pilotage de la maîtrise du programme est absent ou incomplet.');
if (!app.includes('rankChapterRecommendations') || !app.includes('weeklySummary') || !app.includes('buildDailyStudyPlan') || !app.includes('buildWeeklyStudyPlan') || !learningEngine.includes('getChapterSignal') || !learningEngine.includes('getWeeklyLearningSummary') || !learningEngine.includes('buildDailyStudyPlan') || !learningEngine.includes('buildWeeklyStudyPlan')) errors.push('Le moteur de recommandations, les plans quotidien/hebdomadaire ou le bilan hebdomadaire est absent.');
if (!app.includes('Temps maximal par jour') || !app.includes('Ajouter') || !app.includes('weeklyPlan')) errors.push('Le planning hebdomadaire personnalisable est absent de l’interface.');
if (!app.includes('Ressource spécifique en préparation')) errors.push('La bibliothèque ne distingue plus les chapitres sans ressource dédiée.');
if (!contentModel.includes('validateChapterResource') || !contentModel.includes('ChapterResourceV4')) errors.push('Le modèle de validation pédagogique est incomplet.');
if (duplicates.length) errors.push(`Identifiants de chapitres dupliqués : ${[...new Set(duplicates)].join(', ')}`);
if (duplicateResources.length) errors.push(`Ressources dupliquées : ${[...new Set(duplicateResources)].join(', ')}`);
if (unknownResources.length) errors.push(`Ressources orphelines : ${unknownResources.join(', ')}`);
for (const row of rows) for (const issue of row.issues) errors.push(`${row.id} : ${issue}`);

console.log(`AUDIT NOX HAVEN ${pkg.version}`);
console.log(`Chapitres catalogue : ${chapterIds.length} (${new Set(chapterIds).size} identifiants uniques)`);
console.log(`Ressources dédiées : ${resourceIds.length} · chapitres sans ressource : ${missingResources.length}`);
console.log(`Ressources orphelines : ${unknownResources.length} · ressources dupliquées : ${duplicateResources.length}`);
console.log('');
for (const row of rows) console.log(`${row.id}: ${row.flashcards} flashcards · ${row.quiz} quiz · ${row.exercises} exercices${row.issues.length ? ` — ${row.issues.join(', ')}` : ' — base pédagogique présente'}`);
console.log('');
console.log(`Version UI / export / PWA : ${errors.some(e => /Version|cache service|sauvegarde/.test(e)) ? 'À corriger' : 'cohérente'}`);
console.log(`Objectif de moyenne : ${errors.some(e => e.includes('objectif')) ? 'ERREUR' : 'présent'}`);
console.log(`Contrôles structurels : ${errors.length ? `${errors.length} problème(s)` : 'aucune erreur détectée'}`);
if (errors.length) { for (const error of errors) console.error(`ERREUR — ${error}`); process.exitCode = 1; }
