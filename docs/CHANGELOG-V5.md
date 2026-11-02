
## 2026-11-01 — Simulateur de prochaine note

- Ajout de `projectRequiredGrade` pour calculer la note nécessaire à une moyenne cible dans une matière à moyenne normale, en tenant compte des barèmes et coefficients déjà enregistrés ainsi que du prochain barème/coefficient.
- Le simulateur distingue une cible déjà atteinte, une cible atteignable et une cible impossible avec une seule prochaine évaluation.
- Ajout d'un accès « Simuler une note » sur les cartes des matières à moyenne normale, sans créer de note fictive ni modifier les données.
- Ajout de tests automatisés pour les trois situations et adaptation de l'affichage mobile.

## 2026-11-01 — Fiabilité PWA et déploiement en sous-répertoire

- Passage des chemins de build, du manifeste, des icônes et de l'enregistrement du service worker en chemins relatifs afin de prendre en charge un hébergement sous `/StudyFlow/` (GitHub Pages) comme un hébergement à la racine.
- Réécriture du service worker : navigation réseau d'abord avec fallback hors ligne sur la page de l'application, cache des ressources locales valides, nettoyage limité aux caches StudyFlow et absence de fallback HTML pour les fichiers JS/CSS manquants.
- Ajout d'un indicateur de connexion en ligne/hors ligne dans la barre supérieure, avec annonce accessible et présentation compacte sur mobile.
- Extension des smoke tests pour contrôler le manifeste, les chemins relatifs, le scope du service worker et l'indicateur de connexion.
- Validation stricte des dates de séances dans le formulaire : les dates calendaires impossibles sont refusées, pas seulement les chaînes mal formées.
- Renforcement de l'accessibilité clavier : focus visible, indication de la page active dans la navigation et respect de `prefers-reduced-motion`.
- Défilement horizontal de la navigation mobile pour éviter que les onglets débordent sur les petits écrans.

### Entraînement, objectifs et pilotage des résultats
- Ajout d'un mode QCM chronométré (5, 10, 15 ou 20 minutes) en complément du quiz libre, avec compte à rebours, verrouillage des réponses à l'expiration et enregistrement du résultat.
- Le mode chronométré est explicitement présenté comme un entraînement construit depuis les flashcards, et non comme un sujet officiel ou un examen blanc complet. Les véritables sujets blancs restent liés à la future bibliothèque pédagogique.
- Ajout d'un objectif hebdomadaire de séances réglable, d'une barre de progression et d'une série de jours de révision.
- Ajout d'un simulateur de moyenne générale par matière, note, barème et coefficient. La note simulée n'est jamais enregistrée dans les résultats réels.
- L'objectif hebdomadaire est inclus dans les sauvegardes JSON, restauré à l'import et remis à sa valeur par défaut lors d'une réinitialisation.
- Mélange des questions avec Fisher–Yates et correction de l'horodatage de début des sessions quiz.

## Bibliothèque pédagogique — première vague de spécialité mathématiques
- Ajout d'une ressource complète dédiée au chapitre `maths-limites` : cours structuré, objectifs, méthode, 30 flashcards, 20 QCM corrigés et 10 exercices progressifs corrigés.
- Ajout d'une ressource complète dédiée au chapitre `maths-derivee` : cours structuré, objectifs, méthode, 30 flashcards, 20 QCM corrigés et 10 exercices progressifs corrigés.
- Les deux ressources restent au statut éditorial `draft` : elles sont intégrées et contrôlées structurellement, mais doivent encore faire l'objet d'une relecture disciplinaire avant validation finale.
- Audit et smoke tests exécutés après intégration : 5 ressources dédiées détectées, aucune ressource orpheline ou dupliquée.

## V5.0.16 — Lot SES science économique

- Ajout de trois ressources dédiées : commerce international, chômage et crises financières.
- Chaque ressource comprend 5 sections de cours, 30 flashcards, 20 QCM expliqués, 10 exercices corrigés et une fiche de synthèse.
- Référencement du programme officiel Éduscol.
- Interface et architecture générale conservées ; version PWA et cache synchronisés.
