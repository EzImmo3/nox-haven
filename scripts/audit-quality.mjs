import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
const curriculum = readFileSync(resolve(root, 'src/curriculum.ts'), 'utf8');
const source = readFileSync(resolve(root, 'src/chapterResources.ts'), 'utf8');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const ids = [...curriculum.matchAll(/\bc\('([^']+)'/g)].map(m => m[1]);
const blocks = [...source.matchAll(/^  '([^']+)': \{([\s\S]*?)(?=^  '[^']+': \{|^\};)/gm)];
function extractArray(block, field) {
  const match = new RegExp(`${field}\\s*:\\s*\\[`).exec(block); if (!match) return '';
  const open = match.index + match[0].lastIndexOf('['); let depth = 0, quote = null, escaped = false;
  for (let i = open; i < block.length; i++) { const ch = block[i]; if (quote) { if (escaped) escaped = false; else if (ch === '\\') escaped = true; else if (ch === quote) quote = null; continue; } if (ch === "'" || ch === '"' || ch === '`') quote = ch; else if (ch === '[') depth++; else if (ch === ']' && --depth === 0) return block.slice(open + 1, i); }
  return '';
}
const rows=[]; let quizTotal=0, missingQuiz=0;
for (const [,id,block] of blocks) { const quiz=extractArray(block,'quiz'); const answers=[...quiz.matchAll(/answer\s*:\s*(\d+)/g)].map(m=>Number(m[1])); quizTotal+=answers.length; if(answers.length<6)missingQuiz++; rows.push({id,quiz:answers.length}); }
const issues=[]; if(blocks.length!==ids.length)issues.push(`Le catalogue contient ${ids.length} chapitres mais ${blocks.length} ressources dédiées.`); if(missingQuiz)issues.push(`${missingQuiz} ressources ont moins de 6 QCM analysables.`);
const report=`# Audit qualité pédagogique — NOX HAVEN ${pkg.version}\n\nDate de contrôle : ${new Date().toISOString().slice(0,10)}\n\n- Chapitres catalogue : ${ids.length}\n- Ressources dédiées : ${blocks.length}\n- QCM avec index de réponse détecté : ${quizTotal}\n- Ressources avec moins de 6 QCM analysables : ${missingQuiz}\n- Mélange stable des propositions : contrôlé séparément par test:quiz-shuffle.\n\n## Anomalies\n\n${issues.length?issues.map(x=>`- ${x}`).join('\n'):'- Aucune anomalie détectée par les règles de cet audit.'}\n\n## Limites\n\nCet audit vérifie la présence des réponses indexées et le volume de questions. Il ne valide pas l’exactitude disciplinaire, la qualité des distracteurs, la conformité exhaustive aux programmes ni la difficulté réelle. Une relecture pédagogique reste nécessaire.\n`;
writeFileSync(resolve(root,`docs/AUDIT_QUALITE_V${pkg.version}.md`),report);
console.log(`AUDIT QUALITÉ NOX HAVEN ${pkg.version}`); console.log(`Chapitres : ${ids.length} · ressources : ${blocks.length} · QCM analysés : ${quizTotal}`); console.log(`Ressources avec moins de 6 QCM : ${missingQuiz}`); for(const issue of issues)console.log(`À CORRIGER — ${issue}`); console.log(`Rapport écrit dans docs/AUDIT_QUALITE_V${pkg.version}.md`);
