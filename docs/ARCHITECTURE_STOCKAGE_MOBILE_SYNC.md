# StudyFlow — Architecture de stockage, mobilité et synchronisation future

Statut : décision d'architecture validée pour la suite du projet.
Périmètre : stockage local prioritaire, expérience PC et mobile de même importance, synchronisation distante reportée à une version ultérieure.

## 1. Décisions structurantes

1. StudyFlow reste **local-first** : toutes les fonctions essentielles doivent fonctionner sans compte et sans connexion.
2. Les données pédagogiques et personnelles sont destinées à être stockées dans **IndexedDB**, via une couche d'accès indépendante de l'interface.
3. `localStorage` est réservé aux préférences simples et non critiques (thème, petits réglages d'interface, indicateur d'onboarding). Il ne doit plus être la source principale des notes, fiches, flashcards, erreurs, sessions, tâches ou progression pédagogique.
4. Les mises à jour du code et du Service Worker ne doivent jamais exiger l'effacement du cache ou des données du navigateur.
5. L'architecture doit permettre d'ajouter ultérieurement une synchronisation sans remplacer les composants de l'interface ni changer le modèle métier.
6. PC et mobile sont des plateformes de première classe : mêmes fonctions essentielles, interface responsive et interactions adaptées au tactile comme au clavier.

## 2. Architecture cible

```text
Interface React (PC / mobile / PWA)
        |
        v
Services applicatifs et règles métier
        |
        v
Repository / couche d'accès aux données
        |                         \
        v                          v
IndexedDB local                 Adaptateur Sync (futur)
        |                          |
        v                          v
Migrations + validation         API + authentification (futur)
        |
        v
Import / export / sauvegardes locales

Service Worker : cache des ressources de l'application uniquement
```

### IndexedDB

Créer une base versionnée, par exemple `studyflow-db`, avec des magasins logiques séparés :
- `studyData` ou magasins normalisés pour matières, notes, fiches, flashcards, erreurs, sessions et tâches ;
- `chapterProgress` pour la progression de la bibliothèque ;
- `metadata` pour le schéma, les dates de migration et l'état de sauvegarde ;
- éventuellement `outbox` dans une phase ultérieure pour les changements à synchroniser.

Le choix entre un magasin agrégé et plusieurs magasins normalisés devra être arrêté pendant l'implémentation en tenant compte des relations, des transactions et de la simplicité des migrations. L'interface ne doit jamais appeler IndexedDB directement.

### Couche repository

Introduire des fonctions asynchrones typées, indépendantes de React, par exemple :
- `getStudyData()` ;
- `saveStudyData(data)` ;
- `getChapterProgress()` / `saveChapterProgress(progress)` ;
- `exportBackup()` / `validateBackup()` / `restoreBackup()` ;
- `runMigrations()`.

Les composants React consomment ces services via un hook ou un contexte de données. Ils ne connaissent ni les clés de stockage ni le schéma IndexedDB.

## 3. Migration sans perte depuis les versions actuelles

La migration doit être préparée et testée avant de basculer le stockage principal.

Ordre obligatoire :
1. Détecter les clés historiques `studyflow_data_v1`, `studyflow_chapter_progress_v1` et les préférences `studyflow_*` existantes.
2. Lire et valider les données historiques sans les supprimer.
3. Faire une sauvegarde temporaire vérifiable de la source historique.
4. Transformer les données avec des migrations explicites et versionnées.
5. Écrire les données converties dans IndexedDB dans une transaction.
6. Relire et vérifier les enregistrements écrits (comptages et invariants essentiels).
7. Marquer la migration comme terminée dans `metadata` uniquement après vérification.
8. Conserver les anciennes clés pendant plusieurs versions de transition ; ne les supprimer qu'après une période de compatibilité et une sauvegarde exportable.

La migration doit être idempotente : si l'application se ferme au milieu, le prochain lancement peut reprendre sans dupliquer ni perdre les données. En cas d'échec, StudyFlow doit rester en mode récupération et proposer export/restauration ; elle ne doit jamais remplacer silencieusement une sauvegarde invalide par des données vides.

## 4. Mises à jour et cache PWA

- Séparer strictement le cycle de vie du cache Service Worker de celui des données IndexedDB.
- Utiliser des noms de cache versionnés pour les ressources statiques et supprimer uniquement les anciens caches appartenant à StudyFlow.
- Prévoir une notification « Mise à jour disponible » et une activation contrôlée après accord ou à un moment sûr.
- Ne jamais appeler `indexedDB.deleteDatabase()` ni effacer `localStorage` dans le processus de mise à jour.
- Prévoir une stratégie de repli si un nouveau bundle ne peut pas démarrer : conserver la version précédente lorsque possible et surtout préserver les données.
- Vérifier le comportement sur hébergement en sous-répertoire, en HTTPS et en mode hors ligne.

