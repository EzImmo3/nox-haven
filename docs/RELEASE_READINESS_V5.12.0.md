# Revue de préparation de livraison — NOX HAVEN 5.12.0

**16/19** commandes terminées sans erreur ; **3** à examiner.

- À EXAMINER — Diagnostic environnement projet (`doctor`)
- À EXAMINER — Cohérence du manifeste et des dépendances (`audit:manifest`)
- OK — Cohérence des versions (`audit:version`)
- OK — Catalogue pédagogique (`audit:content`)
- OK — Audit pédagogique approfondi (`audit:pedagogy`)
- OK — Tests de fumée (`test:smoke`)
- OK — Tests de mélange des QCM (`test:quiz-shuffle`)
- OK — Tests du cycle PWA (`test:pwa`)
- OK — Compatibilité PC/mobile (`audit:platform`)
- OK — Qualité des QCM (`audit:quality`)
- OK — Intégrité des QCM (`audit:quiz-integrity`)
- OK — Sécurité statique (`audit:security`)
- OK — PWA (`audit:pwa`)
- OK — Accessibilité (`audit:accessibility`)
- OK — Sauvegardes (`audit:backup`)
- À EXAMINER — Diagnostic TypeScript (`audit:typescript`)
- OK — Santé du stockage (`audit:storage-health`)
- OK — Export du planning vers calendrier (`audit:calendar`)
- OK — Tests du format iCalendar (`audit:calendar-unit`)

## Interprétation

Un contrôle réussi indique uniquement que le script correspondant a terminé sans erreur. Les audits statiques ne remplacent pas les tests de navigateur, les essais sur appareils ni une validation pédagogique humaine.

## Détails des commandes

### Diagnostic environnement projet

```text
> nox-haven@5.12.0 doctor
> node scripts/project-doctor.mjs

DIAGNOSTIC PROJET 5.12.0 — 0/6 dépendances principales présentes.
ABSENTE react: déclaré ^18.3.1, installé non
ABSENTE react-dom: déclaré ^18.3.1, installé non
ABSENTE lucide-react: déclaré ^0.468.0, installé non
ABSENTE vite: déclaré ^6.0.1, installé non
ABSENTE @vitejs/plugin-react: déclaré ^4.3.4, installé non
ABSENTE typescript: déclaré ~5.6.2, installé non
Fichier(s) de verrouillage : aucun
Les dépendances déclarées ne sont pas toutes présentes. Installer les dépendances depuis le dossier racine du projet, puis relancer npm run build. Ne pas interpréter les erreurs JSX/TS2307 comme des défauts de composants tant que React et ses types sont absents.
```

### Cohérence du manifeste et des dépendances

```text
> nox-haven@5.12.0 audit:manifest
> node scripts/audit-manifest.mjs

AUDIT MANIFESTE 5.12.0 — 13/14 ; 1 à corriger.
OK dependency:react: ^18.3.1
OK dependency:react-dom: ^18.3.1
OK dependency:lucide-react: ^0.468.0
OK dependency:vite: ^6.0.1
OK dependency:@vitejs/plugin-react: ^4.3.4
OK dependency:typescript: ~5.6.2
À CORRIGER lockfile:present: package-lock.json absent ou illisible
OK script:build: tsc -b && vite build
OK script:dev: vite
OK script:preview: vite preview
OK script:doctor: node scripts/project-doctor.mjs
OK script:audit:release: node scripts/audit-release.mjs
OK runtime:node: Node 22.16.0 (minimum projet 20)
OK runtime:npm: 10.9.2
```

### Cohérence des versions

```text
> nox-haven@5.12.0 audit:version
> node scripts/audit-version-coherence.mjs

COHÉRENCE DE VERSION 5.12.0 — 8/8
OK package-version (package.json)
OK manifest (public/manifest.webmanifest)
OK service-worker-cache (public/sw.js)
OK backup-export (src/App.tsx)
OK footer-version (src/App.tsx)
OK html-title (index.html)
OK readme-heading (README.md)
OK readme-changelog (README.md)
```

### Catalogue pédagogique

