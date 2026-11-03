# NOX HAVEN V5.16.0 — Cockpit personnalisé

## Fonctionnalités livrées
- Modification directe de l'objectif de moyenne personnelle depuis le cockpit (0 à 20, précision au dixième, possibilité de retirer la cible).
- Sauvegarde de la cible dans les préférences IndexedDB déjà utilisées par l'application.
- Historique visuel des moyennes mensuelles sur six mois. Seules les évaluations normales sont incluses ; un mois sans note reste vide.
- Classement des matières actives incluses dans la moyenne, avec moyenne réelle, nombre d'évaluations et poids.
- Fonctions de calcul isolées dans `src/dashboard.mjs`, déclarations TypeScript et tests unitaires dédiés.

## Contrôles réussis
- Cockpit : 8 assertions.
- Mobile : 48/48.
- PWA : 12/12.
- Runtime Service Worker : 11 assertions.
- Synchronisation locale multi-onglets / protocole : 8/8.
- Smoke tests : 120 ressources contrôlées et scénarios fonctionnels validés.
- Mélange des QCM : 14 assertions.
- Calendrier : 8/8.
- Accessibilité heuristique : 11/11.
- Sécurité statique : 0 constat.
- Sauvegarde : 12/12.
- Stockage : 8/8.
- Cohérence des versions : 8/8.

## Réserves
- Le build TypeScript/Vite n'a pas pu être certifié dans cet environnement : les dépendances React, Vite et Lucide ne sont pas installées, et les tentatives d'installation npm ont expiré. `npm ci` ne peut pas démarrer sans `package-lock.json`.
- Les tests mobiles sont des tests automatisés statiques/runtime ; ils ne remplacent pas des essais physiques sur plusieurs modèles Android, iOS, tablettes et ordinateurs.
- Le graphe est descriptif et n'est pas une prédiction des résultats futurs.

## Exécution locale après installation des dépendances
- `npm install` pour générer `package-lock.json`.
- `npm run build` pour valider TypeScript et Vite.
- `npm run test:dashboard` pour les calculs du cockpit.
