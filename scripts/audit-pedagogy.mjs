import fs from 'node:fs';
import path from 'node:path';
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
const src=fs.readFileSync('src/chapterResources.ts','utf8');
const blocks=[...src.matchAll(/^  '([^']+)': \{([\s\S]*?)(?=^  '[^']+': \{|^\};)/gm)];
function extractArray(block,field){const match=new RegExp(`${field}\\s*:\\s*\\[`).exec(block);if(!match)return '';const open=match.index+match[0].lastIndexOf('[');let depth=0,quote=null,escaped=false;for(let i=open;i<block.length;i++){const ch=block[i];if(quote){if(escaped)escaped=false;else if(ch==='\\')escaped=true;else if(ch===quote)quote=null;continue;}if(ch==="'"||ch==='"'||ch==='`')quote=ch;else if(ch==='[')depth++;else if(ch===']'&&--depth===0)return block.slice(open+1,i);}return '';}
function stringsForField(text,field){const out=[];const re=new RegExp(`${field}\\s*:\\s*(['"])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`,'g');for(const m of text.matchAll(re))out.push(m[2].replace(/\\'/g,"'").replace(/\\"/g,'"'));return out;}
const rows=[];const issues=[];let totalQuiz=0,shortExplanations=0,duplicateQuestions=0,shortCards=0,totalCards=0,totalExercises=0;
for(const [,id,block] of blocks){
 const title=block.match(/title:\s*['"]([^'"]+)['"]/)?.[1]??id;
 const quizBlock=extractArray(block,'quiz');
 const questions=stringsForField(quizBlock,'question');
 const explanations=stringsForField(quizBlock,'explanation');
 const qCount=(quizBlock.match(/answer\s*:\s*\d+/g)||[]).length; totalQuiz+=qCount;
 const seen=new Set();let localDup=0,localShort=0;
 for(const q of questions){const key=q.trim().toLocaleLowerCase('fr');if(seen.has(key)){duplicateQuestions++;localDup++;}seen.add(key);}
 for(const explanation of explanations){if(explanation.trim().length<20&&!/[0-9=<>≤≥±√∑πσμ×÷²³ⁿ]/.test(explanation)){shortExplanations++;localShort++;}}
 const cardsBlock=extractArray(block,'flashcards');
 const cardFronts=stringsForField(cardsBlock,'front');const cardBacks=stringsForField(cardsBlock,'back');const cardCount=Math.min(cardFronts.length,cardBacks.length);totalCards+=cardCount;
 let weak=0;for(let i=0;i<cardCount;i++){const front=cardFronts[i].trim(),back=cardBacks[i].trim();const compactAnswer=/[0-9=<>≤≥±√∑πσμ×÷²³ⁿˣ∞+−*/·;()\[\]∫Ω→]/.test(back)||/^(oui|non)\.?$/i.test(back);if(!front||!back||(back.length<12&&!compactAnswer))weak++;}shortCards+=weak;
 const exerciseBlock=extractArray(block,'exercises');const exercises=(exerciseBlock.match(/\{\s*title\s*:/g)||[]).length;totalExercises+=exercises;
 rows.push({id,title,quiz:qCount,shortExplanations:localShort,duplicateQuestions:localDup,flashcards:cardCount,weakFlashcards:weak,exercises});
}
if(blocks.length===0)issues.push('Aucune ressource pédagogique analysable.');
if(duplicateQuestions)issues.push(`${duplicateQuestions} question(s) répétée(s) à l'intérieur d'un même chapitre.`);
const report={version:pkg.version,generatedAt:new Date().toISOString(),summary:{chapters:blocks.length,quizQuestions:totalQuiz,shortExplanations,duplicateQuestions,flashcards:totalCards,weakFlashcards:shortCards,exercises:totalExercises},chapters:rows,issues,limitations:['Audit lexical et structurel : ne vérifie pas la justesse disciplinaire ni la qualité didactique réelle.','Les explications de calcul compactes sont acceptées lorsqu’elles indiquent une opération vérifiable ; les formules seules sont distinguées des explications verbales.','Une relecture humaine reste nécessaire pour valider les notions, les corrections et les attendus du programme.']};
fs.mkdirSync('docs',{recursive:true});fs.writeFileSync(`docs/AUDIT_PEDAGOGIQUE_V${pkg.version}.json`,JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(`docs/AUDIT_PEDAGOGIQUE_V${pkg.version}.md`,`# Audit pédagogique NOX HAVEN ${pkg.version}\n\n- Chapitres analysés : ${blocks.length}\n- Questions QCM : ${totalQuiz}\n- Explications trop brèves hors formules/calculs (<20 caractères) : ${shortExplanations}\n- Questions répétées dans un même chapitre : ${duplicateQuestions}\n- Flashcards : ${totalCards}\n- Réponses trop courtes hors formules/réponses binaires : ${shortCards}\n- Exercices : ${totalExercises}\n\n## Limites\n\n${report.limitations.map(x=>'- '+x).join('\n')}\n`);
console.log(`AUDIT PÉDAGOGIQUE ${pkg.version} — ${blocks.length} chapitres · ${totalQuiz} QCM · ${totalCards} flashcards · ${totalExercises} exercices`);
console.log(`À relire : ${shortExplanations} explications courtes, ${shortCards} flashcards trop courtes, ${duplicateQuestions} doublons intra-chapitre.`);
if(!blocks.length)process.exitCode=1;
