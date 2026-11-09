# NOX HAVEN 7.1.0 — Candidat VF (9 novembre 2026)

## État

Cette archive est un candidat de version finale préparé à partir de l'archive `V7.1.0_PREPARATION_VF` et du `App.tsx` complet transmis le 8 novembre. Elle n'est pas encore déclarée comme version finale publiée : le build Vite/TypeScript complet et le test avec le vrai projet Supabase restent à effectuer dans l'environnement du propriétaire du projet.

## Modifications de cette préparation

- Remplacement du calcul d'empreinte JSON dépendant de l'ordre des propriétés par une sérialisation JSON canonique (clés d'objets triées), pour éviter les faux rejets après un aller-retour JSONB/Supabase.
- Liaison correcte de `fetch` à `globalThis` lorsque le fetch natif est utilisé.
- Lecture de la ligne cloud filtrée par le compte connecté.
- Inspection non destructive de la sauvegarde distante : vide, valide ou invalide.
- Réparation explicite d'une ligne invalide avec contrôle optimiste sur la révision et l'ancienne empreinte ; aucune écriture si la ligne a changé depuis l'inspection.
- Intégration de la réparation dans l'interface, avec confirmation explicite et avertissement de n'effectuer l'opération que depuis l'appareil qui contient la sauvegarde locale complète (le Redmi dans le scénario actuel).
- Renforcement de l'envoi normal : comparaison de la révision et de l'empreinte distantes avant le remplacement.
- Mise à jour des déclarations TypeScript et des tests simulés du connecteur cloud.

## Vérifications exécutées

- Suite `npm run test:all` : réussie intégralement dans l'environnement de préparation.
- Tests de synchronisation : 8/8.
- Tests du connecteur cloud simulé : réussis, y compris empreinte canonique et réparation conditionnelle.
- Audit contenu : 120 chapitres, 120 ressources dédiées, 2 405 QCM, 3 600 flashcards, 1 200 exercices.
- Audit profondeur : moyenne 426 mots par cours, minimum 305 mots, aucun cours sous 300 mots.
- Audit intégrité QCM : 2 405 questions, aucun index invalide ni doublon de choix.
- Audit mobile : 48/48.
- Audit PWA : 12/12.
- Audit accessibilité statique : 11/11 heuristiques positives.
- Audit sauvegardes : 12/12.
- Audit stockage durable : 11/11.
- Audit calendrier : 8/8 tests unitaires et 10/10 contrôles statiques.
- Audit cohérence des versions : 8/8.

## Bloquants avant validation finale

1. Installer les dépendances dans le dossier du projet (`npm install`) ; elles ne sont pas incluses dans l'archive.
2. Générer et conserver `package-lock.json` dans l'environnement du projet.
3. Exécuter `npm run build` avec React, React DOM, Lucide, Vite, le plugin React et TypeScript du projet effectivement installés.
4. Tester le flux cloud sur le vrai projet Supabase : connexion, inspection, réparation depuis le Redmi, puis récupération sur le PC. Les tests inclus utilisent un serveur simulé et ne contactent pas Supabase.
5. Faire une vérification manuelle sur les appareils cibles et avec les réglages d'accessibilité usuels.

## Sécurité des données

Ne pas supprimer la ligne distante manuellement. Ne pas effectuer la réparation depuis le PC si le Redmi reste la copie locale de référence. Conserver les exports de sauvegarde du PC et du Redmi jusqu'à ce que la synchronisation réelle ait été validée sur les deux appareils. Ne jamais ajouter de clé `service_role` au client ou à GitHub Pages.
