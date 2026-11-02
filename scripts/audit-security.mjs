import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
const root = new URL('../', import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const scanDirs = ['src'];
const files = [];
function walk(dir) { for (const name of readdirSync(dir)) { if (name === 'node_modules' || name.startsWith('.')) continue; const path = join(dir, name); const st = statSync(path); if (st.isDirectory()) walk(path); else if (/\.(tsx?|jsx?)$/.test(name)) files.push(path); } }
for (const dir of scanDirs) walk(join(root, dir));
const findings = [];
const rules = [
  ['HTML_INJECTION', /\.innerHTML\s*=|insertAdjacentHTML\s*\(/g, 'Injection HTML potentielle : vérifier la provenance et l’échappement des données.'],
  ['DYNAMIC_CODE', /\beval\s*\(|new\s+Function\s*\(/g, 'Exécution dynamique de code détectée.'],
  ['EMBEDDED_SECRET', /(api[_-]?key|secret|password)\s*[:=]\s*['"][^'"\n]{12,}['"]/gi, 'Chaîne ressemblant à un secret : vérifier qu’aucun identifiant privé n’est embarqué.'],
];
for (const file of files) { const content = readFileSync(file, 'utf8'); for (const [code, regex, message] of rules) { regex.lastIndex = 0; let match; while ((match = regex.exec(content))) findings.push({ code, file: relative(root, file), line: content.slice(0, match.index).split('\n').length, message }); } }
const sw = readFileSync(join(root, 'public/sw.js'), 'utf8');
const manifest = JSON.parse(readFileSync(join(root, 'public/manifest.webmanifest'), 'utf8'));
const checks = [
  { name: 'cache du service worker versionné', ok: sw.includes(`noxhaven-shell-v${pkg.version}-`) },
  { name: 'navigation hors ligne avec repli cache', ok: /request\.mode === 'navigate'[\s\S]*caches\.match\(INDEX_URL\)/.test(sw) },
  { name: 'manifest servi en mode standalone', ok: manifest.display === 'standalone' },
  { name: 'scope PWA relatif', ok: manifest.scope === './' && manifest.start_url === './' },
  { name: 'export de sauvegarde avec SHA-256', ok: readFileSync(join(root, 'src/App.tsx'), 'utf8').includes("algorithm:'SHA-256'") },
  { name: 'import vérifie l’empreinte avant restauration', ok: /actual!==checksum\.value/.test(readFileSync(join(root, 'src/App.tsx'), 'utf8')) },
];
const report = { version: pkg.version, generatedAt: new Date().toISOString(), filesScanned: files.length, checks, findings, limitations: ['Audit statique uniquement : ne prouve pas l’absence de vulnérabilité.', 'Aucun test d’intrusion, dépendance ou serveur distant n’est couvert.', 'Les données locales ne sont pas synchronisées ni sauvegardées dans le cloud.'] };
writeFileSync(join(root, 'docs/AUDIT_SECURITE_V5.0.39.json'), JSON.stringify(report, null, 2));
writeFileSync(join(root, 'docs/AUDIT_SECURITE_V5.0.39.md'), `# Audit de sécurité statique — NOX HAVEN ${pkg.version}\n\nFichiers analysés : **${files.length}**\n\n${checks.map(x => `- ${x.ok ? 'OK' : 'À vérifier'} — ${x.name}`).join('\n')}\n\nConstats à examiner : **${findings.length}**\n${findings.length ? findings.map(x => `- ${x.code} — ${x.file}:${x.line} — ${x.message}`).join('\n') : '- Aucun motif ciblé détecté.'}\n\n## Limites\n${report.limitations.map(x => `- ${x}`).join('\n')}\n`);
console.log(`AUDIT SÉCURITÉ ${pkg.version} — ${files.length} fichiers analysés`);
for (const c of checks) console.log(`${c.ok ? 'OK' : 'À VÉRIFIER'} — ${c.name}`);
console.log(`Constats à examiner : ${findings.length}`);
