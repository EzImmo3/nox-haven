# Audit PWA — NOX HAVEN 6.2.0

- OK — manifeste JSON lisible
- OK — nom court adapté au lanceur mobile
- OK — mode standalone
- OK — scope et démarrage relatifs
- OK — langue française déclarée
- OK — icône 192 présente
- OK — icône 512 présente
- OK — cache versionné
- OK — nettoyage des anciens caches applicatifs
- OK — repli hors ligne sur index mis en cache
- OK — limitation aux requêtes GET
- OK — exclusion des requêtes cross-origin

## Icônes
- ./icons/nox-haven-192.png (192x192) : 47780 octets
- ./icons/nox-haven-512.png (512x512) : 302255 octets

## Limites
- Audit statique : aucun test réel sur Android, iOS ou navigateur de bureau.
- La disponibilité hors ligne dépend des pages et ressources effectivement mises en cache après une première visite.
- La synchronisation cloud multi-appareils et la publication publique ne sont pas fournies par cet audit.
