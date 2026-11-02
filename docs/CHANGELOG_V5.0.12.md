# StudyFlow V5.0.12 — correction PWA et optimisation du bundle

Base : V5.0.11 (29 ressources pédagogiques sur 120 chapitres, soit 24,2 %).

## Corrections
- Enregistrement du Service Worker via `import.meta.env.BASE_URL`, avec une URL relative au déploiement et un scope cohérent. Le fichier `public/sw.js` est copié à la racine de `dist` par Vite.
- Découpage des dépendances React, React DOM et Lucide en chunks séparés pour limiter la taille du bundle principal.
- Synchronisation du numéro de version dans le package, l'interface, l'export, le cache PWA, le manifeste et les contrôles.

## Vérifications réalisées
- Audit du contenu : 120 chapitres, 29 ressources, 0 doublon, 0 ressource orpheline.
- Tests smoke : réussis, 29 ressources contrôlées.
- Archive ZIP : créée et contrôlée.

## Limite connue
La compilation de production n'a pas pu être exécutée dans l'environnement de préparation, car l'installation des dépendances npm a expiré. Il faudra lancer `npm install`, puis `npm run build` sur une machine disposant des dépendances. La correction du chemin PWA et le découpage du bundle sont intégrés au code, mais leur validation par build reste à confirmer.
