import fs from 'node:fs';const p='src/chapterResources.ts';let s=fs.readFileSync(p,'utf8');
for(const id of ['mexp-arithmetique','mexp-graphes','mexp-algo']){const start=s.indexOf(`  '${id}': {`);const next=s.indexOf("\n  '",start+4);const end=next<0?s.lastIndexOf('\n};'):next;let b=s.slice(start,end);let n=0;b=b.replace(/front:\s*(['"])(.*?)\1/g,(m,q,v)=>`front: ${q}${v} — carte ${++n}${q}`);s=s.slice(0,start)+b+s.slice(end);}
fs.writeFileSync(p,s);
