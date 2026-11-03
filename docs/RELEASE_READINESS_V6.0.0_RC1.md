# NOX HAVEN V6.0.0 — Release candidate 1

Date: 2026-11-02

## Included in this batch
- Harmonisation de la palette avec l'emblème NOX HAVEN : bleu nuit, bleu céleste et argent.
- Maintien d'un thème clair lisible et d'un thème sombre distinct.
- Métadonnées HTML et PWA mises à jour.
- Version package, pied de page, export de sauvegarde et cache Service Worker alignés sur 6.0.0.
- Conservation du fonctionnement local-first, des exports et de la navigation hors ligne.

## Validations exécutées
- Smoke tests : réussis (120 ressources vérifiées, migrations et cas de stockage contrôlés).
- Quiz shuffle : 14 assertions ; 24/24 permutations observées sur 80 questions.
- Calendrier : 8/8.
- PWA : 12/12.
- Service Worker runtime : 11 assertions.
- Mobile : 48/48.
- Protocole de synchronisation locale : 8/8.
- Cockpit : 8 assertions.
- Programme : 120/120 ressources ; 95 structures minimales ; 25 à revoir.
- Plateforme : 16/16.
- Accessibilité statique : 11/11 heuristiques positives.
- Cohérence de version : 8/8.
- Sauvegarde : 12/12.
- Stockage : 8/8.
- Sécurité statique : 0 constat dans les 13 fichiers analysés.

## Réserves bloquantes avant publication finale
- `package-lock.json` absent ; `npm ci` n'est pas encore reproductible.
- `npm install --ignore-scripts --no-audit --no-fund` a expiré dans l'environnement de préparation.
- `npm run build` échoue actuellement car React, Vite, leurs types et le plugin Vite ne sont pas installés. Le build TypeScript/Vite n'est donc pas validé.
- Audit de qualité pédagogique : 53 explications courtes ; 61,9 % des réponses QCM indexées sont en position A ; 4 ressources ont moins de 10 réponses indexées.
- 25 chapitres restent sous les minima éditoriaux, dont 12 chapitres de spécialité mathématiques et 7 de mathématiques complémentaires.
- La synchronisation multi-appareils via un serveur distant et des comptes authentifiés n'est pas implémentée. Le protocole local et le stockage local-first ne constituent pas une synchronisation cloud.
- Aucun test physique sur l'ensemble des appareils Android/iOS/tablettes/ordinateurs n'a été réalisé dans cet environnement.

## Statut
Release candidate visuelle et fonctionnelle statiquement contrôlée. **Pas une version finale certifiée pour production.** Ne pas annoncer le cloud sync comme actif.
