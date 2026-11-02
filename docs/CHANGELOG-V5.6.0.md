# StudyFlow 5.6.0 — priorité mobile

- Remplacement de la navigation horizontale mobile par une barre fixe basse à cinq accès directs : Accueil, Cours, Quiz, Planning et Plus.
- Ajout d'un panneau secondaire donnant accès aux matières, fiches, flashcards, carnet d'erreurs, statistiques et paramètres.
- Prise en compte des zones de sécurité iOS (encoche et barre système), de la hauteur de la barre basse et des petits écrans.
- Cibles tactiles d'au moins 52 px pour la navigation mobile.
- Ajout de `npm run test:mobile` (12 contrôles statiques) à `npm run test:all`.
- Synchronisation des versions du manifeste, du Service Worker, des sauvegardes, du titre, du pied de page et de la documentation.

Les contrôles statiques et la suite de tests automatisés passent. La validation sur appareils physiques Android/iOS et le build de production restent à effectuer.
