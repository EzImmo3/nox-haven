# NOX HAVEN 6.6.0 — Révise. Comprends. Progresse.

Version de l’application : **6.6.0**.

NOX HAVEN est un espace personnel d’apprentissage pour la Terminale : Bibliothèque de cours approfondis, espace Révisions (fiches et flashcards), espace Entraînement (quiz, QCM, exercices et sujets de Bac), notes scolaires, planning et suivi de progression. Son identité associe le calme de **Nox** (la nuit, en latin) à l’idée de refuge portée par **Haven**.

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

Le workflow `.github/workflows/main.yml` construit `dist/`, exécute les tests automatisés puis publie sur GitHub Pages à chaque push sur `main`. Le workflow `.github/workflows/quality.yml` contrôle aussi les branches de travail sans publier le site. Dans le dépôt GitHub, ouvrir **Settings → Pages** et choisir **GitHub Actions** comme source de déploiement.

Le projet utilise une base Vite relative (`./`) et un manifeste PWA à portée relative, adaptés à une publication dans un dépôt GitHub Pages tel que `https://<utilisateur>.github.io/nox-haven/`.

## Installation mobile et limites

Après la première visite en ligne, ouvrir le site dans Chrome sur Android puis choisir **Installer l’application** ou **Ajouter à l’écran d’accueil**. Le service worker met en cache l’entrée de l’application et les ressources GET same-origin visitées. Le mode hors ligne dépend donc du chargement préalable des ressources.

Les données sont d’abord enregistrées localement (IndexedDB et copie de secours). Lorsque les variables publiques `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` sont injectées à la compilation, l’interface Compte permet l’inscription, la connexion et une synchronisation manuelle avec Supabase. La synchronisation automatique en arrière-plan n’est pas implémentée. Le fonctionnement réel doit être validé avec le projet Supabase et deux appareils avant d’être considéré comme prêt. L’export/import reste disponible comme sauvegarde indépendante.

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

## Historique — V5.13.0 : fondations du protocole de synchronisation

Cette version prépare le protocole de synchronisation, sans activer de service cloud :

- chaque copie est décrite par un compte, un appareil, une révision, sa révision parente, une date et une empreinte SHA-256 ;
- les snapshots sont validés avant toute décision ;
- une seule copie modifiée depuis le dernier point commun peut être proposée à l'envoi ou au téléchargement ;
- si les deux appareils ont évolué, le protocole signale un conflit et interdit l'écrasement automatique ;
- un identifiant d'appareil aléatoire peut être généré avec l'API cryptographique du navigateur.

**État à l'époque de V5.13.0 :** cette version historique ne fournissait pas encore de compte ni de stockage distant. Les versions ultérieures ont ajouté un adaptateur Supabase et une interface de compte ; leur disponibilité réelle dépend de la configuration et des tests du projet Supabase.

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

## Historique — V6.1.0 : fondations de synchronisation cloud

- Adaptateur Supabase sans SDK supplémentaire : inscription, connexion, déconnexion, lecture et envoi de sauvegarde.
- Vérification d'intégrité SHA-256 des instantanés et contrôle de propriété du compte.
- Schéma SQL avec Row Level Security et politiques limitant chaque compte à ses propres données.
- Test d'intégration avec serveur simulé (`npm run test:cloud-sync`).
- Le stockage IndexedDB reste local-first et indépendant.

**État à l'époque de V6.1.0 :** l’adaptateur existait sous forme de fondation, sans activation de l’interface. Les versions ultérieures ont ajouté les écrans de compte et de synchronisation manuelle. Le test automatisé utilise un serveur simulé ; il ne valide pas à lui seul le projet distant.

## V6.1.0 — Sauvegarde durable mobile

- Double sauvegarde locale : IndexedDB et miroir localStorage horodaté.
- Restauration de la copie la plus récente au redémarrage.
- Préservation du profil validé même si l'application est arrêtée avant la fin d'une transaction IndexedDB.
- Sauvegarde d'urgence synchrone lorsque l'application passe en arrière-plan ou que la page est fermée.
- Récupération en mode localStorage si IndexedDB est indisponible ou endommagé.
- Demande de conservation persistante au navigateur lorsque cette API est disponible.
- Tests de durabilité dédiés et audit de sauvegarde renforcé.

**Limite :** la double sauvegarde protège les données sur le même navigateur/appareil. Elle ne remplace pas encore la synchronisation cloud multi-appareils. Une exportation régulière reste recommandée, notamment si l'utilisateur efface les données du site ou désinstalle l'application.

### Synchronisation cloud
Les deux scripts SQL du dépôt doivent rester cohérents. Le schéma de référence est `supabase/schema.sql`. Ne jamais utiliser la clé `service_role` dans le navigateur.


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
