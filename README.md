# NOX HAVEN 5.11.0 — Révise. Comprends. Progresse.

Version de l’application : **5.11.0**.

NOX HAVEN est un espace personnel d’apprentissage pour la Terminale : cours, matières et notes, fiches, flashcards, quiz, carnet d’erreurs, planning et suivi de progression. Son identité associe le calme de **Nox** (la nuit, en latin) à l’idée de refuge portée par **Haven**.

## Démarrer en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Pour tester le build de production :

```bash
npm run build
npm run preview
```

## Publier sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit automatiquement `dist/` et le publie sur GitHub Pages à chaque push sur `main`. Dans le dépôt GitHub, ouvrir **Settings → Pages** et choisir **GitHub Actions** comme source de déploiement.

Le projet utilise une base Vite relative (`./`) et un manifeste PWA à portée relative, adaptés à une publication dans un dépôt GitHub Pages tel que `https://<utilisateur>.github.io/nox-haven/`.

## Installation mobile et limites

Après la première visite en ligne, ouvrir le site dans Chrome sur Android puis choisir **Installer l’application** ou **Ajouter à l’écran d’accueil**. Le service worker met en cache l’entrée de l’application et les ressources GET same-origin visitées. Le mode hors ligne dépend donc du chargement préalable des ressources.

Les données restent locales à l’appareil (IndexedDB et préférences locales). **La synchronisation cloud et les comptes utilisateurs ne sont pas implémentés** : l’installation sur un deuxième appareil ne transfère pas automatiquement les données. Utiliser l’export/import de sauvegarde pour déplacer ses données.

## Données et compatibilité

Les identifiants de stockage historiques `studyflow_*` et le format `studyflow-backup` sont conservés volontairement afin de préserver la compatibilité avec les données et sauvegardes des versions précédentes. Ils ne correspondent plus au nom public de l’application.

## Contrôles

```bash
npm run build
npm run test:smoke
npm run test:pwa
npm run test:mobile
npm run audit:version
```

Les audits statiques ne remplacent pas un test réel sur Android, iOS et plusieurs navigateurs.
