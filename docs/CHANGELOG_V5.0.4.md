# StudyFlow V5.0.4 — correction et lot Enseignement scientifique

## Modifications
- Réparation de la structure de l'objet `CHAPTER_RESOURCES` autour de `es-climat`.
- Complétion de `es-climat` : 30 flashcards, 20 QCM et 10 exercices.
- Amélioration de l'audit de contenu : extraction des tableaux imbriqués avec prise en compte des crochets internes (notamment `choices` dans les QCM).
- Conservation du statut `draft` : la ressource doit encore être relue pédagogiquement.

## Contrôles
- Smoke tests : réussis sur 20 ressources.
- Audit structurel : 20 ressources reconnues, 100 chapitres sans ressource dédiée, 0 ressource orpheline et 0 identifiant dupliqué.
- L'audit met aussi en évidence trois problèmes préexistants à traiter : `maths-log` (flashcards/exercices sous le seuil), `maths-primitives` (flashcards sous le seuil) et des titres d'exercices dupliqués dans `maths-integrales`.
- Build complet non confirmé : les dépendances React/Vite ne sont pas installées dans l'environnement.
