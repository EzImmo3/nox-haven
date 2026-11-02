# StudyFlow V5.0.37 — Audit TypeScript reproductible

## Ajouts
- Ajout de `npm run audit:typescript` pour relancer l'analyse TypeScript et produire un rapport JSON et Markdown.
- Conservation des diagnostics bruts (jusqu'à 500 lignes) et regroupement par code d'erreur.
- Synchronisation de la version applicative et du package en 5.0.37.

## État technique
- Cette livraison améliore la reproductibilité du diagnostic ; elle ne prétend pas corriger les erreurs de typage.
- La compilation de production reste bloquée tant que les dépendances ne sont pas installées et que les erreurs de structure dans `src/chapterResources.ts` ne sont pas résolues.
- Ne pas publier cette version comme version de production.
