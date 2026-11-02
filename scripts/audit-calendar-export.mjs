import fs from 'node:fs';
import path from 'node:path';
const app=fs.readFileSync(path.join('src','App.tsx'),'utf8');
const source=fs.readFileSync(path.join('src','calendar.ts'),'utf8');
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
const checks=[
 ['icalendar-container','Conteneur iCalendar 2.0',/BEGIN:VCALENDAR/.test(source)&&/END:VCALENDAR/.test(source)&&/VERSION:2\.0/.test(source)],
 ['all-day-dates','Séances exportées comme dates sans horaire inventé',/DTSTART;VALUE=DATE/.test(source)&&/DTEND;VALUE=DATE/.test(source)],
 ['exclusive-end','Fin exclusive calculée au lendemain',/setUTCDate\(date\.getUTCDate\(\) \+ 1\)/.test(source)],
 ['task-details','Titre, matière, chapitre et durée exportés',/SUMMARY:\$\{calendarEscape\(task\.title\)\}/.test(source)&&/task\.durationMinutes/.test(source)&&/task\.chapter/.test(source)],
 ['escaping','Caractères spéciaux et retours à la ligne échappés',/function calendarEscape/.test(source)&&/replace\(\/,\/g/.test(source)&&/replace\(\/;\/g/.test(source)&&/replace\(\/\\r\\n\|\\r\|\\n/.test(source)],
 ['utf8-folding','Lignes repliées à 75 octets UTF-8',/function foldCalendarLine/.test(source)&&/TextEncoder/.test(source)],
 ['date-validation','Dates impossibles rejetées',/Date de séance invalide/.test(source)],
 ['download','Téléchargement .ics depuis le planning',/download='nox-haven-planning\.ics'/.test(app)&&/Exporter calendrier/.test(app)],
 ['empty-state','Export désactivé si aucune séance',/disabled=\{!data\.tasks\.length\}/.test(app)],
 ['status','Statut VEVENT conforme et compatibilité VEVENT historique préservée',/'STATUS:CONFIRMED'/.test(source)&&/X-STUDYFLOW-COMPLETED/.test(source)],
];
const report={version:pkg.version,generatedAt:new Date().toISOString(),summary:{passed:checks.filter(x=>x[2]).length,total:checks.length},checks:checks.map(([id,label,ok])=>({id,label,status:ok?'pass':'review'})),limitations:['Audit statique et tests de structure : ils ne remplacent pas des essais d’import sur Google Calendar, Outlook ou Apple Calendar.','Les séances restent des événements sur la journée entière : aucune heure de début n’est connue.','L’export est un instantané ; un nouvel export est nécessaire après modification du planning.']};
fs.mkdirSync('docs',{recursive:true});
fs.writeFileSync(`docs/AUDIT_CALENDRIER_V${pkg.version}.json`,JSON.stringify(report,null,2));
fs.writeFileSync(`docs/AUDIT_CALENDRIER_V${pkg.version}.md`,`# Export calendrier — NOX HAVEN ${pkg.version}\n\n**${report.summary.passed}/${report.summary.total}** contrôles statiques positifs.\n\n${report.checks.map(c=>`- ${c.status==='pass'?'OK':'À vérifier'} — ${c.label}`).join('\n')}\n\n## Limites\n${report.limitations.map(x=>`- ${x}`).join('\n')}\n`);
console.log(`AUDIT CALENDRIER ${pkg.version} — ${report.summary.passed}/${report.summary.total}`);
for(const c of report.checks)console.log(`${c.status==='pass'?'OK':'À VÉRIFIER'} — ${c.label}`);
if(report.summary.passed!==checks.length)process.exitCode=1;
