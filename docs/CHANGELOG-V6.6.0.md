# NOX HAVEN V6.6.0 — Cockpit et performances

## Cockpit
- Ajout d’une priorité quotidienne calculée à partir des flashcards dues, des erreurs non maîtrisées et de la progression des chapitres.
- Ajout direct d’une suggestion au planning réel, avec matière, chapitre, date et durée estimée.
- Affichage de l’objectif hebdomadaire et du nombre de séances accomplies sur le cockpit.
- Le minuteur Deep Work de V6.5 est intégré à l’historique des séances.

## Performances et expérience mobile
- Chargement à la demande du catalogue de ressources pédagogiques : le gros module des 120 chapitres n’est plus importé statiquement au démarrage.
- Les ressources sont chargées lors de l’ouverture de Bibliothèque, Révisions ou Entraînement.
- État de chargement, gestion d’erreur et possibilité de réessayer.
- Le service worker conserve en cache les chunks chargés pour les visites hors connexion suivantes.

## Limites de validation
- Les tests automatisés et audits statiques passent dans l’environnement de préparation.
- Le build complet TypeScript/Vite n’a pas pu être lancé ici : l’environnement n’a pas accès au registre npm pour installer les dépendances.
- Aucun projet Supabase n’a été configuré ni aucune clé demandée. L’intégration cloud reste volontairement en attente de la séance de configuration conjointe.
