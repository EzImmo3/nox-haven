# StudyFlow 5.9.0 — grand lot finition mobile

## Améliorations
- Dialogue mobile « Plus » : piège de focus clavier, verrouillage du défilement de fond pendant l'ouverture et restauration de l'état précédent à la fermeture.
- Formulaires mobiles : champs de saisie à 16 px pour éviter le zoom automatique Safari iOS, hauteur tactile minimale de 44 px et zones de texte plus confortables.
- Pages de cours et quiz : meilleure gestion des textes longs et actions de vérification empilées sur petit écran.
- Modales redimensionnées pour rester utilisables sur les écrans étroits.
- Navigation basse et panneau « Plus » adaptés au mode paysage.
- 32 contrôles mobiles statiques intégrés à `npm run test:mobile` et à `npm run test:all`.

## Vérifications
- Suite globale : réussie.
- Mobile : 32/32.
- PWA : 12/12.
- Service Worker runtime : 11 assertions.
- Calendrier : 8/8.
- Cohérence des versions : 8/8.
- Plateforme : 16/16.

## Limites
- Build non validé : les dépendances React/Vite ne sont pas présentes dans l'environnement et des erreurs TypeScript persistantes dans `chapterResources.ts` empêchent la compilation.
- Deux heuristiques de l'audit accessibilité restent à vérifier.
- Pas de validation physique Android/iOS dans cette livraison. La finition mobile côté code progresse, mais la partie mobile ne peut pas encore être déclarée totalement terminée.
