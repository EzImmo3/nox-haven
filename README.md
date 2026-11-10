# NOX HAVEN 8.0.0 — Révise. Comprends. Progresse.

Version de l’application : **8.0.0**.

NOX HAVEN est un espace personnel d’apprentissage pour la Terminale : Bibliothèque de cours approfondis, espace Révisions (fiches et flashcards), espace Entraînement (quiz, QCM, exercices et sujets de Bac), notes scolaires, planning et suivi de progression. Son identité associe le calme de **Nox** (la nuit, en latin) à l’idée de refuge portée par **Haven**.

> **État de livraison :** version source NOX HAVEN 8.0.0. Le périmètre fonctionnel essentiel est intégré et les tests automatisés indépendants passent. La compilation de production et les essais réels multi-appareils doivent encore être exécutés dans un environnement où les dépendances npm sont installées, avant toute publication.

Consulter [`docs/FINAL_RELEASE_CHECKLIST_V8.0.0.md`](docs/FINAL_RELEASE_CHECKLIST_V8.0.0.md) pour distinguer les contrôles automatisés réussis des validations locales et appareils encore nécessaires.

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

Les données restent locales à l’appareil (IndexedDB et préférences locales). L’interface de compte et l’adaptateur cloud sont présents, mais la synchronisation multi-appareils n’est pas active tant qu’un projet Supabase réel n’a pas été configuré et testé. L’export/import de sauvegarde reste le moyen de transfert disponible sans cloud.

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

## Synchronisation multi-appareils — V5.13.0

Cette version prépare le protocole de synchronisation, sans activer de service cloud :

- chaque copie est décrite par un compte, un appareil, une révision, sa révision parente, une date et une empreinte SHA-256 ;
- les snapshots sont validés avant toute décision ;
- une seule copie modifiée depuis le dernier point commun peut être proposée à l'envoi ou au téléchargement ;
- si les deux appareils ont évolué, le protocole signale un conflit et interdit l'écrasement automatique ;
- un identifiant d'appareil aléatoire peut être généré avec l'API cryptographique du navigateur.

**Limite importante :** aucun compte, serveur distant, stockage cloud, chiffrement de bout en bout ou écran de connexion n'est fourni à ce stade. La synchronisation réelle nécessitera un backend authentifié (API HTTPS, contrôle d'accès par compte, stockage distant, politique de conservation et tests de sécurité). Les données restent locales ; l'export/import reste le moyen de transfert utilisable aujourd'hui.

Test du protocole : `npm run test:sync`.


## Architecture pédagogique actuelle — V6.6.0

Les ressources sont séparées en trois espaces indépendants : Bibliothèque (cours approfondis uniquement), Révisions (fiches pédagogiques et flashcards) et Entraînement (quiz/QCM, exercices et sujets de Bac). Chaque espace est organisé par matière puis par chapitre. Les notes personnelles restent distinctes des fiches pédagogiques du programme. Les sujets de Bac créés pour l’application sont clairement marqués comme originaux et non officiels.


## Révision intelligente — V6.1.0

Le moteur de planification classe maintenant les besoins de révision selon une urgence explicable : les flashcards en retard gagnent en priorité avec leur ancienneté, les erreurs non commencées passent avant les erreurs déjà travaillées, et les chapitres sans historique ne sont pas présentés comme faibles. Le plan du jour trie les séances candidates avant d'appliquer sa limite, afin qu'un grand nombre de rappels ne masque pas systématiquement les autres besoins.

Le score est une aide à l'organisation, pas une mesure scientifique de maîtrise. Les recommandations reposent uniquement sur les cartes, erreurs et tâches réellement enregistrées.

## Cockpit personnalisé — V6.1.0

- Objectif de moyenne personnel modifiable depuis le cockpit (0 à 20, ou vide pour le retirer), sauvegardé dans les préférences locales.
- Historique mensuel des notes normales sur les six derniers mois ; les mois sans évaluation restent explicitement vides.
- Classement des matières selon les moyennes réellement enregistrées, avec nombre d'évaluations et poids.
- Tests unitaires du calcul de tendance, des performances par matière et de l'écart à l'objectif (`npm run test:dashboard`).
- Les tendances sont descriptives : elles ne prédisent pas les notes futures.

## V6.1.0 — Audit du programme

