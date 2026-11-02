import fs from 'node:fs';
import path from 'node:path';
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
const src=fs.readFileSync('src/chapterResources.ts','utf8');
const blocks=[...src.matchAll(/^  '([^']+)': \{([\s\S]*?)(?=^  '[^']+': \{|^\};)/gm)];
const rows=[]; const issues=[]; let totalQuiz=0, shortExplanations=0, duplicateQuestions=0, shortCards=0, totalCards=0, totalExercises=0;
for(const [,id,block] of blocks){
 const title=block.match(/title:\s*'([^']+)'/)?.[1]??id;
 const quizzes=[...block.matchAll(/\{\s*level:\s*'(?:Facile|Intermédiaire|Difficile)'[\s\S]*?question:\s*'((?:\\.|[^'])*)'[\s\S]*?explanation:\s*'((?:\\.|[^'])*)'[\s\S]*?\}/g)];
 const qSeen=new Set(); let localDup=0,localShort=0;
 for(const q of quizzes){const question=q[1].replace(/\\'/g,"'").trim().toLocaleLowerCase('fr');const explanation=q[2].replace(/\\'/g,"'").trim();totalQuiz++;if(qSeen.has(question)){duplicateQuestions++;localDup++;}qSeen.add(question);if(explanation.length<45){shortExplanations++;localShort++;}}
 const cardCount=(block.match(/\{ front:/g)||[]).length; totalCards+=cardCount;
 const cards=[...block.matchAll(/front:\s*'((?:\\.|[^'])*)',\s*back:\s*'((?:\\.|[^'])*)'/g)];
 const weak=cards.filter(c=>c[1].length<8||c[2].length<24).length; shortCards+=weak;
 const exercises=(block.match(/\{ title:/g)||[]).length;totalExercises+=exercises;
 rows.push({id,title,quiz:quizzes.length,shortExplanations:localShort,duplicateQuestions:localDup,flashcards:cardCount,weakFlashcards:weak,exercises});
}
if(blocks.length===0)issues.push('Aucune ressource pédagogique analysable.');
if(duplicateQuestions)issues.push(`${duplicateQuestions} question(s) répétée(s) à l'intérieur d'un même chapitre.`);
const report={version:pkg.version,generatedAt:new Date().toISOString(),summary:{chapters:blocks.length,quizQuestions:totalQuiz,shortExplanations,duplicateQuestions,flashcards:totalCards,weakFlashcards:shortCards,exercises:totalExercises},chapters:rows,issues,limitations:['Audit lexical statique : ne vérifie pas la justesse disciplinaire ni la qualité pédagogique réelle.','Les chaînes construites dynamiquement ou utilisant des apostrophes échappées peuvent nécessiter une revue humaine.','Une explication courte n’est pas automatiquement fausse ; elle est signalée pour relecture.']};
fs.mkdirSync('docs',{recursive:true});fs.writeFileSync(`docs/AUDIT_PEDAGOGIQUE_V${pkg.version}.json`,JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(`docs/AUDIT_PEDAGOGIQUE_V${pkg.version}.md`,`# Audit pédagogique NOX HAVEN ${pkg.version}\n\n- Chapitres analysés : ${blocks.length}\n- Questions QCM : ${totalQuiz}\n- Explications courtes à relire (<45 caractères) : ${shortExplanations}\n- Questions répétées dans un même chapitre : ${duplicateQuestions}\n- Flashcards : ${totalCards}\n- Rectos/versos trop courts à relire : ${shortCards}\n- Exercices : ${totalExercises}\n\n## Limites\n\n${report.limitations.map(x=>'- '+x).join('\n')}\n`);
console.log(`AUDIT PÉDAGOGIQUE ${pkg.version} — ${blocks.length} chapitres · ${totalQuiz} QCM · ${totalCards} flashcards · ${totalExercises} exercices`);
console.log(`À relire : ${shortExplanations} explications courtes, ${shortCards} flashcards courtes, ${duplicateQuestions} doublons intra-chapitre.`);
if(!blocks.length)process.exitCode=1;
