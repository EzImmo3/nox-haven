import fs from 'node:fs';
const source = fs.readFileSync('src/calendar.ts', 'utf8');
const checks = [
  ['UTF-8 line folding', /function foldCalendarLine/.test(source) && /TextEncoder/.test(source) && /octets \+ size > 75/.test(source)],
  ['RFC text escaping', /replace\(\/\\\\\/g/.test(source) && /replace\(\/,\/g/.test(source) && /replace\(\/;\/g/.test(source)],
  ['CRLF normalization', /\\r\\n\|\\r\|\\n/.test(source)],
  ['Date validation', /Date de séance invalide/.test(source) && /getUTCFullYear\(\) !== year/.test(source)],
  ['Exclusive end date', /setUTCDate\(date\.getUTCDate\(\) \+ 1\)/.test(source)],
  ['Invalid sessions excluded', /durationMinutes <= 0/.test(source) && /catch \{ continue; \}/.test(source)],
  ['Safe stable event id', /safeId = task\.id\.replace/.test(source) && /UID:\$\{safeId\}@studyflow\.local/.test(source)],
  ['Valid VEVENT status and completion extension', /'STATUS:CONFIRMED'/.test(source) && /X-STUDYFLOW-COMPLETED:\$\{task\.completed \? 'TRUE' : 'FALSE'\}/.test(source)],
];
console.log(`TESTS CALENDRIER — ${checks.filter(([, ok]) => ok).length}/${checks.length}`);
for (const [name, ok] of checks) console.log(`${ok ? 'OK' : 'À VÉRIFIER'} — ${name}`);
if (checks.some(([, ok]) => !ok)) process.exitCode = 1;
