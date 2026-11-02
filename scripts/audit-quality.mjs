import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
const curriculum = readFileSync(resolve(root, 'src/curriculum.ts'), 'utf8');
const source = readFileSync(resolve(root, 'src/chapterResources.ts'), 'utf8');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const ids = [...curriculum.matchAll(/\bc\('([^']+)'/g)].map(m => m[1]);
const blocks = [...source.matchAll(/^  '([^']+)': \{([\s\S]*?)(?=^  '[^']+': \{|^\};)/gm)];
const distribution = [0, 0, 0, 0];
const chapterRows = [];
let quizTotal = 0, missingQuiz = 0;
for (const [, id, block] of blocks) {
  const match = block.match(/quiz:\s*\[([\s\S]*?)\n\s*\],\n\s*exercises:/);
  const answers = match ? [...match[1].matchAll(/answer\s*:\s*(\d+)/g)].map(m => Number(m[1])) : [];
  for (const answer of answers) if (answer >= 0 && answer <= 3) { distribution[answer]++; quizTotal++; }
  if (answers.length < 10) missingQuiz++;
  chapterRows.push({ id, quiz: answers.length, answers });
}
const pct = distribution.map(n => quizTotal ? n / quizTotal * 100 : 0);
const issues = [];
if (blocks.length !== ids.length) issues.push(`Le catalogue contient ${ids.length} chapitres mais ${blocks.length} ressources dédiées.`);
if (missingQuiz) issues.push(`${missingQuiz} ressources ont moins de 10 réponses indexées dans les QCM.`);
if (pct[0] > 45) issues.push(`Biais de position : ${pct[0].toFixed(1)} % des réponses correctes sont en première position.`);
const report = `# Audit qualité pédagogique — NOX HAVEN ${pkg.version}\n\n`+
`Date de contrôle : ${new Date().toISOString().slice(0,10)}\n\n`+
`- Chapitres catalogue : ${ids.length}\n- Ressources dédiées : ${blocks.length}\n- QCM avec index de réponse détecté : ${quizTotal}\n- Ressources avec moins de 10 réponses indexées : ${missingQuiz}\n\n`+
`## Distribution des réponses correctes\n\n`+
`| Position | Nombre | Part |\n|---|---:|---:|\n`+
 distribution.map((n,i)=>`| ${['A','B','C','D'][i]} | ${n} | ${pct[i].toFixed(1)} % |`).join('\n')+
`\n\n## Anomalies\n\n`+(issues.length ? issues.map(x=>`- ${x}`).join('\n') : '- Aucune anomalie détectée par les règles de cet audit.')+
`\n\n## Limites\n\nCet audit est statique. Il ne vérifie pas la vérité disciplinaire des corrections, la qualité didactique des distracteurs, la conformité exhaustive aux programmes ni la difficulté réelle. Une relecture humaine reste obligatoire.\n`;
writeFileSync(resolve(root, 'docs/AUDIT_QUALITE_V5.0.35.md'), report);
console.log(`AUDIT QUALITÉ NOX HAVEN ${pkg.version}`);
console.log(`Chapitres : ${ids.length} · ressources : ${blocks.length} · QCM analysés : ${quizTotal}`);
console.log(`Répartition des réponses : A ${pct[0].toFixed(1)} % · B ${pct[1].toFixed(1)} % · C ${pct[2].toFixed(1)} % · D ${pct[3].toFixed(1)} %`);
for (const issue of issues) console.log(`À CORRIGER — ${issue}`);
console.log('Rapport écrit dans docs/AUDIT_QUALITE_V5.0.35.md');
