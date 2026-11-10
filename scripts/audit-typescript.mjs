import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const tscPath = path.join(root, 'node_modules', 'typescript', 'bin', 'tsc');
const result = spawnSync(process.execPath, [tscPath, '-b', '--pretty', 'false'], { cwd: root, encoding: 'utf8', maxBuffer: 40 * 1024 * 1024 });
const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
const lines = output.split(/\r?\n/).filter(Boolean);
const diagnostics = lines.filter(line => /error TS\d+:/.test(line));
const counts = new Map();
const reactTypesAvailable = ['react/package.json', '@types/react/package.json', 'react-dom/package.json'].every(file => fs.existsSync(path.join(root, 'node_modules', file)));
const groups = { environment: [], contentTyping: [], applicationTyping: [], other: [] };
for (const line of diagnostics) {
  const match = line.match(/error (TS\d+):/);
  const code = match?.[1] ?? 'unknown';
  counts.set(code, (counts.get(code) ?? 0) + 1);
  const reactContextDiagnostic = !reactTypesAvailable && (
    (code === 'TS18046' && /App\.tsx/.test(line)) ||
    (code === 'TS2339' && /ErrorBoundary\.tsx/.test(line))
  );
  if (['TS2307', 'TS2875', 'TS7026'].includes(code) || reactContextDiagnostic || (!reactTypesAvailable && ['TS7006', 'TS7031', 'TS7005'].includes(code))) groups.environment.push(line);
  else if (code === 'TS2322' && /chapterResources\.ts/.test(line)) groups.contentTyping.push(line);
  else if (['TS7006', 'TS7031', 'TS7005'].includes(code)) groups.applicationTyping.push(line);
  else groups.other.push(line);
}
const report = {
  generatedAt: new Date().toISOString(),
  command: 'node node_modules/typescript/bin/tsc -b --pretty false',
  reactTypesAvailable,
  exitCode: result.status ?? 1,
  totalDiagnostics: diagnostics.length,
  byCode: Object.fromEntries([...counts.entries()].sort((a, b) => b[1] - a[1])),
  groups: Object.fromEntries(Object.entries(groups).map(([key, value]) => [key, { count: value.length, diagnostics: value }])),
  diagnostics,
  truncated: false,
  interpretation: {
    environment: 'Dépendances et déclarations JSX manquantes : réinstaller les dépendances avant de traiter ces messages comme des défauts applicatifs.',
    contentTyping: 'Incompatibilités de types localisées dans les données pédagogiques : à corriger sans conversion automatique destructive.',
    applicationTyping: 'Paramètres ou variables à typer explicitement après rétablissement des types React.'
  }
};
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(path.join(root, 'docs', 'AUDIT_TYPESCRIPT.json'), JSON.stringify(report, null, 2) + '\n');
const md = [
  '# Audit TypeScript', '', `- Date : ${report.generatedAt}`, `- Code de sortie : ${report.exitCode}`, `- Diagnostics : ${report.totalDiagnostics}`, '',
  '## Répartition par code', '', ...Object.entries(report.byCode).map(([code, count]) => `- ${code} : ${count}`), '',
  '## Priorisation', '', ...Object.entries(groups).map(([key, values]) => `### ${key} (${values.length})\n\n${values.length ? values.map(value => `- \`${value.replaceAll('`', "'")}\``).join('\n') : 'Aucun diagnostic.'}`), '',
  'Cet audit distingue les blocages de dépendances des défauts de typage du contenu. Il ne remplace pas une compilation Vite réussie.'
].join('\n');
fs.writeFileSync(path.join(root, 'docs', 'AUDIT_TYPESCRIPT.md'), md + '\n');
console.log(`Audit TypeScript : ${diagnostics.length} diagnostic(s), code de sortie ${report.exitCode}.`);
for (const [key, values] of Object.entries(groups)) console.log(`${key}: ${values.length}`);
process.exitCode = result.status === 0 ? 0 : 1;
