# StudyFlow 5.3.0 — Grand lot accessibilité et qualité pédagogique

## Changements
- Audit accessibilité affiné : les boutons avec texte visible sont reconnus comme nommés ; les champs sont vérifiés par association `label`/`htmlFor`, `aria-label` ou `aria-labelledby`.
- Nouvel audit pédagogique détaillé pour les 120 ressources : volume QCM, explications courtes, répétitions intra-chapitre, flashcards courtes et exercices.
- Le rapport sépare les alertes à relire des erreurs certaines et rappelle les limites d'un audit lexical.
- `npm run test:all` inclut désormais l'audit pédagogique.
- `npm run audit:release` inclut le nouvel audit pédagogique.
- Version synchronisée dans le manifeste PWA, le Service Worker, l'interface, les sauvegardes, le titre HTML et la documentation.

## Limites connues
- L'installation npm locale a échoué avec `EAI_AGAIN` lors de la résolution de `registry.npmjs.org` ; les dépendances ne sont donc pas disponibles.
- Le build de production n'a pas pu être exécuté avec succès.
- L'audit pédagogique est lexical et structurel ; une relecture disciplinaire humaine reste nécessaire.
- Les essais réels Android/iOS, le déploiement public et la synchronisation cloud multi-appareils restent des chantiers distincts.
