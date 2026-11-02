# StudyFlow 4.0 — Modèle de contenu pédagogique

Ce document fixe le contrat de données commun à la bibliothèque. Il évite que chaque matière utilise un format différent et permet de relier les activités à la progression de l'élève.

## 1. Identité et traçabilité

Chaque ressource doit être rattachée à un `subjectId` et à un `chapterId` existants dans `curriculum.ts`. Elle doit également porter :

- `id` stable et unique ;
- `title` ;
- `schoolYear: "2026-2027"` ;
- `curriculumReference` : texte ou lien institutionnel précis ;
- `contentVersion` ;
- `reviewStatus: "draft" | "reviewed" | "verified"` ;
- `lastReviewedAt` et `reviewNotes` si nécessaire.

Un contenu `draft` ne doit jamais être présenté comme officiellement vérifié. `verified` signifie que le contenu a été contrôlé par rapport au programme et aux sources identifiées, pas qu'il est approuvé par le ministère.

## 2. Cours

Un cours de chapitre comprend :

- introduction et prérequis ;
- objectifs d'apprentissage observables ;
- sections ordonnées avec explications progressives ;
- définitions et notions essentielles ;
- exemples résolus ;
- démonstrations, raisonnements ou études de cas lorsque la discipline le demande ;
- méthodes détaillées ;
- erreurs fréquentes et moyens de les corriger ;
- synthèse de fin de cours ;
- références et limites du contenu.

Les cours doivent être rédigés avec un vocabulaire adapté au lycée, sans simplifier au point de rendre les notions inexactes.

## 3. Quiz

Cible par chapitre : 20 à 30 questions, réparties entre facile, intermédiaire et difficile. Chaque question contient :

- un énoncé autonome ;
- des choix ou une réponse attendue selon le format ;
- la réponse correcte ;
- une explication qui justifie la réponse ;
- une explication des distracteurs lorsque cela apporte une vraie valeur ;
- une compétence ou notion ciblée ;
- une difficulté ;
- une source ou un lien vers la section de cours.

Éviter les séries où seule une valeur numérique ou un nom change. Les questions doivent tester des capacités différentes : mémorisation, application, interprétation, raisonnement et transfert.

## 4. Flashcards

Cible par chapitre : 30 cartes distinctes. Champs : recto, verso, tags, notion, difficulté facultative et référence de cours. Chaque carte est liée au système de répétition espacée commun : date d'échéance, intervalle, facilité, répétitions, oublis et date de dernière révision. Les réponses « difficile », « à revoir » et « maîtrisé » doivent déclencher une planification cohérente et être conservées dans les données personnelles.

## 5. Exercices

Cible par chapitre : 10 exercices progressifs. Chaque exercice comprend :

- énoncé et données nécessaires ;
- niveau de difficulté ;
- durée indicative facultative ;
- compétences visées ;
- correction détaillée étape par étape ;
- critères de réussite ou barème lorsque pertinent ;
- erreurs fréquentes et conseils de méthode.

La correction ne doit pas se limiter au résultat final : elle doit montrer le raisonnement attendu.

## 6. Sujets complets par matière

Cible : 5 à 10 sujets originaux par matière ou parcours d'évaluation. Un sujet comprend un format d'épreuve, une durée indicative, des consignes, les documents nécessaires ou des données originales, des questions, un barème, un corrigé détaillé et des critères de réussite.

Les formats doivent correspondre aux épreuves réellement applicables à la session visée. Pour les matières sans épreuve écrite nationale classique (par exemple EPS), créer des évaluations adaptées et explicitement présentées comme entraînements, sans inventer une épreuve officielle.

Ne pas reproduire intégralement des sujets protégés ou des documents sous droits. Préférer des sujets originaux, des données créées pour l'entraînement et des documents du domaine public ou correctement référencés.

## 7. Progression et maîtrise

Les réponses aux quiz, exercices et flashcards alimentent un historique local. La maîtrise d'un chapitre ne doit pas dépendre du seul temps passé : elle doit être calculée à partir d'activités réellement terminées, de la réussite et de la rétention dans le temps. Les règles de calcul doivent être explicites et stables.

## 8. Contrôles automatiques avant publication

- chaque identifiant de chapitre existe dans le catalogue ;
- chaque identifiant de ressource est unique ;
- chaque chapitre déclaré complet possède un cours, 20–30 quiz, 30 flashcards et 10 exercices ;
- chaque question possède une correction explicative ;
- chaque exercice possède une correction détaillée et des compétences ;
- chaque ressource possède une référence et un statut de vérification ;
- les sujets possèdent consignes, barème et corrigé ;
- aucune ressource n'est marquée complète si un élément requis manque ;
- les mises à jour du contenu ne réinitialisent jamais les données personnelles.

## Contrôle automatisé du contenu

Le dépôt inclut désormais `npm run audit:content` (script `scripts/audit-content.mjs`). Il vérifie :
- le nombre et l’unicité des identifiants de chapitres du catalogue ;
- l’absence de ressources rattachées à un identifiant inconnu ;
- la couverture réelle des ressources par chapitre ;
- les écarts par rapport aux objectifs éditoriaux : 30 flashcards, 20 questions de quiz et 10 exercices par chapitre.

Les seuils sont des objectifs de publication, pas des données à simuler. Le script signale les écarts sans fabriquer de contenu et renvoie un code d’erreur pour les incohérences d’identifiants.

## Contrat technique ajouté au code

Le fichier `src/contentModel.ts` formalise désormais les objets éditoriaux suivants :

- `ContentSource` : référence traçable avec éditeur, date de consultation et catégorie de source ;
- `RevisionSheet` : fiche structurée par objectifs, sections, essentiels et erreurs fréquentes ;
- `MockExam` : sujet original avec consignes, documents, barème, compétences, corrigé détaillé et grille d'évaluation ;
- `ChapterLearningPackage` : paquet complet rattaché à une matière, une année, un statut éditorial et une durée indicative.

La fonction `validateChapterResource` contrôle les seuils minimaux (30 cartes, 20 questions, 10 exercices), les réponses de QCM, les explications et les corrections. Les champs supplémentaires du modèle historique `ChapterResource` sont optionnels afin de préserver la compatibilité avec les trois ressources déjà présentes.

**Règle de publication :** un contenu au statut `published` devra avoir des sources vérifiées et avoir passé les contrôles de fond et de forme. Un contrôle automatique ne remplace pas une relecture disciplinaire.

## 9. Contrat TypeScript V4

Le fichier `src/contentTypes.ts` formalise désormais les types partagés : sources institutionnelles traçables, sections de cours, questions de quiz, cartes, exercices, fiches de révision et sujets blancs. Les sujets blancs portent explicitement `isOfficialSubject: false` afin de ne jamais les confondre avec une épreuve officielle. Les ressources peuvent aussi déclarer un état éditorial (`draft`, `reviewed`, `validated`).

Les champs ajoutés aux ressources sont optionnels pendant la migration afin de préserver les trois modules déjà présents et les sauvegardes des élèves. Une ressource ne doit toutefois pas être publiée comme validée tant que les références, les volumes et les corrections n'ont pas été contrôlés.
