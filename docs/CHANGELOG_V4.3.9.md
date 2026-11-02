# StudyFlow V4.3.9 — Sommes de variables aléatoires et concentration

## Contenu enrichi
- 30 flashcards inédites couvrant linéarité de l'espérance, variance et covariance, sommes de Bernoulli et inégalité de Bienaymé-Tchebychev.
- 21 QCM avec réponses indexées et explications.
- 10 exercices progressifs avec corrections et compétences ciblées.
- Une fiche de révision structurée (résumé, formules, méthodes).
- Un sujet d'entraînement original de 50 minutes avec barème et correction détaillée.

## Vérifications
- `node scripts/audit-content.mjs` : réussi, aucune erreur structurelle.
- `node scripts/smoke-test.mjs` : s'arrête sur `maths-algo`, qui reste incomplet (10 flashcards, 6 QCM, 4 exercices). Les ressources antérieures et le chapitre concentration passent les contrôles de volume avant ce point.
- Build Vite/TypeScript non exécuté.
- Statut éditorial conservé à `draft` : relecture pédagogique finale encore nécessaire.
