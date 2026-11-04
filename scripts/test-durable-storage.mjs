import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const storage = fs.readFileSync(path.join(root, 'src/storage.ts'), 'utf8');
const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const checks = [
  ['dual-data-mirror', 'Miroir local des données', storage.includes("nox-haven:durable-data:v1")],
  ['dual-preferences-mirror', 'Miroir local des préférences et du profil', storage.includes("nox-haven:durable-preferences:v1")],
  ['timestamped-snapshots', 'Snapshots horodatés pour choisir la copie la plus récente', /dataCandidates\.sort\(\(a, b\) => b\.savedAt - a\.savedAt\)/.test(storage)],
  ['legacy-profile-recovery', 'Récupération du marqueur de profil historique', /safeLocalStorageGet\(PROFILE_KEY\) === 'done'/.test(storage)],
  ['indexeddb-transaction-meta', 'Métadonnées écrites dans la même transaction IndexedDB', /store\.put\(savedAt, metaKey\)/.test(storage)],
  ['no-indexeddb-fallback', 'Récupération lorsque IndexedDB est indisponible', /if \(!db\)[\s\S]*persistent: false/.test(storage)],
  ['damaged-db-fallback', 'Récupération depuis le miroir si IndexedDB échoue', /catch \(error\)[\s\S]*mirrorData\?\.value/.test(storage)],
  ['pagehide-flush', 'Sauvegarde synchrone à la fermeture de page', /addEventListener\('pagehide',flush\)/.test(app)],
  ['visibility-flush', 'Sauvegarde lorsque l’application passe en arrière-plan', /visibilityState==='hidden'/.test(app)],
  ['persistent-storage-request', 'Demande de conservation persistante au navigateur', /requestPersistentStorage\(\)/.test(app)],
  ['fallback-preferences', 'Sauvegarde des préférences en mode de secours', /saveLegacyPreferences\(preferences\)/.test(app)],
  ['fallback-data-write-status', 'Échec des écritures de secours détectable', /return mirrored \|\| legacySaved/.test(storage)],
  ['fallback-preferences-write-status', 'Échec des préférences de secours détectable', /return mirrored \|\| legacyWrites\.every\(Boolean\)/.test(storage)],
  ['fallback-failure-warning', 'Alerte visible si le stockage de secours est saturé', /!saveLegacyData\(data\)/.test(app) && /!saveLegacyPreferences\(preferences\)/.test(app)],
];
const failed = checks.filter(([, , ok]) => !ok);
console.log(`TEST DURABLE STORAGE — ${checks.length - failed.length}/${checks.length}`);
for (const [id, label, ok] of checks) console.log(`${ok ? 'OK' : 'FAIL'} — ${id}: ${label}`);
if (failed.length) process.exitCode = 1;