- Ajout d’un audit reproductible de la couverture du programme 2026–2027 par matière et chapitre.
- La bibliothèque distingue le nombre de ressources structurées de la validation pédagogique.
- Les limites de l’audit sont explicites : présence et volume ne prouvent pas l’exactitude disciplinaire.
- Commande : `npm run audit:curriculum`.


## NOX HAVEN V6.1.0 — finition visuelle

- Palette harmonisée avec l'emblème : bleu nuit, bleu céleste et argent.
- Métadonnées, version de sauvegarde et cache PWA alignés sur 6.1.0.
- Conservation du fonctionnement local-first et du mode hors connexion.
- La synchronisation multi-appareils distante reste à connecter à un service cloud authentifié ; elle n'est pas annoncée comme active dans cette version.

## V6.1.0 — Fondations de synchronisation cloud

- Adaptateur Supabase sans SDK supplémentaire : inscription, connexion, déconnexion, lecture et envoi de sauvegarde.
- Vérification d'intégrité SHA-256 des instantanés et contrôle de propriété du compte.
- Schéma SQL avec Row Level Security et politiques limitant chaque compte à ses propres données.
- Test d'intégration avec serveur simulé (`npm run test:cloud-sync`).
- Le stockage IndexedDB reste local-first et indépendant.

**Important :** le cloud n'est pas encore activé dans l'interface et aucun projet Supabase réel n'a été configuré. Voir `docs/CLOUD_SYNC_SETUP_V6.1.0.md` et `supabase/schema.sql` avant tout déploiement.

## V6.1.0 — Sauvegarde durable mobile

- Double sauvegarde locale : IndexedDB et miroir localStorage horodaté.
- Restauration de la copie la plus récente au redémarrage.
- Préservation du profil validé même si l'application est arrêtée avant la fin d'une transaction IndexedDB.
- Sauvegarde d'urgence synchrone lorsque l'application passe en arrière-plan ou que la page est fermée.
- Récupération en mode localStorage si IndexedDB est indisponible ou endommagé.
- Demande de conservation persistante au navigateur lorsque cette API est disponible.
- Tests de durabilité dédiés et audit de sauvegarde renforcé.

**Limite :** la double sauvegarde protège les données sur le même navigateur/appareil. Elle ne remplace pas encore la synchronisation cloud multi-appareils. Une exportation régulière reste recommandée, notamment si l'utilisateur efface les données du site ou désinstalle l'application.

### Synchronisation cloud (V6.1.0)
Consulte `docs/CONFIGURATION-CLOUD-V6.1.md` et exécute `supabase-schema.sql` dans ton projet Supabase avant de configurer `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`. Ne jamais utiliser la clé `service_role` dans le navigateur.


## V6.2.0 — Comptes et interface cloud

- Ajout d’une rubrique Compte & synchronisation avec inscription, connexion et déconnexion Supabase.
- Session cloud conservée au niveau de l’onglet via `sessionStorage` et renouvelée avec le jeton de rafraîchissement ; les jetons ne sont jamais affichés dans l’interface.
- Comparaison des révisions, envoi de sauvegarde et proposition explicite de restauration distante en cas de divergence.
- Identifiant d’appareil aléatoire conservé localement.
- La sauvegarde locale reste indépendante du cloud.

### Configuration nécessaire

1. Créer un projet Supabase personnel.
2. Exécuter `supabase-schema.sql` dans SQL Editor.
3. Renseigner `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` dans les variables d’environnement de compilation.
4. Ne jamais utiliser la clé `service_role` dans le navigateur.
5. Configurer les URL d’authentification Supabase pour le domaine GitHub Pages utilisé.

**Limites à cette étape :** la session est restaurée dans le même onglet navigateur, mais pas garantie après fermeture complète de l’onglet. La synchronisation distante doit être testée sur un vrai projet Supabase avant d’être considérée comme opérationnelle. Le build de production n’a pas pu être validé dans l’environnement de développement si les dépendances npm ne sont pas installées.


## V6.6.0 — Réorganisation pédagogique

