import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const required = ['react', 'react-dom', 'lucide-react', 'vite', '@vitejs/plugin-react', 'typescript'];
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
const checks = required.map(name => {
  const manifest = path.join('node_modules', name, 'package.json');
  const installed = fs.existsSync(manifest);
  let installedVersion = null;
  if (installed) {
    try { installedVersion = JSON.parse(fs.readFileSync(manifest, 'utf8')).version; } catch {}
  }
  return { name, declared: deps[name] ?? null, installed, installedVersion };
});
const missing = checks.filter(x => !x.installed);
const lockfiles = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'].filter(fs.existsSync);
const npmVersion = spawnSync('npm', ['--version'], { encoding: 'utf8' }).stdout?.trim() ?? 'indisponible';
const report = {
  version: pkg.version,
  node: process.version,
  npm: npmVersion,
  packageManager: pkg.packageManager ?? 'non spécifié',
  lockfiles,
  dependencies: checks,
  summary: { required: checks.length, installed: checks.length - missing.length, missing: missing.length },
  status: missing.length ? 'blocked' : 'ready',
  guidance: missing.length
    ? 'Les dépendances déclarées ne sont pas toutes présentes. Installer les dépendances depuis le dossier racine du projet, puis relancer npm run build. Ne pas interpréter les erreurs JSX/TS2307 comme des défauts de composants tant que React et ses types sont absents.'
    : 'Les dépendances principales sont présentes. Lancer npm run build pour vérifier les types et le bundle.'
};
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/PROJECT_DOCTOR.json', JSON.stringify(report, null, 2) + '\n');
console.log(`DIAGNOSTIC PROJET ${pkg.version} — ${report.summary.installed}/${report.summary.required} dépendances principales présentes.`);
for (const item of checks) console.log(`${item.installed ? 'OK' : 'ABSENTE'} ${item.name}: déclaré ${item.declared ?? 'non'}, installé ${item.installedVersion ?? 'non'}`);
console.log(`Fichier(s) de verrouillage : ${lockfiles.length ? lockfiles.join(', ') : 'aucun'}`);
console.log(report.guidance);
if (missing.length) process.exitCode = 1;
