# Architecture de synchronisation — V5.13.0

## Modèle de snapshot

Un snapshot suit le protocole `1` et contient `accountId`, `deviceId`, `revision`, `parentRevision`, `updatedAt`, `checksum` (SHA-256 hexadécimal) et `payload`.

## Règles de décision

1. Une copie distante absente : proposer l'envoi de la copie locale.
2. Empreintes identiques : aucune action.
3. Une seule copie a progressé depuis `lastSyncedRevision` : proposer l'envoi ou le téléchargement correspondant.
4. Les deux copies ont progressé : conflit explicite ; aucune donnée n'est écrasée.
5. Les comptes diffèrent ou le snapshot est invalide : rejeter l'échange.

## Contrat attendu du futur backend

- API HTTPS uniquement ; authentification par session/tokens courts et révocables.
- Autorisation côté serveur sur chaque ressource (un utilisateur ne lit/écrit que ses snapshots).
- Révisions atomiques avec contrôle de concurrence (ETag/If-Match ou équivalent).
- Limites de taille, validation de schéma, journalisation minimale et limitation de débit.
- Suppression/export des données du compte et politique de rétention documentées.
- Ne jamais considérer un checksum comme un chiffrement ou une preuve d'identité.

## Étapes encore nécessaires

Choisir et configurer un fournisseur backend, implémenter l'authentification, les endpoints, le stockage distant, la file d'attente hors ligne, la reprise réseau, la résolution UI des conflits, les tests multi-appareils et les tests de sécurité. Les secrets de service doivent rester côté serveur ; aucune clé privilégiée ne doit être embarquée dans le bundle web.
