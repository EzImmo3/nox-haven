# État de livraison — StudyFlow V5.0.34

Cette livraison renforce les contrôles statiques de parité PC/mobile et l'ergonomie tactile. Elle ne constitue pas une validation complète de la compatibilité sur appareils physiques.

## Contrôles
- `npm run audit:content` : à exécuter dans l'environnement de build.
- `npm run test:smoke` : à exécuter dans l'environnement de build.
- `npm run audit:platform` : audit statique ajouté dans cette version.
- `npm run build` : non exécuté ici faute de dépendances installées.

## Limites connues
- Les ressources pédagogiques `draft` doivent être relues et sourcées.
- Les comptes utilisateurs, le backend, la synchronisation cloud et les sauvegardes distantes ne sont pas implémentés.
- Le préchargement intégral hors ligne n'est pas garanti.
- Tests physiques et validation accessibilité restent nécessaires.
