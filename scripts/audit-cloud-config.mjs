import fs from 'node:fs';
import assert from 'node:assert/strict';

const app=fs.readFileSync('src/App.tsx','utf8');
const adapter=fs.readFileSync('src/cloudSync.mjs','utf8');
const workflow=fs.readFileSync('.github/workflows/deploy.yml','utf8');
const example=fs.readFileSync('.env.example','utf8');
const schema=fs.readFileSync('supabase/schema.sql','utf8');

assert(app.includes('import.meta.env.VITE_SUPABASE_URL') && app.includes('import.meta.env.VITE_SUPABASE_ANON_KEY'),'Le client doit lire les deux variables Vite.');
assert(adapter.includes("'apikey': c.anonKey") || adapter.includes('apikey: c.anonKey'),'Le client doit utiliser la clé publique configurée.');
assert(workflow.includes('VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}'),'Le build GitHub Pages doit recevoir l’URL Supabase depuis un secret.');
assert(workflow.includes('VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}'),'Le build GitHub Pages doit recevoir la clé publique depuis un secret.');
assert(example.includes('VITE_SUPABASE_URL=') && example.includes('VITE_SUPABASE_ANON_KEY='),'Un modèle de configuration locale doit être fourni.');
assert(!/SERVICE_ROLE_KEY\\s*=|service_role\\s*=|SUPABASE_SERVICE_ROLE/i.test(example),'Aucune variable service_role ne doit être proposée dans le modèle client.');
assert(/enable row level security/i.test(schema),'Le schéma Supabase doit activer RLS.');
assert(/create policy/i.test(schema),'Le schéma Supabase doit définir des politiques d’accès.');
console.log('CONFIGURATION CLOUD — 8/8 assertions réussies (validation statique, pas un test Supabase réel).');
