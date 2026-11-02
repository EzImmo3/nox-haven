# StudyFlow V4.3.7 — Enrichissement du schéma de Bernoulli

## Ajouts
- Le chapitre `maths-bernoulli` comprend désormais 30 flashcards, 20 QCM avec explications et 10 exercices corrigés.
- Ajout d'une fiche de révision et d'un sujet d'entraînement original avec barème et correction.
- Les notions travaillées couvrent la définition d'une épreuve de Bernoulli, l'indépendance, la constance du paramètre, les arbres pondérés, les chemins et l'événement contraire.

## Vérifications
- `node scripts/audit-content.mjs` : réussi, aucune erreur structurelle.
- `node scripts/smoke-test.mjs` : échoue encore sur `maths-binomial`, qui ne possède pas encore les 30 flashcards exigées.
- Build TypeScript/Vite : non exécuté dans cet environnement.
- Le chapitre reste en statut éditorial `draft` : la validation pédagogique humaine finale reste nécessaire.
