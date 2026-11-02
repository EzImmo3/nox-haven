# Audit PWA — StudyFlow 5.3.0

- OK — manifeste JSON lisible
- OK — nom court adapté au lanceur mobile
- OK — mode standalone
- OK — scope et démarrage relatifs
- OK — langue française déclarée
- OK — icône 192 présente
- OK — icône 512 présente
- OK — cache versionné
- OK — nettoyage des anciens caches StudyFlow
- OK — repli hors ligne sur index mis en cache
- OK — limitation aux requêtes GET
- OK — exclusion des requêtes cross-origin

## Icônes
- ./icons/icon-192.png (192x192) : 3310 octets
- ./icons/icon-512.png (512x512) : 9350 octets

## Limites
- Audit statique : aucun test réel sur Android, iOS ou navigateur de bureau.
- La disponibilité hors ligne dépend des pages et ressources effectivement mises en cache après une première visite.
- La synchronisation cloud multi-appareils et la publication publique ne sont pas fournies par cet audit.
