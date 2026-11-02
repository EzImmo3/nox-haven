import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('../', import.meta.url).pathname;
const read = p => readFileSync(join(root, p), 'utf8');
const pkg = JSON.parse(read('package.json'));
const manifest = JSON.parse(read('public/manifest.webmanifest'));
const sw = read('public/sw.js');
const html = read('index.html');
const icons = (manifest.icons || []).map(icon => ({ ...icon, exists: existsSync(join(root, 'public', icon.src.replace(/^\.\//, ''))) }));
const checks = [
  { name: 'manifeste JSON lisible', ok: !!manifest.name && !!manifest.short_name },
  { name: 'nom court adapté au lanceur mobile', ok: manifest.short_name === 'NOX HAVEN' },
  { name: 'mode standalone', ok: manifest.display === 'standalone' },
  { name: 'scope et démarrage relatifs', ok: manifest.scope === './' && manifest.start_url === './' },
  { name: 'langue française déclarée', ok: manifest.lang === 'fr-FR' && /<html lang="fr"/.test(html) },
  { name: 'icône 192 présente', ok: icons.some(x => x.sizes === '192x192' && x.exists) },
  { name: 'icône 512 présente', ok: icons.some(x => x.sizes === '512x512' && x.exists) },
  { name: 'cache versionné', ok: sw.includes(`noxhaven-shell-v${pkg.version}-`) },
  { name: 'nettoyage des anciens caches applicatifs', ok: /ALL_APP_CACHES[\s\S]*studyflow\|noxhaven/.test(sw) && /ALL_APP_CACHES\.test\(key\)/.test(sw) },
  { name: 'repli hors ligne sur index mis en cache', ok: /request\.mode === 'navigate'[\s\S]*caches\.match\(INDEX_URL\)/.test(sw) },
  { name: 'limitation aux requêtes GET', ok: /request\.method !== 'GET'/.test(sw) },
  { name: 'exclusion des requêtes cross-origin', ok: /url\.origin !== self\.location\.origin/.test(sw) },
];
const report = { version: pkg.version, generatedAt: new Date().toISOString(), checks, icons: icons.map(x => ({ src:x.src, sizes:x.sizes, exists:x.exists, bytes:x.exists ? statSync(join(root,'public',x.src.replace(/^\.\//,''))).size : 0 })), limitations: ['Audit statique : aucun test réel sur Android, iOS ou navigateur de bureau.', 'La disponibilité hors ligne dépend des pages et ressources effectivement mises en cache après une première visite.', 'La synchronisation cloud multi-appareils et la publication publique ne sont pas fournies par cet audit.'] };
writeFileSync(join(root, 'docs/AUDIT_PWA_V${pkg.version}.json'), JSON.stringify(report, null, 2));
writeFileSync(join(root, 'docs/AUDIT_PWA_V${pkg.version}.md'), `# Audit PWA — NOX HAVEN ${pkg.version}

${checks.map(c => `- ${c.ok ? 'OK' : 'À corriger'} — ${c.name}`).join('\n')}

## Icônes
${report.icons.map(i => `- ${i.src} (${i.sizes}) : ${i.exists ? `${i.bytes} octets` : 'absente'}`).join('\n')}

## Limites
${report.limitations.map(x => `- ${x}`).join('\n')}
`);
console.log(`AUDIT PWA ${pkg.version}`);
for (const c of checks) console.log(`${c.ok ? 'OK' : 'À CORRIGER'} — ${c.name}`);
const failed = checks.filter(c => !c.ok);
console.log(`Résultat : ${checks.length-failed.length}/${checks.length}`);
if (failed.length) process.exitCode = 1;
