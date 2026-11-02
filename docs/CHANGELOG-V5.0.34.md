# StudyFlow V5.0.34 — contrôle plateforme et ergonomie mobile

## Changements
- Ajout d'un audit statique dédié à la configuration PC/mobile/PWA (`npm run audit:platform`).
- Renforcement des zones tactiles sur les commandes principales en mode mobile (cible minimale de 44 px pour navigation, boutons principaux et commandes d'ajout).
- Prise en compte des safe areas iOS/Android pour les marges basses et latérales.
- Ajustements spécifiques aux écrans très étroits (≤ 380 px) pour les statistiques et l'en-tête.
- Version harmonisée dans le package, l'interface, les exports, le manifeste et le Service Worker.

## Limites
- L'audit plateforme est statique : il ne remplace pas des tests visuels sur Chrome, Safari, Firefox, Android, iOS et ordinateurs physiques.
- Le build complet doit être exécuté avec les dépendances installées.
- Aucun compte, backend, cloud ou synchronisation multi-appareils n'est ajouté dans cette version.