- Bibliothèque limitée aux cours approfondis, objectifs, points-clés, méthodes et références.
- Nouvel espace Révisions regroupant fiches et flashcards par matière et chapitre.
- Nouvel espace Entraînement regroupant quiz/QCM interactifs, exercices corrigés et sujets originaux de type Bac.
- Navigation desktop et mobile réorganisée ; recherche et filtre par matière dans les deux espaces.
- Sources institutionnelles ajoutées aux 25 ressources qui n’en avaient pas ; correction d’une référence officielle d’histoire-géographie.
- Audit programme : 120/120 ressources répondent désormais aux minima structurels de l’audit. Cela ne vaut pas validation disciplinaire.
- Audit pédagogique : 2 405 QCM, 3 600 flashcards et 1 200 exercices recensés ; les explications courtes et réponses compactes ont été revues selon un audit qui distingue désormais les formules valides des réponses réellement incomplètes.
- Tests structurels de séparation des espaces : 10/10 assertions réussies.


## V6.6.0 — Entraînement et concentration

- QCM interactifs avec ordre de propositions stable et bilan enregistré dans les statistiques.
- Corrections d’exercices et de sujets accessibles à la demande.
- Minuteur Deep Work de 15 à 30 minutes avec pause, reprise, abandon et enregistrement d’une session terminée.
- Les sessions de concentration comptent dans le temps et la régularité, sans fausser les statistiques de cartes ou de réussite.


## V6.6.0 — Cockpit et performances

- Le cockpit affiche les priorités de révision du jour et permet de les ajouter au planning.
- L’objectif hebdomadaire est visible depuis l’accueil.
- Les ressources pédagogiques sont chargées à la demande afin d’alléger le chargement initial sur mobile et ordinateur.
- Les chunks pédagogiques sont conservés dans le cache du service worker après leur première consultation.

\n## Évolutions de la version 6.9.0\n\n- Les ressources pédagogiques sont maintenant réparties en modules indépendants par matière.\n- Seules les matières actives du profil sont chargées à l’ouverture de la Bibliothèque, des Révisions ou de l’Entraînement.\n- Les modules restent compatibles avec le cache dynamique du service worker pour les visites hors connexion après chargement.\n- Le fichier `src/chapterResources.ts` est conservé comme source éditoriale de référence pour les scripts d’audit et de maintenance ; il n’est plus importé à l’exécution par l’application.\n- La synchronisation Supabase reste à configurer et à valider sur un vrai projet avant toute annonce de disponibilité.\n
\n## Configuration Supabase (optionnelle)\n\nPour activer les comptes et la synchronisation, créer un projet Supabase, exécuter le schéma SQL fourni dans `supabase/schema.sql`, puis configurer les variables suivantes :\n\n- En local : copier `.env.example` vers `.env.local` et renseigner l’URL du projet ainsi que la clé publique `anon`/`publishable`.\n- Sur GitHub : dans **Settings → Secrets and variables → Actions**, créer les secrets `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`. Le workflow de déploiement les transmet au build Vite.\n\nLa clé `service_role` ne doit jamais être ajoutée à `.env.local`, aux secrets utilisés par le build web, ni au code client. Après configuration, vérifier l’inscription, la confirmation e-mail, la connexion, la déconnexion et la synchronisation entre deux appareils. Tant que ces essais réels ne sont pas passés, le cloud doit être considéré comme non validé.\n

## Évolutions de la version 6.9.0

- Le moteur de maîtrise précise désormais la fiabilité de son estimation et les données réellement prises en compte.
- Les dates de rappel ou de séance invalides sont ignorées au lieu d'être interprétées comme des échéances urgentes.
- Le planning hebdomadaire peut répartir jusqu'à 24 propositions, au lieu de s'arrêter artificiellement aux six premières.
- La recommandation du prochain chapitre affiche son niveau de fiabilité et son périmètre de données.
- Les suggestions restent indicatives : une absence de données n'est jamais assimilée à un échec scolaire ni à une maîtrise confirmée.


## Évolutions de la version 6.9.0

- Ajout d'un tableau de santé des révisions : cartes dues, cartes en retard, rappels des sept prochains jours, erreurs ouvertes et cartes consolidées.
- Les cartes dont la date de rappel est invalide sont signalées et exclues des échéances plutôt que de fausser les indicateurs.
- Les statistiques hebdomadaires ignorent les dates de session mal formées.
- Le calcul d'urgence reste numérique même lorsque des dates importées sont invalides.
- Ajout de 16 assertions exécutables sur le moteur de révision, intégrées à `npm run test:all`.

Les indicateurs restent descriptifs : ils reposent sur les cartes et erreurs réellement enregistrées et ne constituent pas une note scolaire ni une certification de maîtrise.


