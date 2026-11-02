# StudyFlow V4.2.5 — Centralisation des préférences

## Modifications
- Les préférences de profil, la progression des chapitres, l'objectif de moyenne, l'objectif hebdomadaire, la capacité quotidienne et le thème sont désormais migrés vers IndexedDB.
- Les anciennes valeurs `localStorage` servent de source de migration si aucune préférence IndexedDB n'existe.
- La copie historique `localStorage` n'est pas supprimée : elle reste disponible comme filet de compatibilité et de récupération.
- Les préférences sont chargées avant de considérer les données principales comme prêtes, puis sauvegardées dans IndexedDB.
- Le stockage principal des notes, fiches, flashcards, erreurs, sessions et tâches reste dans le document StudyData IndexedDB.

## Limites connues
- Les clés historiques `localStorage` sont encore maintenues par compatibilité dans plusieurs interactions. IndexedDB est la source prioritaire après chargement.
- La synchronisation entre appareils n'est pas implémentée.
- La compilation TypeScript/Vite n'a pas pu être exécutée dans l'environnement de préparation faute d'installation complète des dépendances. Les audits de contenu et smoke tests Node passent.