```text
> nox-haven@5.12.0 audit:content
> node scripts/audit-content.mjs

AUDIT NOX HAVEN 5.12.0
Chapitres catalogue : 120 (120 identifiants uniques)
Ressources dédiées : 120 · chapitres sans ressource : 0
Ressources orphelines : 0 · ressources dupliquées : 0

philo-art: 30 flashcards · 21 quiz · 10 exercices — base pédagogique présente
philo-langage: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-derivee: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-limites: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-suites: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-continuite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-croissance: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mexp-complexes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-log: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-primitives: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-integrales: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-espace: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-orthogonalite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-parametrique: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-bernoulli: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-binomial: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
maths-concentration: 30 flashcards · 21 quiz · 10 exercices — base pédagogique présente
maths-algo: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-h1: 30 flashcards · 23 quiz · 10 exercices — base pédagogique présente
emc-theme: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
es-climat: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-composition: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-evolution: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-etat-final: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-synthese: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-electricite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-mouvement: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-forces: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-fluides: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-energie: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-ondes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
pc-lumiere: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-commerce: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-chomage: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-finance: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-bonheur: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-verite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-justice: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-liberte: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-conscience: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-devoir: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-etat: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-inconscient: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-nature: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-raison: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-religion: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-science: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-technique: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-temps: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-travail: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t1: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t2: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t3: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t4: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t5: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-t6: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-h2: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-h3: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-h4: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-g1: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-g2: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-g3: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-g4: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
emc-espaces: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
emc-institutions: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
emc-information: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
emc-medias: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-europe: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-structure: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-ecole: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-mobilite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-travail: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-engagement: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-justice: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-environnement: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mexp-arithmetique: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mexp-graphes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mexp-algo: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-genetique: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-temps: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-plantes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-climat: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-comportement: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-muscle: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-stress: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
svt-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
es-energie: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
es-vivant: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
es-demarche: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
en-reception: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
en-production: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
en-interaction: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
en-axes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
en-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
espa-reception: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
espa-production: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
espa-interaction: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
espa-axes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
espa-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
de-reception: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
de-production: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
de-interaction: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
de-axes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
de-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
eps-moteur: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
eps-entrainement: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
eps-sante: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
eps-responsabilite: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
eps-culture: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
philo-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hg-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
hggsp-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
ses-methodes: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-modeles: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-suites: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-exponentielle: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-integration: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-proba: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-stat: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente
mcomp-algo: 30 flashcards · 20 quiz · 10 exercices — base pédagogique présente

Version UI / export / PWA : cohérente
Objectif de moyenne : présent
Contrôles structurels : aucune erreur détectée
```

### Audit pédagogique approfondi

```text
> nox-haven@5.12.0 audit:pedagogy
> node scripts/audit-pedagogy.mjs

AUDIT PÉDAGOGIQUE 5.12.0 — 120 chapitres · 405 QCM · 630 flashcards · 233 exercices
À relire : 87 explications courtes, 132 flashcards courtes, 0 doublons intra-chapitre.
```

### Tests de fumée

```text
> nox-haven@5.12.0 test:smoke
> node scripts/smoke-test.mjs

Smoke tests réussis : 120 ressources contrôlées, migration valide, session corrompue rejetée, bonus exclu ignoré, dates calendaires validées, 4 cas SM-2 vérifiés, moteur de maîtrise/recommandation, plans quotidien et hebdomadaire, préférences de durée persistables, bilan de charge hebdomadaire, bilan d’apprentissage, simulateur de note, stockage IndexedDB local-first et migration non destructive, configuration PWA en sous-répertoire, service worker, état de connexion accessible, dates de planning et navigation clavier, quiz chronométré, objectif hebdomadaire, série de révision, simulateur de moyenne générale et sauvegarde des préférences contrôlés, syntaxe TSX contrôlée.
```

### Tests de mélange des QCM

```text
> nox-haven@5.12.0 test:quiz-shuffle
> node scripts/test-quiz-shuffle.mjs

Tests mélange QCM : 14 assertions réussies ; 24/24 permutations observées sur 80 questions.
```

### Tests du cycle PWA

```text
> nox-haven@5.12.0 test:pwa
> node scripts/test-pwa.mjs

OK — worker enregistré au chargement
OK — scope PWA relatif
OK — worker versionné
OK — installation met en cache l’entrée
OK — activation nettoie les anciennes versions
OK — prise de contrôle après activation
OK — navigation hors ligne
OK — requêtes non-GET ignorées
OK — requêtes externes ignorées
OK — manifeste standalone
OK — icônes PWA déclarées
OK — manifeste relié au HTML
Tests PWA : 12/12 assertions réussies.
```

### Compatibilité PC/mobile

```text
> nox-haven@5.12.0 audit:platform
> node scripts/audit-platform.mjs

AUDIT PLATEFORME NOX HAVEN 5.12.0
OK — viewport mobile déclaré
OK — langue du document déclarée
OK — breakpoint mobile principal
OK — breakpoint petit écran
OK — cibles tactiles 44px
OK — respect des zones de sécurité mobile
OK — PWA en mode standalone
OK — portée PWA relative
OK — icônes PWA configurées
OK — Service Worker versionné
OK — Service Worker scoped
OK — enregistrement SW basé sur BASE_URL
OK — navigation clavier visible
OK — préférence mouvement réduit
OK — tables avec défilement horizontal local
OK — version export cohérente

Résultat : 16/16 contrôles statiques validés.
```

### Qualité des QCM

