import { readFileSync } from 'node:fs';
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const pkg = JSON.parse(read('package.json'));
const html = read('index.html');
const css = read('src/styles.css');
const app = read('src/App.tsx');
const main = read('src/main.tsx');
const manifest = JSON.parse(read('public/manifest.webmanifest'));
const sw = read('public/sw.js');
const checks = [
  ['viewport mobile déclaré', /name="viewport"[^>]*width=device-width/.test(html)],
  ['langue du document déclarée', /<html lang="fr"/.test(html)],
  ['breakpoint mobile principal', /@media\s*\(max-width:\s*700px\)/.test(css)],
  ['breakpoint petit écran', /@media\s*\(max-width:\s*380px\)/.test(css)],
  ['cibles tactiles 44px', /\.sidebar \.nav-item\{min-height:44px/.test(css) && /\.primary-btn,\.secondary-btn\{min-height:44px/.test(css)],
  ['respect des zones de sécurité mobile', /env\(safe-area-inset-bottom\)/.test(css) && /env\(safe-area-inset-left\)/.test(css)],
  ['PWA en mode standalone', manifest.display === 'standalone'],
  ['portée PWA relative', manifest.start_url === './' && manifest.scope === './'],
  ['icônes PWA configurées', manifest.icons?.some(x => x.sizes === '192x192') && manifest.icons?.some(x => x.sizes === '512x512')],
  ['Service Worker versionné', sw.includes(`noxhaven-shell-v${pkg.version}-`)],
  ['Service Worker scoped', sw.includes('self.registration.scope')],
  ['enregistrement SW basé sur BASE_URL', main.includes('import.meta.env.BASE_URL') && main.includes('navigator.serviceWorker.register')],
  ['navigation clavier visible', css.includes(':focus-visible')],
  ['préférence mouvement réduit', css.includes('prefers-reduced-motion:reduce')],
  ['tables avec défilement horizontal local', css.includes('.table-wrap{overflow-x:auto}')],
  ['version export cohérente', app.includes(`appVersion:'${pkg.version}'`)],
];
console.log(`AUDIT PLATEFORME NOX HAVEN ${pkg.version}`);
for (const [label, ok] of checks) console.log(`${ok ? 'OK' : 'À CORRIGER'} — ${label}`);
const failed = checks.filter(([,ok]) => !ok);
console.log(`\nRésultat : ${checks.length - failed.length}/${checks.length} contrôles statiques validés.`);
if (failed.length) process.exitCode = 1;