## 5. Sauvegardes et récupération

- Export complet dans un format JSON versionné, avec date d'export et version de schéma.
- Validation stricte avant toute restauration.
- Restauration transactionnelle : soit tout le jeu de données est restauré, soit rien ne l'est.
- Sauvegarde de sécurité avant restauration ou migration majeure.
- Avertissement clair si le navigateur signale un quota ou un stockage indisponible.
- L'utilisateur doit pouvoir exporter ses données à tout moment ; ne pas présenter la synchronisation future comme une sauvegarde déjà disponible.

## 6. Synchronisation future (hors périmètre immédiat)

Préparer le modèle, sans construire maintenant un backend ni imposer un compte.

Principes à respecter dès la conception :
- identifiants stables générés côté client ;
- dates `createdAt` et `updatedAt` cohérentes ;
- version de schéma distincte de la version de l'application ;
- opérations de données isolées derrière le repository ;
- journal local des changements (`outbox`) à ajouter lorsque le service de synchronisation sera développé ;
- stratégie explicite de conflits (ne jamais appliquer un « dernier écrit gagne » sans prévenir pour des modifications concurrentes importantes) ;
- authentification, chiffrement en transit, règles d'accès et suppression de compte à concevoir avant toute mise en production.

La synchronisation devra être optionnelle et ne devra pas dégrader l'usage hors ligne.

## 7. Expérience PC et mobile à égalité

- Mise en page responsive avec navigation adaptée aux petits écrans.
- Contrôles tactiles confortables, sans supprimer les raccourcis clavier et la navigation accessible au PC.
- Flashcards, QCM, exercices, planning, notes et bibliothèque utilisables sur les deux formats.
- Aucun contenu essentiel ne doit dépendre du survol de la souris.
- États de chargement, d'erreur et de sauvegarde visibles ; indiquer clairement quand une modification est enregistrée.
- PWA installable depuis un navigateur compatible sur Android et ordinateur ; l'installation ne crée pas à elle seule de synchronisation entre appareils.
- Tester au minimum une largeur mobile étroite, une largeur tablette et un écran PC.

## 8. Feuille de route révisée

### Phase 0 — Sécurisation de l'architecture (avant l'expansion massive de la bibliothèque)
- Cartographier toutes les clés localStorage et toutes les données persistées.
- Définir le schéma IndexedDB et le repository.
- Implémenter migration historique idempotente, sauvegarde et restauration.
- Ajouter tests de migration depuis une vraie sauvegarde issue de la version actuelle.
- Basculer progressivement la persistance, sans perte de données.

### Phase 1 — Bibliothèque pédagogique
- Finaliser les ressources chapitre par chapitre, matière par matière.
- Conserver les ressources spécifiques séparées des données personnelles.
- Versionner le contenu pédagogique indépendamment des données utilisateur.
- Valider les cours, fiches, flashcards, QCM et exercices avant de marquer une ressource comme prête.

### Phase 2 — Parité PC / mobile et PWA
- Ajuster navigation, tableaux, formulaires, flashcards et exercices.
- Fiabiliser les mises à jour du Service Worker sans effacement des données.
- Vérifier installation et utilisation hors ligne sur Android et PC.

### Phase 3 — Synchronisation multi-appareils (version future)
- Choisir le backend et le modèle de compte.
- Ajouter l'outbox, la résolution de conflits et les contrôles de sécurité.
- Permettre l'activation/désactivation de la synchronisation.

### Phase 4 — Validation finale
- Tests de migration, mise à jour, restauration et absence de perte.
- Tests hors ligne et reconnexion.
- Tests PC, Android mobile et différents formats d'écran.
- Tests fonctionnels de la bibliothèque et des outils d'apprentissage.

## 9. Critères d'acceptation non négociables

- Une mise à jour de l'application ne demande jamais à l'utilisateur de vider le cache.
- Une mise à jour du Service Worker ne supprime jamais les données personnelles.
- Une migration échouée ne remplace jamais les données par un profil vide sans consentement.
- Les données historiques sont récupérables et exportables.
- Les fonctions essentielles restent utilisables hors ligne après une première visite complète.
- PC et mobile donnent accès aux mêmes fonctions essentielles.
- L'architecture permet d'ajouter une synchronisation future sans réécrire l'interface.
