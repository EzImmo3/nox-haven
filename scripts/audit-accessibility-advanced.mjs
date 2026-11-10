import fs from 'node:fs';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const srcDir = new URL('src/', root);
const files = fs.readdirSync(srcDir).filter(name => /\.(tsx|ts|html)$/.test(name));
const source = files.map(name => fs.readFileSync(new URL(name, srcDir), 'utf8')).join('\n');
const css = fs.readFileSync(new URL('src/styles.css', root), 'utf8');
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const links = [...source.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gs)].map(match => match[0]);
const images = [...source.matchAll(/<img\b[^>]*>/gs)].map(match => match[0]);
const checks = [
  ['skip-link', /skip-link/.test(source) && /href="#studyflow-main"/.test(source)],
  ['main-landmark', /<main\b/.test(source) && /id="studyflow-main"/.test(source)],
  ['visible-keyboard-focus', /:focus-visible/.test(css)],
  ['reduced-motion', /prefers-reduced-motion/.test(css)],
  ['live-status', /aria-live=/.test(source)],
  ['progressbar-accessible', /role="progressbar"/.test(source) && /aria-valuenow=/.test(source)],
  ['images-have-alt', images.every(tag => /\balt=/.test(tag))],
  ['external-links-rel', links.every(tag => /\brel="[^"]*(?:noopener|noreferrer)/.test(tag))],
  ['error-boundary-announced', /role="alert"/.test(fs.readFileSync(new URL('src/ErrorBoundary.tsx', root), 'utf8'))],
  ['document-language', /<html[^>]*lang="fr"/.test(html)]
];
const failed = checks.filter(([,ok]) => !ok);
console.log(`AUDIT ACCESSIBILITÉ AVANCÉE — ${checks.length-failed.length}/${checks.length}`);
for (const [id,ok] of checks) console.log(`${ok?'OK':'À CORRIGER'} ${id}`);
if (failed.length) process.exitCode = 1;
