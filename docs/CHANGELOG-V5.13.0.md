# NOX HAVEN 5.13.0 — Fondations de synchronisation

## Ajouts
- Définition d'un format de snapshot versionné avec compte, appareil, révision, parent, date, empreinte et contenu.
- Validation stricte des snapshots entrants.
- Décision de synchronisation prudente : upload, download, inchangé ou conflit.
- Refus explicite des snapshots appartenant à des comptes différents.
- Détection des modifications concurrentes sans écrasement silencieux.
- Génération d'un identifiant d'appareil avec `crypto.getRandomValues`.
- Ajout de 8 tests automatisés du protocole.

## Limites non résolues
- Pas de backend, d'authentification, de synchronisation réseau, de chiffrement cloud ni d'interface de gestion des appareils.
- Pas de build de production validé : l'installation npm a dépassé le délai disponible et le lockfile reste absent.
- La fusion automatique champ par champ est volontairement exclue : le modèle actuel n'offre pas encore de journal de modifications fiable pour chaque entité.
