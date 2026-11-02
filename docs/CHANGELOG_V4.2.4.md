# StudyFlow V4.2.4 — Stockage local-first

## Implémenté
- Ajout d'un adaptateur IndexedDB versionné (`studyflow-local`, base version 1) pour le document principal de progression.
- Chargement asynchrone avant affichage de l'espace utilisateur afin d'éviter qu'un état vide écrase les données existantes au démarrage.
- Migration automatique de `studyflow_data_v1` vers IndexedDB lors du premier lancement sur cette version.
- La clé localStorage historique n'est volontairement pas supprimée après migration : elle reste une copie de secours jusqu'à une future procédure explicite de nettoyage.
- Écriture transactionnelle du document principal dans IndexedDB.
- Repli sur le stockage historique si IndexedDB est indisponible, avec avertissement à l'utilisateur.
- Ajout de contrôles structurels dans les smoke tests pour la migration non destructive.

## Limites connues
- Les préférences simples et la progression des chapitres séparée restent dans localStorage à cette étape.
- La synchronisation multi-appareils n'est pas implémentée.
- Les écritures IndexedDB sont asynchrones ; une stratégie de file d'écriture et de gestion de conflits multi-onglets sera nécessaire avant la synchronisation distante.
- La compilation TypeScript/Vite n'a pas été exécutée dans l'environnement de préparation faute d'installation complète des dépendances. Elle doit être confirmée localement.
