# StudyFlow 5.4.0 — Grand lot fiabilité PWA et livraison

## Changements
- Ajout d'une suite de 12 tests PWA automatisés couvrant enregistrement, scope, cache, activation, navigation hors ligne, requêtes GET et origine.
- Correction de l'audit PWA : rapports versionnés selon `package.json` et non plus sous un ancien numéro codé en dur.
- Workflow GitHub Actions renforcé avec cache npm, tests groupés, build de production et audits de livraison.
- Version synchronisée dans le package, le manifeste, le Service Worker, le titre HTML, l'interface et les exports de sauvegarde.

## Vérification
- Les tests PWA sont exécutables sans dépendances externes via `npm run test:pwa`.
- La CI crée le lockfile avant `npm ci`, car aucun lockfile vérifié n'est livré actuellement.
- Le build doit être confirmé sur GitHub Actions ou un environnement disposant du registre npm ; aucun build réussi n'est revendiqué ici.

## Limites
- Les tests sont statiques/structurels et ne remplacent pas une installation réelle Android/iOS.
- Le cache hors ligne couvre les ressources effectivement chargées et mises en cache ; la synchronisation cloud n'est pas implémentée.
- Le déploiement public nécessite encore un hébergement et une configuration de domaine.
