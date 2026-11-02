# StudyFlow V5.0.43 — Fiabilisation des sauvegardes

- Refus des fichiers de sauvegarde vides et limite d'import à 25 Mo.
- Validation du format hexadécimal de l'empreinte SHA-256 avant calcul.
- Message d'export clarifié : l'empreinte détecte les altérations, elle ne remplace pas une copie conservée ailleurs.
- Ajout d'un audit statique dédié aux sauvegardes et d'une procédure de récupération documentée.
- Compatibilité conservée avec les enveloppes versionnées existantes et les imports historiques acceptés par le modèle.

Les tests de restauration en navigateur, la compilation de production, le cloud et la synchronisation multi-appareils restent à valider ou à développer.
