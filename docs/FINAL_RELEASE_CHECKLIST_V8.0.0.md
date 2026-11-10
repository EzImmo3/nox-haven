# Checklist de livraison — NOX HAVEN 8.0.0

## Fonctionnalités

- [x] Simulateur du Bac 2027 et outils Grand Oral.
- [x] Mode Focus & énergie, historique des séances et bilan facultatif.
- [x] Progression par matières actives et maîtrise du programme.
- [x] Rappels contextualisés à partir des données existantes.
- [x] Error Boundary et mise en page d’impression/PDF.
- [x] Navigation clavier, recherche rapide accessible et améliorations mobiles.
- [x] Stockage local prioritaire, sauvegarde vérifiée et gestion explicite des conflits cloud.

## Contrôles exécutés dans l’environnement de préparation

- [x] `npm run test:all` — terminé avec code de sortie 0.
- [x] 120 ressources du programme, aucune ressource orpheline ou manquante.
- [x] 2 405 QCM : 0 index invalide, 0 doublon de choix, 0 explication sous 25 caractères.
- [x] 3 600 flashcards et 1 200 exercices recensés par l’audit pédagogique.
- [x] Audit de profondeur des cours : 120 chapitres, moyenne 426 mots, minimum 305 mots.
- [x] Sauvegarde : 12/12 contrôles ; stockage : 8/8 contrôles.
- [x] PWA : 12/12 contrôles ; Service Worker : 11 contrôles.
- [x] Expérience mobile : 48/48 contrôles.
- [x] Accessibilité : 11/11 heuristiques et 10/10 contrôles avancés.
- [x] Sécurité statique : 0 constat à examiner sur 32 fichiers.
- [x] Cohérence des versions : 8/8 contrôles.

## Validation externe encore nécessaire

- [ ] Installer les dépendances npm dans un environnement réseau fonctionnel. L’archive n’embarque ni `node_modules` ni `package-lock.json` ; `npm install` doit créer le fichier de verrouillage.
- [ ] Exécuter `npm run build` et corriger tout diagnostic qui subsisterait après installation des dépendances.
- [ ] Exécuter `npm run audit:release` après installation ; le diagnostic actuel est bloqué par l’absence des dépendances React/Vite et du lockfile.
- [ ] Vérifier l’interface réelle sur PC et téléphone, en mode connecté et hors ligne.
- [ ] Effectuer un essai Supabase réel avec le compte de test, sans remplacer une sauvegarde existante avant d’avoir vérifié la copie de référence.
- [ ] Vérifier l’export et la restauration d’une sauvegarde sur une copie de test.

## Commandes Windows PowerShell

Depuis le dossier racine `nox-haven` :

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run test:all
npm.cmd run audit:release
```

## Protection des données et publication

Aucune donnée utilisateur n’est incluse dans cette archive. Aucun compte Supabase réel n’a été contacté pendant les tests automatisés. Aucun dépôt GitHub, déploiement GitHub Pages ou snapshot cloud n’a été modifié lors de cette préparation.
