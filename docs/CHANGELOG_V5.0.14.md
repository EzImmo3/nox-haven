# StudyFlow V5.0.15 — correction TypeScript de l'environnement Vite

## Correction
- Ajout de `src/vite-env.d.ts` avec les types client Vite et la déclaration explicite de `ImportMetaEnv.BASE_URL`.
- Correction de l'erreur TypeScript TS2339 rencontrée lors de `tsc -b` sur `import.meta.env.BASE_URL`.
- Synchronisation de la version 5.0.15 dans l'interface, les exports de sauvegarde, le manifeste, le Service Worker et l'audit de contenu.

## Contenu conservé
- Les 120 chapitres du catalogue.
- Les 31 ressources pédagogiques de la V5.0.13, dont les 11 chapitres de physique-chimie.
- L'identité visuelle claire et sombre et les optimisations PWA/bundle précédentes.

## Validation
- À compléter après exécution locale de `npm install`, `npm run build`, `npm run audit:content` et `npm run test:smoke`.