```text
> nox-haven@5.12.0 audit:quality
> node scripts/audit-quality.mjs

AUDIT QUALITÉ NOX HAVEN 5.12.0
Chapitres : 120 · ressources : 120 · QCM analysés : 2325
Répartition des réponses : A 61.9 % · B 14.6 % · C 12.3 % · D 11.2 %
À CORRIGER — 4 ressources ont moins de 10 réponses indexées dans les QCM.
À CORRIGER — Biais de position : 61.9 % des réponses correctes sont en première position.
Rapport écrit dans docs/AUDIT_QUALITE_V5.0.35.md
```

### Intégrité des QCM

```text
> nox-haven@5.12.0 audit:quiz-integrity
> node scripts/audit-quiz-integrity.mjs

Audit intégrité QCM 5.12.0: 2405 questions, 53 constats, 0 index invalides, 0 doublons de choix, 53 explications courtes.
```

### Sécurité statique

```text
> nox-haven@5.12.0 audit:security
> node scripts/audit-security.mjs

AUDIT SÉCURITÉ 5.12.0 — 13 fichiers analysés
OK — cache du service worker versionné
OK — navigation hors ligne avec repli cache
OK — manifest servi en mode standalone
OK — scope PWA relatif
OK — export de sauvegarde avec SHA-256
OK — import vérifie l’empreinte avant restauration
Constats à examiner : 0
```

### PWA

```text
> nox-haven@5.12.0 audit:pwa
> node scripts/audit-pwa.mjs

AUDIT PWA 5.12.0
OK — manifeste JSON lisible
OK — nom court adapté au lanceur mobile
OK — mode standalone
OK — scope et démarrage relatifs
OK — langue française déclarée
OK — icône 192 présente
OK — icône 512 présente
OK — cache versionné
OK — nettoyage des anciens caches applicatifs
OK — repli hors ligne sur index mis en cache
OK — limitation aux requêtes GET
OK — exclusion des requêtes cross-origin
Résultat : 12/12
```

### Accessibilité

```text
> nox-haven@5.12.0 audit:accessibility
> node scripts/audit-accessibility.mjs

Audit accessibilité : 11/11 heuristiques positives ; 0 à vérifier.
```

### Sauvegardes

```text
> nox-haven@5.12.0 audit:backup
> node scripts/audit-backup.mjs

AUDIT SAUVEGARDE 5.12.0 — 12/12
OK — Export versionné
OK — Empreinte SHA-256 à l’export
OK — Empreinte vérifiée avant import
OK — Format hexadécimal SHA-256 contrôlé
OK — Taille maximale du fichier contrôlée
OK — Fichier vide refusé
OK — Données validées avant confirmation
OK — Confirmation avant remplacement
OK — IndexedDB prioritaire
OK — Migration sans suppression immédiate des anciennes données
OK — Conflits inter-onglets signalés
OK — Validation des matières et notes
```

### Diagnostic TypeScript

```text
> nox-haven@5.12.0 audit:typescript
> node scripts/audit-typescript.mjs

Audit TypeScript : 1204 diagnostic(s), code de sortie 1.
environment: 1204
contentTyping: 0
applicationTyping: 0
other: 0
```

### Santé du stockage

```text
> nox-haven@5.12.0 audit:storage-health
> node scripts/audit-storage-health.mjs

AUDIT STOCKAGE 5.12.0 — 8/8
OK — API de stockage du navigateur utilisée
OK — Estimation de l’espace utilisé et du quota
OK — État de conservation persistante demandé
OK — Demande de conservation persistante
OK — Résultat expliqué dans les paramètres
OK — Résultat annoncé comme statut accessible
OK — Rapport de stockage stylé et intégré
OK — Export de sauvegarde conservé
```

### Export du planning vers calendrier

```text
> nox-haven@5.12.0 audit:calendar
> node scripts/audit-calendar-export.mjs

AUDIT CALENDRIER 5.12.0 — 10/10
OK — Conteneur iCalendar 2.0
OK — Séances exportées comme dates sans horaire inventé
OK — Fin exclusive calculée au lendemain
OK — Titre, matière, chapitre et durée exportés
OK — Caractères spéciaux et retours à la ligne échappés
OK — Lignes repliées à 75 octets UTF-8
OK — Dates impossibles rejetées
OK — Téléchargement .ics depuis le planning
OK — Export désactivé si aucune séance
OK — Statut VEVENT conforme et compatibilité VEVENT historique préservée
```

### Tests du format iCalendar

```text
> nox-haven@5.12.0 audit:calendar-unit
> node scripts/test-calendar-export.mjs

TESTS CALENDRIER — 8/8
OK — UTF-8 line folding
OK — RFC text escaping
OK — CRLF normalization
OK — Date validation
OK — Exclusive end date
OK — Invalid sessions excluded
OK — Safe stable event id
OK — Valid VEVENT status and completion extension
```
