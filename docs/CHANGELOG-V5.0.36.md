# StudyFlow V5.0.36 — Audit d'intégrité des QCM

## Ajouts
- Nouveau script `npm run audit:quiz-integrity` qui inspecte les QCM du catalogue.
- Contrôles des index de réponses, du nombre de choix, des choix vides ou répétés, des explications trop courtes et des énoncés répétés dans une même ressource.
- Export des résultats en JSON et Markdown dans `docs/`.
- Les réponses ne sont pas réordonnées automatiquement : l'association entre réponse correcte et explication est préservée.
- Version synchronisée dans l'interface, le manifeste, le Service Worker et les documents principaux.

## Vérifications réalisées
- Audit catalogue : 120 chapitres, 120 ressources, aucune ressource orpheline ou dupliquée.
- Audit plateforme : 16/16 contrôles statiques.
- Smoke tests : 120 ressources contrôlées, réussite.
- Audit QCM : 2 405 énoncés QCM détectés, dont 2 325 index de réponse analysés ; 0 index de réponse invalide ; 0 doublon de choix détecté ; 53 explications sous le seuil technique de 25 caractères à relire.

## Limites
Cet audit est structurel et heuristique. Il ne certifie ni la justesse disciplinaire des réponses, ni la qualité didactique des distracteurs, ni la conformité complète aux programmes. La compilation de production et les essais sur appareils physiques restent à effectuer.

## Compilation
La commande `npm run build` a été lancée mais n'a pas abouti dans cet environnement : les dépendances React/Vite ne sont pas installées et TypeScript signale également des incompatibilités de types préexistantes dans `chapterResources.ts` (notamment des tableaux fournis là où le modèle attend une chaîne, et inversement). Ces erreurs sont consignées comme chantier bloquant ; aucune compilation réussie n'est revendiquée.
