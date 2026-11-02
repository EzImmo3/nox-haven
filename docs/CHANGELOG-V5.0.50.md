# StudyFlow 5.0.50 — Audit du manifeste et préparation d'installation reproductible

## Changements
- Ajout de `npm run audit:manifest` pour contrôler les dépendances déclarées, la présence et la cohérence du lockfile, les scripts indispensables et la version minimale de Node.js.
- Rapport JSON et Markdown horodaté dans `docs/MANIFEST_AUDIT_V5.0.50.*`.
- Intégration du nouvel audit dans `npm run audit:release`.
- Mise à jour de la version applicative, du manifeste PWA et du cache du service worker.

## Limites connues
- `package-lock.json` n'est pas encore disponible. Une génération a été tentée, mais la commande a expiré dans l'environnement courant.
- Les dépendances ne sont donc pas installées et le build de production reste non validé.
- Le nouvel audit signale explicitement ces blocages ; il ne prétend pas remplacer `npm ci` ni `npm run build`.
