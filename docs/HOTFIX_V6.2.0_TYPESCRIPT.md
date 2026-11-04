# Correctif V6.2.0 — contrat de types de synchronisation

## Problème
`src/cloudSync.d.mts` déclarait `synchronizeSnapshot()` avec un retour `Promise<unknown>`, alors que l’interface lit les statuts discriminants et les propriétés associées. TypeScript signalait donc des accès à un résultat de type `unknown` dans `src/App.tsx`.

## Correction
Ajout du type exporté `CloudSyncResult<T>`, décrivant les quatre issues effectivement renvoyées par l’adaptateur : `uploaded`, `unchanged`, `download-remote` et `conflict`. La déclaration de `synchronizeSnapshot()` renvoie désormais `Promise<CloudSyncResult<T>>`. Le code d’exécution n’a pas été modifié.

## Vérifications exécutées
- `node scripts/test-cloud-sync.mjs` — 10 assertions réussies (serveur simulé).
- `node scripts/test-sync-protocol.mjs` — 8/8.
- `node scripts/audit-security.mjs` — 13 fichiers, 0 constat.
- `node scripts/audit-version-coherence.mjs` — 8/8.
- `node --check src/cloudSync.mjs` — syntaxe valide.

## Limites
La compilation TypeScript complète et le build Vite n’ont pas été exécutés dans cet environnement : les dépendances de développement ne sont pas installées dans l’archive. Aucun test avec un vrai projet Supabase n’a été effectué.
