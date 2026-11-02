# StudyFlow V5.0.45 — Santé du stockage

## Fonctionnalités
- Ajout dans Paramètres & données d'une vérification de l'espace utilisé et du quota estimé via `navigator.storage.estimate()`.
- Affichage de l'état de persistance via `navigator.storage.persisted()`.
- Demande de persistance via `navigator.storage.persist()` lorsque le navigateur ne l'a pas encore accordée.
- Retour utilisateur accessible avec `role="status"` et présentation adaptée aux petits écrans.
- Conservation de l'export manuel JSON et de son contrôle SHA-256.

## Contrôles
- Nouvel audit `npm run audit:storage-health` (8/8 contrôles statiques).
- Audit de livraison étendu à 11 contrôles.
- Smoke tests, audit contenu, plateforme, PWA, sauvegardes et sécurité exécutés.

## Limites connues
- La persistance est soumise à la décision du navigateur et n'est pas garantie.
- Les estimations d'espace sont indicatives.
- La compilation complète n'est pas validée dans cet environnement : dépendances React/Vite absentes et erreurs TypeScript préexistantes dans les ressources.
- Le biais de position des QCM (61,9 % en A), les 4 ressources avec moins de 10 réponses indexées et les 53 explications courtes restent à traiter.
