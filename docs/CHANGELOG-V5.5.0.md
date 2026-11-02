# StudyFlow 5.5.0 — tests d'exécution du Service Worker

## Ce qui change

- Ajout d'un banc de test Node.js qui exécute réellement `public/sw.js` dans un contexte simulé de navigateur.
- Vérification du cycle `install` / `activate`, du précache des trois entrées essentielles, de la suppression des anciens caches et de la prise de contrôle des pages.
- Vérification du comportement de navigation en ligne puis hors ligne, du cache dynamique d'un asset local et de l'exclusion des requêtes POST et externes.
- Intégration du test runtime dans `npm run test:all`.
- Incrément de version PWA et de l'identifiant de cache vers 5.5.0 pour forcer le renouvellement du cache lors de la prochaine publication.

## Limites connues

Ce test simule les API du navigateur dans Node.js. Il ne remplace pas un essai réel sur Chrome Android, Safari iOS ou un navigateur de bureau. Le build de production reste à valider dans un environnement où les dépendances npm sont installables ; aucun résultat de build n'est revendiqué ici.
