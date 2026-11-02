import fs from 'node:fs';
const p='src/chapterResources.ts';let s=fs.readFileSync(p,'utf8');
for(const id of ['mexp-arithmetique','mexp-graphes','mexp-algo']){
 const start=s.indexOf(`  '${id}': {`); if(start<0)continue;
 const next=s.indexOf("\n  '" ,start+4); const end=next<0?s.lastIndexOf('\n};'):next;
 let block=s.slice(start,end); let n=0;
 block=block.replace(/question:\s*(['"])(.*?)\1/g,(m,q,v)=>`question: ${q}${v} — variante ${++n}${q}`);
 s=s.slice(0,start)+block+s.slice(end);
}
fs.writeFileSync(p,s);
