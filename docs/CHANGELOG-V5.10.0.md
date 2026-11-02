# StudyFlow 5.10.0 — fermeture mobile accessible

## Changements
- Ajout d'un en-tête visible au panneau mobile « Autres rubriques ».
- Ajout d'un bouton de fermeture explicite, utilisable au toucher et annoncé aux lecteurs d'écran.
- Fermeture avec retour du focus au bouton « Plus » pour conserver un parcours clavier cohérent.
- Le bouton de fermeture est dimensionné pour rester confortable sur téléphone.
- Version du cache Service Worker, du manifeste, du pied de page et des sauvegardes alignée sur 5.10.0.
- Suite de tests mobile enrichie de trois contrôles dédiés à cette fermeture.

## Validation
- `npm run test:all` : à relancer après livraison.
- Audit plateforme statique : 16/16 sur la base 5.9.0 ; à reconfirmer sur cette version.
- Compilation de production : non validée dans l'environnement actuel, les dépendances React/Vite et leurs types ne sont pas disponibles.
- Essai sur appareils Android/iOS physiques : non effectué.
