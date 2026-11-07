import fs from 'node:fs';
import assert from 'node:assert/strict';

const app=fs.readFileSync('src/App.tsx','utf8');
const loader=fs.readFileSync('src/chapterResourceLoader.ts','utf8');
const sw=fs.readFileSync('public/sw.js','utf8');
const vite=fs.readFileSync('vite.config.ts','utf8');
const curriculum=fs.readFileSync('src/curriculum.ts','utf8');

assert(!/import\s*\{[^}]*CHAPTER_RESOURCES[^}]*\}\s*from\s*['"]\.\/chapterResources['"]/.test(app),'Les ressources ne doivent pas être importées statiquement.');
assert(app.includes("import('./chapterResourceLoader')"),'L’application doit appeler le chargeur pédagogique à la demande.');
assert(app.includes('activeResourceSubjectKey'),'Le chargement doit suivre les matières actives du profil.');
assert(loader.includes('Promise.all(ids.map((id) => resourceLoaders[id]()))'),'Les matières doivent être chargées indépendamment.');
assert(loader.includes("import('./resources/philo')") && loader.includes("import('./resources/maths-spe')"),'Les modules doivent être chargés dynamiquement par matière.');
const subjectIds=[...curriculum.matchAll(/\{\s*id:\s*'([^']+)'/g)].map(m=>m[1]);
for(const id of subjectIds) assert(fs.existsSync(`src/resources/${id}.ts`),`Module de ressources manquant pour ${id}.`);
assert(app.includes('setResourcesRetry(v=>v+1)'),'Une erreur de chargement doit permettre de réessayer.');
assert(sw.includes('cache.put(request, response.clone())'),'Le service worker doit mettre en cache les chunks chargés à la demande.');
assert(vite.includes('manualChunks'),'Le découpage des bibliothèques vendor doit rester configuré.');
console.log(`CODE SPLITTING PÉDAGOGIQUE PAR MATIÈRE — ${subjectIds.length+7}/${subjectIds.length+7} assertions réussies.`);
