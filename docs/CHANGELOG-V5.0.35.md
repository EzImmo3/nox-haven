# StudyFlow V5.0.35 — audit de qualité pédagogique

- Ajout de `npm run audit:quality` pour mesurer la distribution des positions de réponses correctes dans les QCM.
- Génération d'un rapport reproductible dans `docs/AUDIT_QUALITE_V5.0.35.md`.
- Version harmonisée dans le package, l'interface, les sauvegardes, le manifeste PWA et le cache du Service Worker.
- Aucun réordonnancement automatique des choix : préserver les associations réponse/correction sans parseur AST fiable est prioritaire sur une correction risquée.

## Constat de l'audit initial

Sur 2 325 QCM dont l'index de réponse est détecté, 61,9 % des bonnes réponses sont en première position. Ce biais rend les quiz trop prévisibles. Le prochain lot devra rééquilibrer les réponses en conservant les explications et en ajoutant des tests d'équivalence avant/après.

## Limites

Le rapport mesure une propriété structurelle, pas l'exactitude disciplinaire. Les ressources restent à relire par matière. Les tests sur appareils réels, le build de production et la synchronisation multiappareils ne sont pas validés par cette livraison.
