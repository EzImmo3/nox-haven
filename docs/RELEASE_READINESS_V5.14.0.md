# Revue de livraison — NOX HAVEN 5.14.0

## Fonction livrée
Parcours local par chapitre : Cours, Fiches, Flashcards, Quiz, Exercices et Bac. Les fiches structurées et sujets originaux disponibles sont rendus depuis `ChapterResourceV4`. Les ressources manquantes restent explicitement signalées.

## Contrôles exécutés
- Audit contenu : 120 chapitres, 120 ressources dédiées, aucune ressource orpheline ou dupliquée, aucune erreur structurelle.
- Smoke tests : réussis.
- Mélange QCM : 14 assertions réussies, 24/24 permutations observées.
- Calendrier : 8/8.
- PWA : 12/12.
- Service Worker runtime : 11 assertions.
- Expérience mobile : 48/48.
- Accessibilité statique : 11/11 heuristiques positives.
- Sauvegarde : 12/12.
- Sécurité statique : 0 constat.
- Cohérence de version : 8/8.

## Blocage de certification
Le build TypeScript/Vite n'a pas pu être exécuté : les dépendances `node_modules` ne sont pas présentes dans l'environnement de livraison. Une tentative de génération du lockfile via npm a expiré. Le build doit être relancé après `npm install` dans un environnement avec accès au registre npm. Aucun succès de build n'est revendiqué.

## Limites fonctionnelles connues
- Les fiches personnelles restent dans leur espace global ; leur liaison et édition directement depuis un chapitre restent à faire.
- Les sujets de type Bac ne sont affichés que lorsque le chapitre dispose déjà d'un sujet original.
- La validation pédagogique et les tests sur appareils physiques restent nécessaires.
