# StudyFlow 4.1.0 — candidate de vérification

Cette archive est un état de travail destiné à une vérification conjointe. Elle ne doit pas être présentée comme la V4 pédagogique finale.

## Inclus

- Conservation du socle StudyFlow 4.0.2.
- Configuration initiale du programme et choix de la moyenne générale cible sur 20.
- Affichage de l'écart à l'objectif dans le cockpit et conseils de priorité à partir des matières notées.
- Sauvegarde et restauration JSON de l'objectif et de la progression des chapitres.
- Réinitialisation cohérente de l'objectif de moyenne.
- Catalogue de 120 chapitres et 15 entrées de matières/enseignements.
- Trois ressources pédagogiques spécifiques existantes.
- Modèle éditorial unifié et fonction de validation des ressources.
- Script `npm run audit:content` pour contrôler les identifiants, ressources orphelines et présence des principales structures.

## Ce qui reste incomplet

- 117 chapitres n'ont pas encore de ressource spécifique.
- Les trois ressources existantes comportent chacune 10 flashcards, 10 questions et 3 exercices : les seuils visés sont respectivement 30, 20 et 10.
- Les sources institutionnelles structurées, relectures disciplinaires et statuts de publication restent à compléter.
- Les sujets blancs complets par matière ne sont pas encore intégrés.
- Le fonctionnement hors ligne des contenus pédagogiques complets n'est pas encore garanti.

## Vérifications

- `npm run audit:content` : contrôle structurel local.
- `npm run build` : à exécuter après installation des dépendances. L'installation des dépendances a expiré dans l'environnement de préparation ; aucune compilation réussie n'est revendiquée dans cette candidate.

## Utilisation

```bash
npm install
npm run audit:content
npm run dev
```

Puis, pour vérifier la production :

```bash
npm run build
npm run preview
```
