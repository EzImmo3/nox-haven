import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const app=fs.readFileSync(path.join(root,'src/App.tsx'),'utf8');
const css=fs.readFileSync(path.join(root,'src/styles.css'),'utf8');
const checks=[
 ['storage-api','API de stockage du navigateur utilisée',/navigator\.storage/.test(app)],
 ['quota-estimate','Estimation de l’espace utilisé et du quota',/storageManager\.estimate\(\)/.test(app)&&/estimate\?\.usage/.test(app)&&/estimate\?\.quota/.test(app)],
 ['persistent-status','État de conservation persistante demandé',/storageManager\.persisted\(\)/.test(app)],
 ['persistent-request','Demande de conservation persistante',/storageManager\.persist\(\)/.test(app)],
 ['user-feedback','Résultat expliqué dans les paramètres',/Conservation persistante accordée/.test(app)&&/exports réguliers restent indispensables/i.test(app)],
 ['accessible-feedback','Résultat annoncé comme statut accessible',/className="storage-report" role="status"/.test(app)],
 ['responsive-report','Rapport de stockage stylé et intégré',/\.storage-report/.test(css)],
 ['backup-still-available','Export de sauvegarde conservé',/onClick=\{exportData\}/.test(app)],
];
const report={version:pkg.version,generatedAt:new Date().toISOString(),summary:{passed:checks.filter(x=>x[2]).length,total:checks.length},checks:checks.map(([id,label,ok])=>({id,label,status:ok?'pass':'review'})),limitations:['Les estimations de quota varient selon le navigateur et peuvent être approximatives.','La demande de persistance peut être refusée par le navigateur ; cela ne remplace jamais les sauvegardes exportées.','Audit statique : le comportement doit être confirmé dans les navigateurs et appareils cibles.']};
fs.mkdirSync(path.join(root,'docs'),{recursive:true});
fs.writeFileSync(path.join(root,`docs/AUDIT_STOCKAGE_V${pkg.version}.json`),JSON.stringify(report,null,2));
fs.writeFileSync(path.join(root,`docs/AUDIT_STOCKAGE_V${pkg.version}.md`),`# Santé du stockage — NOX HAVEN ${pkg.version}\n\n**${report.summary.passed}/${report.summary.total}** contrôles statiques positifs.\n\n${report.checks.map(c=>`- ${c.status==='pass'?'OK':'À vérifier'} — ${c.label}`).join('\n')}\n\n## Limites\n${report.limitations.map(x=>`- ${x}`).join('\n')}\n`);
console.log(`AUDIT STOCKAGE ${pkg.version} — ${report.summary.passed}/${report.summary.total}`);
for(const c of report.checks)console.log(`${c.status==='pass'?'OK':'À VÉRIFIER'} — ${c.label}`);
if(report.summary.passed!==report.summary.total)process.exitCode=1;
