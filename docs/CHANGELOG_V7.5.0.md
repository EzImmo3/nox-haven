# NOX HAVEN 7.5.0 — fiabilité et finitions

## Rappels intelligents
- Rappels des tâches en retard et prévues aujourd’hui.
- Rappels de flashcards arrivées à échéance.
- Rappels des erreurs qui ne sont pas encore maîtrisées.
- Échéances d’orientation dans les sept prochains jours.
- Calcul fondé uniquement sur les matières actives et les données enregistrées.
- Pas de notification système en arrière-plan : le centre de rappels apparaît dans le cockpit.

## Fiabilité
- Ajout d’un Error Boundary autour de l’application React.
- Écran de secours accessible avec réessai ou rechargement.
- Aucun effacement ni remplacement des données lors de la capture d’une erreur d’interface.

## Export et impression
- Feuille d’impression/PDF renforcée : suppression des commandes, marges papier, contraste et coupures de blocs.

## Configuration et validation
- Ajout du modèle `.env.example` avec placeholders non secrets.
- Tests unitaires des rappels et contrôles statiques de l’Error Boundary.
- Build complet et validation multi-appareils encore nécessaires avant publication.
