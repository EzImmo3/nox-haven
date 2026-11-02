# Récapitulatif StudyFlow 5.2.0 — Grand lot QCM

## Livré
- Mélange pseudo-aléatoire stable des propositions des QCM de la bibliothèque.
- La correction conserve l'index d'origine : le mélange n'altère jamais la bonne réponse.
- Contrôle radio avec libellé accessible.
- Tests unitaires Node du mélange et commande `npm run test:all`.
- Intégration des tests QCM et du contrôle de cohérence des versions dans l'audit global.
- Version synchronisée dans le package, l'interface, le manifeste PWA, le service worker, le titre HTML et le README.

## Résultats vérifiés
- Mélange QCM : 14 assertions réussies ; 24 permutations observées sur 24 pour 80 graines.
- Cohérence versions : 7/7.
- Tests de fumée : réussis, 120 ressources contrôlées.
- Audit catalogue : 120 ressources dédiées, aucun identifiant dupliqué ou orphelin.
- Calendrier : 8/8 tests unitaires et 10/10 contrôles statiques.
- Revue globale : 12/17 commandes réussies ; diagnostic environnement, manifeste/dépendances et TypeScript à examiner.
- Build : non validé, car les dépendances React/Vite sont absentes et des erreurs TS2322 subsistent dans chapterResources.ts.

## Limites
Le mélange équilibre l'affichage mais ne certifie pas l'exactitude pédagogique des questions. La compilation complète et les essais sur appareils physiques restent requis.
