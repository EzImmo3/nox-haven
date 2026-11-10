# NOX HAVEN 8.0.0 — version source finale

## Périmètre fonctionnel

- Simulateur du Bac 2027 et suivi Grand Oral.
- Séances Focus & énergie, avec historique, intention et bilan facultatif.
- Progression calculée sur les matières actives, maîtrise des chapitres et objectif de moyenne.
- Rappels contextualisés à partir des tâches, flashcards dues, erreurs ouvertes et échéances d’orientation.
- Protection d’interface par Error Boundary et feuille d’impression adaptée à l’export PDF.
- Navigation clavier, recherche rapide accessible, améliorations mobiles et respect de la préférence de réduction des animations.
- Stockage local prioritaire, sauvegardes vérifiées par SHA-256 et synchronisation cloud avec gestion explicite des conflits.

## Qualité et validation

- 120 ressources pédagogiques structurées ; 2 405 QCM, 3 600 flashcards et 1 200 exercices selon l’audit du catalogue.
- Correction des 23 explications de QCM trop courtes signalées par l’audit d’intégrité ; le contrôle échoue désormais automatiquement si ce défaut réapparaît.
- Tests unitaires et audits statiques intégrés dans `npm run test:all`.
- La suite `npm run test:all` a été exécutée dans l’environnement de préparation après mise à disposition du compilateur TypeScript : tous les contrôles inclus ont réussi.
- La compilation Vite complète n’a pas pu être certifiée ici : React, React DOM, lucide-react, Vite et le plugin React ne sont pas installés dans l’environnement de préparation et l’installation réseau n’a pas abouti.
- Les tests de synchronisation cloud utilisent un serveur simulé ; aucun compte Supabase réel n’a été contacté.
- Aucun déploiement GitHub Pages ni aucune modification de données locales ou cloud n’a été effectué.

## Validation à effectuer avant publication

Depuis la racine du projet :

```bash
npm install
npm run build
npm run test:all
npm run audit:release
```

Puis vérifier l’application sur PC et téléphone, y compris l’ouverture hors ligne, l’export/restauration d’une sauvegarde et une synchronisation Supabase réelle après avoir vérifié quelle sauvegarde contient les données de référence.

## Corrections finales de stabilisation

- Alignement du type partagé du simulateur Bac sur le modèle réellement produit par le moteur Bac 2027.
- Correction de l’affichage du nombre de séances renseignant l’énergie dans Focus.
- Suppression d’un import d’icône inutilisé.
- Renforcement de `test:all` : l’audit du contenu et l’intégrité des QCM sont désormais exécutés au début de la suite.
