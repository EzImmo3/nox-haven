import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const source = readFileSync(resolve(root, 'src/chapterResources.ts'), 'utf8');
const curriculum = readFileSync(resolve(root, 'src/curriculum.ts'), 'utf8');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const ids = [...curriculum.matchAll(/\bc\('([^']+)'/g)].map(m => m[1]);
function balanced(text, start, open, close) {
  let depth=0, quote=null, escaped=false;
  for(let i=start;i<text.length;i++) { const c=text[i];
    if(quote) { if(escaped) escaped=false; else if(c==='\\') escaped=true; else if(c===quote) quote=null; continue; }
    if(c==='\''||c==='"'||c==='`'){quote=c;continue;}
    if(c===open) depth++; else if(c===close && --depth===0) return text.slice(start+1,i);
  }
  return '';
}
function fieldString(block,name){const m=block.match(new RegExp(`\\b${name}\\s*:\\s*(['"])([\\s\\S]*?)\\1`));return m?.[2]??'';}
function parseChoices(block){const m=block.match(/\bchoices\s*:\s*\[/); if(!m)return null; const s=balanced(block,m.index+m[0].lastIndexOf('['),'[',']'); return [...s.matchAll(/(['"])(.*?)\1/g)].map(x=>x[2]);}
const resources=[...source.matchAll(/^  '([^']+)':\s*\{/gm)];
const findings=[]; const distribution=[0,0,0,0]; let total=0, missing=0, weakExplanation=0, duplicateOptions=0, duplicateQuestions=0, invalid=0;
for(let ri=0;ri<resources.length;ri++){
 const id=resources[ri][1], start=resources[ri].index+resources[ri][0].length;
 const end=ri+1<resources.length?resources[ri+1].index:source.indexOf('\n};',start);
 const block=source.slice(start,end<0?source.length:end);
 const qm=block.match(/\bquiz\s*:\s*\[/); if(!qm){missing++; findings.push({id,issue:'Section QCM absente'});continue;}
 const quiz=balanced(block,qm.index+qm[0].lastIndexOf('['),'[',']');
 let cursor=0, count=0; const questions=[];
 while(cursor<quiz.length){const rel=quiz.indexOf('{',cursor);if(rel<0)break;const obj=balanced(quiz,rel,'{','}');if(!obj)break;cursor=rel+obj.length+2; if(!/\bquestion\s*:/.test(obj))continue; count++; total++;
  const q=fieldString(obj,'question').trim(), exp=fieldString(obj,'explanation').trim(), choices=parseChoices(obj), ans=Number(obj.match(/\banswer\s*:\s*(-?\d+)/)?.[1]??NaN);
  const issues=[];
  if(!q)issues.push('énoncé absent');
  if(!choices||choices.length<2)issues.push('moins de deux choix');
  if(!Number.isInteger(ans)||!choices||ans<0||ans>=choices.length){issues.push('index de réponse invalide');invalid++;}
  if(choices){if(choices.some(x=>!x.trim()))issues.push('choix vide');const norm=choices.map(x=>x.trim().toLocaleLowerCase('fr').replace(/\s+/g,' '));if(new Set(norm).size!==norm.length){issues.push('choix dupliqués');duplicateOptions++;}}
  if(exp.length<25){issues.push('explication trop courte (<25 caractères)');weakExplanation++;}
  if(Number.isInteger(ans)&&ans>=0&&ans<4){distribution[ans]++;}
  if(issues.length)findings.push({id,question:q.slice(0,110),issue:issues.join('; ')});
  questions.push(q.toLocaleLowerCase('fr').replace(/\s+/g,' ').trim());
 }
 if(count<10){missing++;findings.push({id,issue:`Seulement ${count} QCM détectés`});}
 if(new Set(questions).size!==questions.length){duplicateQuestions++;findings.push({id,issue:'Énoncés de QCM répétés dans la ressource'});}
}
const validAnswers=distribution.reduce((a,b)=>a+b,0); const pct=distribution.map(n=>validAnswers?100*n/validAnswers:0);
const report={version:pkg.version,chapters:resources.length,catalogue:ids.length,questions:total,distribution:distribution.map((n,i)=>({choice:['A','B','C','D'][i],count:n,percent:Number(pct[i].toFixed(1))})),metrics:{resourcesWithMissingOrFewQuizzes:missing,invalidAnswerIndexes:invalid,duplicateOptions,duplicateQuestionSets:duplicateQuestions,weakExplanations:weakExplanation},findings};
mkdirSync(resolve(root,'docs'),{recursive:true});
writeFileSync(resolve(root,`docs/AUDIT_INTEGRITE_QCM_V${pkg.version}.json`),JSON.stringify(report,null,2)+'\n');
const md=`# Audit d'intégrité des QCM — NOX HAVEN ${pkg.version}\n\n- Chapitres : ${resources.length}/${ids.length}\n- Questions détectées : ${total}\n- Index de réponse invalides : ${invalid}\n- Choix dupliqués : ${duplicateOptions}\n- Ressources avec moins de 10 QCM : ${missing}\n- Explications de moins de 25 caractères : ${weakExplanation}\n\n## Distribution des index de réponse\n\n| Choix | Nombre | Part |\n|---|---:|---:|\n${report.distribution.map(x=>`| ${x.choice} | ${x.count} | ${x.percent}% |`).join('\n')}\n\n## Anomalies à examiner\n\n${findings.length?findings.slice(0,250).map(x=>`- **${x.id}**${x.question?` — « ${x.question} »`:''} : ${x.issue}`).join('\n'):'Aucune anomalie structurelle détectée.'}\n\n> Audit statique : il vérifie la cohérence formelle, pas la vérité des réponses ni la pertinence pédagogique. Les réponses ne sont jamais réordonnées automatiquement.\n`;
writeFileSync(resolve(root,`docs/AUDIT_INTEGRITE_QCM_V${pkg.version}.md`),md);
console.log(`Audit intégrité QCM ${pkg.version}: ${total} questions, ${findings.length} constats, ${invalid} index invalides, ${duplicateOptions} doublons de choix, ${weakExplanation} explications courtes.`);

if (missing || invalid || duplicateOptions || duplicateQuestions || weakExplanation) process.exitCode = 1;
