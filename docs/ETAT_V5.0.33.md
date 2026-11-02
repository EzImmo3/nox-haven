# État de consolidation — StudyFlow V5.0.33

Date : 2026-11-02
Base : archive V5.0.32_Methodes-MathsExpertes

## Modifications de cette livraison

- Harmonisation du numéro de version dans `package.json`, `index.html`, le manifeste PWA et le préfixe de cache du Service Worker.
- Réécriture du README pour qu'il décrive l'état réel du produit et ne présente plus les comptes ou la synchronisation comme des fonctions disponibles.
- Documentation explicite des limites hors ligne, du stockage local et de la validation pédagogique.

## Contrôles exécutés sur la base V5.0.32

- `node scripts/audit-content.mjs` : terminé avec code 0 ; 120 entrées catalogue et ressources dédiées comptabilisées par le script, sans anomalie structurelle signalée.
- `node scripts/smoke-test.mjs` : terminé avec code 0 ; scénarios de migration, moteur de révision, planning, sauvegarde locale, PWA et navigation clavier signalés comme réussis.
- `unzip -t` sur l'archive V5.0.32 : aucune erreur de compression.
- `node_modules` absent dans l'environnement : `npm run build` n'a pas été exécuté. La compilation de production reste donc non vérifiée.

## Limites qui empêchent de déclarer l'application terminée

1. Les ressources `draft` doivent être relues et validées matière par matière ; les audits actuels vérifient principalement la structure et les quantités.
2. Aucun compte utilisateur ni backend de synchronisation multi-appareils n'est intégré.
3. Pas de sauvegarde cloud ni de restauration distante.
4. Le cache hors ligne se constitue au fil de l'usage ; le téléchargement intégral et contrôlé des contenus n'est pas garanti.
5. La compatibilité doit encore être testée sur appareils physiques et navigateurs ciblés (PC Windows/macOS, Android, iOS/iPadOS).
6. Le build Vite/TypeScript doit être exécuté après installation des dépendances.
7. Avant ouverture publique, ajouter politique de confidentialité, règles de conservation/suppression, sécurité backend et procédures de sauvegarde adaptées aux utilisateurs mineurs.

## Critères de sortie pour la prochaine phase

- Build production réussi et reproductible.
- Tests responsive avec largeurs 360 px, 768 px, 1024 px et 1440 px.
- Test d'installation PWA et de mise à jour sans perte de données.
- Test hors ligne après première visite, puis après mise à jour du Service Worker.
- Relecture pédagogique et traçabilité des sources des ressources publiées.
- Choix et implémentation d'un backend avant toute promesse de synchronisation multi-appareils.

**Conclusion :** V5.0.33 est une livraison de consolidation documentaire et de cohérence de version, pas une déclaration de fin de projet. Les fonctionnalités cloud et la validation pédagogique restent des chantiers ouverts.
