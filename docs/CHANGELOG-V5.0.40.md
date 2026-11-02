# StudyFlow V5.0.40 — Fiabilisation PWA

- Correction du nettoyage du cache : le service worker supprime désormais les anciens caches `studyflow-shell-v*`, y compris ceux des versions antérieures, au lieu de ne nettoyer que les caches portant le préfixe de la version courante.
- Ajout de `npm run audit:pwa` : contrôle du manifeste, des icônes réellement présentes, du scope, du mode standalone, du cache et des replis hors ligne.
- Génération des rapports JSON et Markdown dans `docs/`.
- Version synchronisée dans l'application, le manifeste et le service worker.

## Limites
Audit statique uniquement. Aucun test réel multi-navigateurs/appareils, aucune compilation de production validée et aucune synchronisation cloud.
