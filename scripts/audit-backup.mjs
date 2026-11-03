import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const app=fs.readFileSync(path.join(root,'src/App.tsx'),'utf8');
const storage=fs.readFileSync(path.join(root,'src/storage.ts'),'utf8');
const data=fs.readFileSync(path.join(root,'src/data.ts'),'utf8');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const checks=[
 ['backup-envelope','Export versionné',/format:'studyflow-backup',backupVersion:1/.test(app)],
 ['sha-export','Empreinte SHA-256 à l’export',/crypto\.subtle\.digest\('SHA-256'/.test(app)],
 ['sha-import','Empreinte vérifiée avant import',/actual!==checksum\.value/.test(app)],
 ['sha-format','Format hexadécimal SHA-256 contrôlé',/\^\[a-f0-9\]\{64\}\$/i.test(app)],
 ['size-limit','Taille maximale du fichier contrôlée',/MAX_BACKUP_BYTES=25\*1024\*1024/.test(app)],
 ['empty-file','Fichier vide refusé',/f\.size===0/.test(app)],
 ['data-validation','Données validées avant confirmation',app.indexOf('migrateData(rawData)')<app.indexOf("confirm('Cette sauvegarde")],
 ['restore-confirm','Confirmation avant remplacement',/confirm\('Cette sauvegarde remplacera toutes les données actuelles/.test(app)],
 ['indexeddb-primary','IndexedDB prioritaire',/indexedDB\.open\(DB_NAME, DB_VERSION\)/.test(storage)],
 ['legacy-preserved','Migration sans suppression immédiate des anciennes données',!storage.includes('localStorage.removeItem(STORAGE_KEY)') && /DATA_MIRROR_KEY/.test(storage) && /PREFERENCES_MIRROR_KEY/.test(storage)],
 ['storage-conflict','Conflits inter-onglets signalés',/BroadcastChannel/.test(storage)],
 ['strict-subject-validation','Validation des matières et notes',/Matière invalide dans la sauvegarde/.test(data)&&/Note invalide dans la sauvegarde/.test(data)],
];
const report={version:pkg.version,generatedAt:new Date().toISOString(),summary:{passed:checks.filter(x=>x[2]).length,total:checks.length},checks:checks.map(([id,label,ok])=>({id,label,status:ok?'pass':'review'})),limitations:['Audit statique : les tests de restauration réelle doivent être effectués dans un navigateur avec IndexedDB.','Une empreinte SHA-256 détecte les altérations accidentelles, mais ne chiffre pas la sauvegarde et ne prouve pas son origine.','Aucune sauvegarde cloud ni synchronisation entre appareils n’est fournie.']};
fs.mkdirSync(path.join(root,'docs'),{recursive:true});
fs.writeFileSync(path.join(root,`docs/AUDIT_SAUVEGARDE_V${pkg.version}.json`),JSON.stringify(report,null,2));
fs.writeFileSync(path.join(root,`docs/AUDIT_SAUVEGARDE_V${pkg.version}.md`),`# Audit des sauvegardes — NOX HAVEN ${pkg.version}\n\nRésultat : **${report.summary.passed}/${report.summary.total}** contrôles statiques positifs.\n\n${report.checks.map(c=>`- ${c.status==='pass'?'OK':'À vérifier'} — ${c.label}`).join('\n')}\n\n## Limites\n${report.limitations.map(x=>`- ${x}`).join('\n')}\n`);
console.log(`AUDIT SAUVEGARDE ${pkg.version} — ${report.summary.passed}/${report.summary.total}`);
for(const c of report.checks)console.log(`${c.status==='pass'?'OK':'À VÉRIFIER'} — ${c.label}`);
if(report.summary.passed!==report.summary.total)process.exitCode=1;
