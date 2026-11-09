import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
const tasks = [
  ['Diagnostic environnement projet', 'doctor'],
  ['Cohérence du manifeste et des dépendances', 'audit:manifest'],
  ['Cohérence des versions', 'audit:version'],
  ['Catalogue pédagogique', 'audit:content'],
  ['Audit pédagogique approfondi', 'audit:pedagogy'],
  ['Tests de fumée', 'test:smoke'],
  ['Tests de mélange des QCM', 'test:quiz-shuffle'],
  ['Tests du cycle PWA', 'test:pwa'],
  ['Compatibilité PC/mobile', 'audit:platform'],
  ['Qualité des QCM', 'audit:quality'],
  ['Intégrité des QCM', 'audit:quiz-integrity'],
  ['Sécurité statique', 'audit:security'],
  ['PWA', 'audit:pwa'],
  ['Accessibilité', 'audit:accessibility'],
  ['Sauvegardes', 'audit:backup'],
  ['Diagnostic TypeScript', 'audit:typescript'],
  ['Santé du stockage', 'audit:storage-health'],
  ['Export du planning vers calendrier', 'audit:calendar'],
  ['Tests du format iCalendar', 'audit:calendar-unit'],
];
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const results = tasks.map(([label, script]) => {
  const run = spawnSync(npmCommand, ['run', script], { cwd: root, encoding: 'utf8', timeout: 120000, maxBuffer: 8 * 1024 * 1024, shell: process.platform === 'win32' });
  const output = `${run.stdout || ''}${run.stderr || ''}`.trim();
  return { label, script, status: run.status === 0 ? 'pass' : 'review', exitCode: run.status, signal: run.signal || null, output: output.slice(-12000) };
});
const report = {
  version: pkg.version,
  generatedAt: new Date().toISOString(),
  summary: { passed: results.filter(x => x.status === 'pass').length, needsReview: results.filter(x => x.status !== 'pass').length, total: results.length },
  results,
  interpretation: 'Un contrôle réussi indique uniquement que le script correspondant a terminé sans erreur. Les audits statiques ne remplacent pas les tests de navigateur, les essais sur appareils ni une validation pédagogique humaine.'
};
mkdirSync(path.join(root, 'docs'), { recursive: true });
writeFileSync(path.join(root, `docs/RELEASE_READINESS_V${pkg.version}.json`), JSON.stringify(report, null, 2));
writeFileSync(path.join(root, `docs/RELEASE_READINESS_V${pkg.version}.md`), `# Revue de préparation de livraison — NOX HAVEN ${pkg.version}\n\n**${report.summary.passed}/${report.summary.total}** commandes terminées sans erreur ; **${report.summary.needsReview}** à examiner.\n\n${results.map(x => `- ${x.status === 'pass' ? 'OK' : 'À EXAMINER'} — ${x.label} (\`${x.script}\`)`).join('\n')}\n\n## Interprétation\n\n${report.interpretation}\n\n## Détails des commandes\n\n${results.map(x => `### ${x.label}\n\n\`\`\`text\n${x.output || '(aucune sortie)'}\n\`\`\``).join('\n\n')}\n`);
console.log(`REVUE DE LIVRAISON ${pkg.version} — ${report.summary.passed}/${report.summary.total} commandes réussies ; ${report.summary.needsReview} à examiner.`);
for (const item of results) console.log(`${item.status === 'pass' ? 'OK' : 'À EXAMINER'} — ${item.label}`);
if (report.summary.needsReview) process.exitCode = 1;
