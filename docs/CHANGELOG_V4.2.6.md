# StudyFlow V4.2.6 — Sauvegardes robustes

## Changements
- Export versionné `studyflow-backup` (format 1) incluant les données d'étude et les préférences utilisateur : profil, progression des chapitres, moyenne cible, objectif hebdomadaire, capacité quotidienne et thème.
- Empreinte SHA-256 calculée sur le contenu exporté.
- Vérification de l'empreinte avant toute restauration d'une sauvegarde versionnée ; un fichier altéré est rejeté avant modification de l'état de l'application.
- Compatibilité maintenue avec les anciens exports JSON non enveloppés.
- Révocation différée de l'URL Blob après le déclenchement du téléchargement.

## Limites connues
- Le contrôle SHA-256 requiert `crypto.subtle`, disponible dans les contextes sécurisés (HTTPS et localhost).
- La restauration applique les données dans l'état de l'application ; la persistance IndexedDB continue ensuite via les effets de sauvegarde existants. La validation complète dans un navigateur reste nécessaire.
- Cette version n'implémente pas encore de sauvegarde planifiée automatique ni de synchronisation distante.
