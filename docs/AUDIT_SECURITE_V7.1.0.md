# Audit de sécurité statique — NOX HAVEN 7.1.0

Fichiers analysés : **30**

- OK — cache du service worker versionné
- OK — navigation hors ligne avec repli cache
- OK — manifest servi en mode standalone
- OK — scope PWA relatif
- OK — export de sauvegarde avec SHA-256
- OK — import vérifie l’empreinte avant restauration

Constats à examiner : **0**
- Aucun motif ciblé détecté.

## Limites
- Audit statique uniquement : ne prouve pas l’absence de vulnérabilité.
- Aucun test d’intrusion, dépendance ou serveur distant n’est couvert.
- Les données locales ne sont pas synchronisées ni sauvegardées dans le cloud.
