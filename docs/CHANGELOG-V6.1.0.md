# NOX HAVEN V6.1.0 — Cloud readiness & recovery protocol

## Ajouts
- Schéma SQL Supabase complet pour les instantanés de sauvegarde.
- Isolation par compte via Row Level Security (RLS), avec politiques SELECT/INSERT/UPDATE/DELETE.
- Contrôle de taille serveur (10 Mo), validation du format d'empreinte et contraintes de révision.
- Lecture du snapshot distant ordonnée par date de mise à jour.
- Fonctions de diagnostic de configuration et de session côté adaptateur cloud.
- Guide de configuration cloud et règles de sécurité.
- Suite de tests cloud et protocole intégrée à `test:all`.

## Limites connues
- Aucun projet Supabase réel n'est fourni ou configuré par défaut.
- Les tests cloud utilisent un serveur simulé : ils ne prouvent pas la disponibilité d'un backend réel.
- La session est en mémoire et devra être renouvelée après fermeture complète de l'application.
- La synchronisation ne doit pas être considérée comme activée tant que les variables Vite, le SQL et un compte de test réel ne sont pas configurés.
