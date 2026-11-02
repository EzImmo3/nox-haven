# Plan de publication — StudyFlow

StudyFlow n’est pas encore déclarée prête pour une publication publique. Cette liste doit être entièrement validée avant mise en ligne.

## Bloquants avant publication

- [ ] Installer les dépendances avec un lockfile npm commité et reproductible.
- [ ] Corriger toutes les erreurs TypeScript et obtenir `npm run build` sans erreur.
- [ ] Exécuter `npm run audit:content`, `npm run test:smoke`, `npm run audit:platform`, `npm run audit:quiz-integrity`, `npm run audit:quality` et `npm run audit:security`.
- [ ] Faire relire les contenus disciplinaires par matière ; les ressources `draft` ne doivent pas être présentées comme validées.
- [ ] Tester installation, mise à jour et lancement hors ligne sur Android, iOS/Safari et ordinateur.
- [ ] Tester export, import, fichier corrompu, ancien format et récupération après fermeture inattendue.
- [ ] Ajouter une politique de confidentialité adaptée au service réellement publié.
- [ ] Définir le support, les signalements, les sauvegardes serveur et la procédure de réponse aux incidents si un backend est ajouté.
- [ ] Vérifier les licences des dépendances, les icônes, les textes et les ressources intégrées.

## Déploiement PWA

1. Construire le dossier `dist` avec une version validée.
2. Héberger `dist` sur un domaine contrôlé, en HTTPS.
3. Configurer les chemins de base et les règles de fallback SPA selon l’hébergeur.
4. Vérifier manifest, icônes, scope et service worker sur l’URL publique.
5. Effectuer un test de mise à jour depuis la version précédente et un test hors ligne après premier chargement.
6. Conserver l’archive ZIP et les rapports de validation de la version publiée.

## État actuel

Le produit reste local-first. Les comptes, la synchronisation inter-appareils, le stockage cloud et la publication publique ne sont pas implémentés. Ne pas annoncer ces capacités avant leur réalisation et leurs tests.
