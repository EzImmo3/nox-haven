import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const required = ['react', 'react-dom', 'lucide-react', 'vite', '@vitejs/plugin-react', 'typescript'];
const declared = { ...pkg.dependencies, ...pkg.devDependencies };
const checks = [];
for (const name of required) {
  checks.push({ id: `dependency:${name}`, ok: Boolean(declared[name]), detail: declared[name] ?? 'dépendance non déclarée' });
}
const lockPath = path.join(root, 'package-lock.json');
let lock = null;
if (fs.existsSync(lockPath)) {
  try { lock = JSON.parse(fs.readFileSync(lockPath, 'utf8')); } catch { /* reported below */ }
}
checks.push({ id: 'lockfile:present', ok: Boolean(lock), detail: lock ? `package-lock v${lock.lockfileVersion ?? '?'}` : 'package-lock.json absent ou illisible' });
if (lock) {
  checks.push({ id: 'lockfile:root-version', ok: lock.packages?.['']?.version === pkg.version, detail: `package ${lock.packages?.['']?.version ?? 'inconnue'} / projet ${pkg.version}` });
  const lockDeps = { ...lock.packages?.['']?.dependencies, ...lock.packages?.['']?.devDependencies };
  for (const name of required) checks.push({ id: `lockfile:${name}`, ok: Boolean(lockDeps[name]) && lockDeps[name] === declared[name], detail: `déclaré ${declared[name] ?? '—'} / verrouillé ${lockDeps[name] ?? '—'}` });
}
const scripts = ['build', 'dev', 'preview', 'doctor', 'audit:release'];
for (const name of scripts) checks.push({ id: `script:${name}`, ok: typeof pkg.scripts?.[name] === 'string', detail: pkg.scripts?.[name] ?? 'script absent' });
const node = process.versions.node.split('.').map(Number);
checks.push({ id: 'runtime:node', ok: node[0] >= 20, detail: `Node ${process.versions.node} (minimum projet 20)` });
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npm = spawnSync(npmCommand, ['--version'], { encoding: 'utf8', shell: process.platform === 'win32' });
checks.push({ id: 'runtime:npm', ok: npm.status === 0, detail: npm.stdout?.trim() || 'npm indisponible' });
const failed = checks.filter(x => !x.ok);
const report = {
  version: pkg.version,
  generatedAt: new Date().toISOString(),
  summary: { passed: checks.length - failed.length, failed: failed.length, total: checks.length },
  checks,
  nextSteps: lock
    ? ['Exécuter npm ci depuis la racine.', 'Exécuter npm run build puis npm run audit:release.']
    : ['Générer et contrôler package-lock.json depuis un environnement réseau stable.', 'Installer les dépendances avec npm ci.', 'Exécuter npm run build puis npm run audit:release.'],
  note: 'Cet audit contrôle le manifeste et les métadonnées locales ; il ne prouve ni la disponibilité du registre npm, ni la réussite du build.'
};
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(path.join(root, 'docs', `MANIFEST_AUDIT_V${pkg.version}.json`), JSON.stringify(report, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'docs', `MANIFEST_AUDIT_V${pkg.version}.md`), `# Audit du manifeste — NOX HAVEN ${pkg.version}\n\n**${report.summary.passed}/${report.summary.total}** contrôles réussis ; **${report.summary.failed}** à corriger.\n\n${checks.map(x => `- ${x.ok ? 'OK' : 'À CORRIGER'} — ${x.id} : ${x.detail}`).join('\n')}\n\n> ${report.note}\n\n## Étapes suivantes\n\n${report.nextSteps.map(x => `- ${x}`).join('\n')}\n`);
console.log(`AUDIT MANIFESTE ${pkg.version} — ${report.summary.passed}/${report.summary.total} ; ${report.summary.failed} à corriger.`);
for (const item of checks) console.log(`${item.ok ? 'OK' : 'À CORRIGER'} ${item.id}: ${item.detail}`);
if (failed.length) process.exitCode = 1;
