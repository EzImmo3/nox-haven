# StudyFlow 5.8.0 — finitions mobiles et accessibilité du menu

## Livré
- Le menu mobile « Plus » est désormais présenté comme un dialogue modal avec voile d'arrière-plan ; toucher à l'extérieur le ferme.
- Le focus clavier entre dans le menu à son ouverture, revient au bouton déclencheur à la fermeture (Échap ou voile), et un indicateur de focus visible est prévu.
- Animation d'ouverture courte, désactivée lorsque l'utilisateur demande une réduction des animations.
- Tests mobiles étendus de 20 à 25 assertions, intégrés à `npm run test:all`.
- Version synchronisée en 5.8.0 dans package, manifeste, Service Worker, titre, sauvegarde et documentation.

## Vérifications
- Suite `npm run test:all` réussie.
- Tests mobile : 25/25.
- PWA : 12/12 ; Service Worker runtime : 11 assertions ; calendrier : 8/8 ; cohérence version : 8/8.
- Catalogue : 120 chapitres, 405 QCM, 630 flashcards, 233 exercices.

## Limites
- Tests automatisés structurels ; pas de validation tactile sur un appareil physique.
- Le build de production n'est pas certifié ici ; dépendances npm non installées dans cet environnement.
- Le menu est un dialogue annoncé et son focus initial/restauration sont gérés ; un test d'accessibilité complet avec lecteur d'écran reste nécessaire.
