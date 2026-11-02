# StudyFlow — plan de production pédagogique parallèle

Année cible : 2026-2027  
Base de travail : archive fournie `StudyFlow_V4.3.11_correction_syntaxe_stockage` (code interne `5.0.0`).

## Règle de production

Les matières avancent en rotation, par lots transversaux. On ne bloque pas toute la production sur une seule matière. Chaque lot prend un chapitre dans plusieurs matières, puis revient sur les matières au lot suivant.

Un chapitre n'est déclaré **couvert** que si une ressource dédiée est rattachée à son identifiant. Il n'est déclaré **validé pédagogiquement** qu'après contrôle de l'exactitude, des objectifs, du cours, des méthodes, des cartes, des QCM, des exercices corrigés et des sources officielles. Les seuils quantitatifs ne valent pas validation.

## État de départ mesuré par `scripts/audit-content.mjs`

- 120 chapitres au catalogue.
- 16 ressources dédiées existantes : 14 en Mathématiques spécialité, 1 en SES, 1 en Mathématiques expertes.
- 104 chapitres sans ressource dédiée.
- 0 ressource orpheline et 0 identifiant de ressource dupliqué.
- Les 16 ressources existantes ont au moins 30 flashcards, 20 QCM et 10 exercices. Le chapitre `maths-concentration` possède 21 QCM.
- L'audit est structurel et quantitatif ; il ne valide pas la vérité disciplinaire des contenus.

## Rotation des lots

Chaque lot doit faire avancer simultanément :

1. Enseignements communs : Philosophie, Histoire-Géographie, EMC, Enseignement scientifique, EPS.
2. Langues : Anglais, Espagnol, Allemand.
3. Spécialités : HGGSP, Mathématiques, Physique-Chimie, SVT, SES.
4. Options : Mathématiques expertes, Mathématiques complémentaires.

Les ressources déjà présentes en Mathématiques spécialité, SES et Mathématiques expertes restent dans le circuit de relecture et de validation, pendant que les nouveaux chapitres sont rédigés dans les autres matières.

## Fiche de validation par chapitre

- [ ] Programme et périmètre vérifiés pour 2026-2027.
- [ ] Objectifs d'apprentissage précis.
- [ ] Cours structuré, exact et adapté au niveau Terminale.
- [ ] Définitions, formules, dates, auteurs ou notions vérifiés selon la discipline.
- [ ] Méthodes et erreurs fréquentes.
- [ ] Fiches de révision synthétiques.
- [ ] Flashcards sans doublons et avec réponses exactes.
- [ ] QCM à choix et corrections vérifiés individuellement.
- [ ] Exercices progressifs avec corrections complètes.
- [ ] Sources institutionnelles ou références fiables indiquées.
- [ ] Audit technique réussi et statut éditorial mis à jour.

## Précautions de périmètre

- Les langues ne se réduisent pas à des listes de vocabulaire : intégrer compréhension, expression, interaction, médiation et axes culturels.
- L'EPS dépend en partie de la programmation et des activités retenues par l'établissement ; ne pas inventer une programmation locale.
- Les notions de philosophie constituent des entrées de réflexion, pas une liste de cours fermés ni des définitions à apprendre mécaniquement.
- Les chapitres transversaux de méthode doivent être identifiés comme tels et ne pas être présentés comme des thèmes officiels autonomes.

## Avancement — lot transversal 1 (1er novembre 2026)

- Philosophie : `philo-art` ajouté en brouillon avec cours structuré, 30 flashcards, 21 QCM, 10 exercices et fiche de révision. Source institutionnelle référencée.
- Les ressources préexistantes restent inchangées.
- Nouveau total mesuré : 17 ressources dédiées / 120 chapitres ; 103 chapitres sans ressource.
- Le lot n'est pas déclaré validé pédagogiquement : les références philosophiques, les distracteurs et les corrections doivent être relus par discipline.
- Prochaine rotation à produire : Histoire-Géographie (`hg-h1`), EMC (`emc-theme`), Enseignement scientifique (`es-climat`), Anglais (`en-reception`), puis spécialités Physique-Chimie (`pc-composition`), SVT (`svt-genetique`) et HGGSP (`hggsp-t1`).


## Avancement — lot transversal 2 (1er novembre 2026)

- Histoire-Géographie : `hg-h1` ajouté en brouillon. Le chapitre comprend 5 sections de cours, 30 flashcards, 20 QCM, 10 exercices corrigés et une fiche de révision.
- Les contrôles automatisés ont été relancés : 18 ressources dédiées, 102 chapitres sans ressource, aucun identifiant orphelin ou dupliqué.
- Tests smoke : réussis sur les 18 ressources et les fonctions applicatives contrôlées.
- La ressource d'histoire reste en brouillon : relecture des formulations historiques, dates, distracteurs et corrections nécessaire avant validation pédagogique.
- Prochaine rotation : EMC (`emc-theme`), enseignement scientifique (`es-climat`), anglais (`en-reception`), puis physique-chimie (`pc-composition`), SVT (`svt-genetique`) et HGGSP (`hggsp-t1`).
