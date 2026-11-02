# StudyFlow V4.2.9 — Première consolidation pédagogique

## Périmètre

Cette livraison enrichit la ressource `maths-derivee` sans modifier les identifiants du catalogue ni les données utilisateur.

- Ajout d'une fiche de révision structurée : synthèse, propriétés à connaître et méthodes.
- Ajout d'une référence institutionnelle Éduscol avec les éléments du programme qu'elle étaye.
- Clarification de la provenance éditoriale : contenus d'entraînement originaux, non officiels, statut `draft` conservé.
- Conservation des 30 flashcards, 20 QCM et 10 exercices déjà présents.

## Contrôles exécutés

- `node scripts/audit-content.mjs` : 120 chapitres, 120 identifiants uniques, 5 ressources dédiées, 115 chapitres sans ressource, aucune ressource orpheline ou dupliquée, aucune erreur d'audit.
- `node scripts/smoke-test.mjs` : réussite.

Le build TypeScript/Vite complet n'a pas été exécuté dans cet environnement : les dépendances du projet ne sont pas installées dans cette copie.
