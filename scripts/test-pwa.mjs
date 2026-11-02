import assert from 'node:assert/strict';
import fs from 'node:fs';
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
const sw=fs.readFileSync('public/sw.js','utf8');
const main=fs.readFileSync('src/main.tsx','utf8');
const html=fs.readFileSync('index.html','utf8');
const manifest=JSON.parse(fs.readFileSync('public/manifest.webmanifest','utf8'));
const checks=[
 ['worker enregistré au chargement',/navigator\.serviceWorker\.register\(workerUrl/.test(main)],
 ['scope PWA relatif',/scope:\s*baseUrl/.test(main)],
 ['worker versionné',sw.includes(`noxhaven-shell-v${pkg.version}-`)],
 ['installation met en cache l’entrée',/cache\.addAll\(\[APP_SCOPE, INDEX_URL/.test(sw)],
 ['activation nettoie les anciennes versions',/keys\.filter\(key => ALL_APP_CACHES\.test\(key\) && key !== CACHE_NAME\)/.test(sw)],
 ['prise de contrôle après activation',/self\.clients\.claim\(\)/.test(sw)],
 ['navigation hors ligne',/request\.mode === 'navigate'[\s\S]*caches\.match\(INDEX_URL\)/.test(sw)],
 ['requêtes non-GET ignorées',/request\.method !== 'GET'/.test(sw)],
 ['requêtes externes ignorées',/url\.origin !== self\.location\.origin/.test(sw)],
 ['manifeste standalone',manifest.display==='standalone'],
 ['icônes PWA déclarées',manifest.icons.some(x=>x.sizes==='192x192')&&manifest.icons.some(x=>x.sizes==='512x512')],
 ['manifeste relié au HTML',/rel="manifest" href="\.\/manifest\.webmanifest"/.test(html)],
];
for(const [name,ok] of checks) console.log(`${ok?'OK':'À CORRIGER'} — ${name}`);
assert.ok(checks.every(x=>x[1]),`${checks.filter(x=>!x[1]).map(x=>x[0]).join(', ')}`);
console.log(`Tests PWA : ${checks.length}/${checks.length} assertions réussies.`);