## Évolutions de la version 7.1.0

- Le cockpit présente désormais une progression détaillée par matière, triée pour faire ressortir les matières qui nécessitent le plus d’attention.
- Chaque matière affiche les chapitres maîtrisés, en cours et à travailler, ainsi que la couverture des ressources disponibles.
- Les indicateurs de révision affichent les cartes réellement dues et les erreurs non maîtrisées, sans assimiler une donnée absente à une réussite.
- Les indicateurs s’appuient sur les matières actives du profil et les statuts enregistrés par l’élève.
- La progression reste locale et sauvegardée avec les préférences existantes ; elle est également incluse dans le mécanisme de synchronisation cloud déjà prévu.


## Évolutions de la version 7.1.0

- Les bilans de quiz enregistrés depuis l’espace Entraînement conservent désormais le détail des réponses par chapitre et par matière.
- Les statistiques affichent les chapitres les plus évalués, leur taux de réussite et le nombre de sessions associées.
- Les anciennes sessions restent compatibles : elles continuent d’alimenter les indicateurs globaux sans être artificiellement attribuées à un chapitre.
- Les métadonnées de version, le titre et le cache PWA sont alignés sur 7.1.0.


## Évolutions de la version 7.3.0

- Ajout d’un espace Focus & énergie avec minuteur réglable, pause/reprise et bilan de séance.
- Enregistrement facultatif de la matière, de l’intention et du ressenti avant/après la séance.
- Historique et indicateurs calculés uniquement à partir des sessions réellement enregistrées.
- Recommandation de durée indicative selon l’énergie déclarée, sans imposer de rythme.
- Recherche rapide pilotable entièrement au clavier : flèches, Entrée, Échap et retour du focus.
- Métadonnées de session rétrocompatibles : les anciennes sessions restent valides.

## Évolutions de la version 7.4.0

- Le pourcentage global de maîtrise est désormais calculé uniquement sur les chapitres des matières actives du profil, et non sur tout le catalogue.
- Le cockpit distingue clairement les chapitres maîtrisés, en cours et à travailler ; le calcul du pourcentage est expliqué.
- Les pourcentages par matière restent visibles, avec les ressources disponibles, les cartes dues et les erreurs ouvertes.
- Le pourcentage vers l’objectif de moyenne dispose d’une barre accessible et d’une explication : c’est un indicateur de progression, pas une prédiction de la moyenne finale.
- Renforcement du confort tactile mobile, de la lisibilité des indicateurs et des repères d’accessibilité.
- Ajout de 17 assertions dédiées à la progression et à l’accessibilité.


## NOX HAVEN 7.5.0 — fiabilité et finitions

- Rappels contextualisés : tâches en retard ou prévues aujourd’hui, cartes dues, erreurs ouvertes et échéances d’orientation proches.
- Les rappels sont calculés uniquement depuis les données enregistrées et les matières actives ; aucune faiblesse ni activité n’est inventée.
- Error Boundary React : une erreur d’affichage est isolée avec une possibilité de réessai ou de rechargement, sans effacer les données.
- Impression et enregistrement PDF : mise en page dédiée, masquage des commandes et meilleure lisibilité sur papier.
- Modèle `.env.example` fourni avec des valeurs fictives ; aucune clé privée ou `service_role` n’est incluse.
- Les notifications en arrière-plan ne sont pas promises : les rappels sont visibles dans le cockpit lorsque l’application est ouverte.


## NOX HAVEN 7.6.0 — accessibilité avancée

- Audit complémentaire des repères, du lien d’évitement, du focus clavier, de la réduction des animations, des annonces dynamiques, des barres de progression, des images et des liens externes.
- 10 contrôles statiques automatisés ; ils ne remplacent pas un essai avec lecteur d’écran ni une mesure WCAG du contraste.

## NOX HAVEN 8.0.0 — version source finale

- Regroupement des fonctionnalités essentielles des versions 7.2 à 7.6.
- Vérification de cohérence de la version, de la configuration cloud, du stockage, des sauvegardes, du programme, des outils Bac et des expériences mobile/clavier.
- Les dépendances ne sont pas embarquées dans l’archive. Exécuter `npm install`, puis `npm run build` et `npm run test:all` avant publication.
- La validation réelle de la synchronisation Supabase et les essais sur PC/téléphone restent indispensables ; les tests cloud automatisés utilisent un serveur simulé.
