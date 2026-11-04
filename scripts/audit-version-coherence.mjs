import fs from 'node:fs';
import path from 'node:path';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version;
const checks = [
  ['package-version', 'package.json', (text) => JSON.parse(text).version === version],
  ['manifest-name', 'public/manifest.webmanifest', (text) => text.includes('NOX HAVEN')],
  ['manifest-version', 'public/manifest.webmanifest', (text) => JSON.parse(text).version === version],
  ['service-worker-cache', 'public/sw.js', (text) => text.includes(`noxhaven-shell-v${version}-`)],
  ['backup-export', 'src/App.tsx', (text) => text.includes(`appVersion:'${version}'`)],
  ['footer-version', 'src/App.tsx', (text) => text.includes(`${version}`)],
  ['html-title', 'index.html', (text) => text.includes(`<title>NOX HAVEN ${version}`)],
  ['readme-heading', 'README.md', (text) => text.startsWith(`# NOX HAVEN ${version}`)],
  ['readme-changelog', 'README.md', (text) => text.includes(`${version}`)],
];
const results = checks.map(([id, file, test]) => {
  const exists = fs.existsSync(file);
  const content = exists ? fs.readFileSync(file, 'utf8') : '';
  return { id, file, ok: exists && test(content) };
});
const failed = results.filter((x) => !x.ok);
fs.mkdirSync('docs', { recursive: true });
const report = { version, generatedAt: new Date().toISOString(), summary: { passed: results.length - failed.length, failed: failed.length, total: results.length }, results };
fs.writeFileSync(path.join('docs', `VERSION_COHERENCE_V${version}.json`), JSON.stringify(report, null, 2) + '\n');
console.log(`COHÉRENCE DE VERSION ${version} — ${report.summary.passed}/${report.summary.total}`);
for (const item of results) console.log(`${item.ok ? 'OK' : 'À CORRIGER'} ${item.id} (${item.file})`);
if (failed.length) process.exitCode = 1;
