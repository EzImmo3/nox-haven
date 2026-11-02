# StudyFlow 5.0.46 — Export du planning

## Nouveautés
- Ajout d'un export du planning au format iCalendar `.ics`, importable dans les calendriers compatibles.
- Chaque séance est exportée à sa date comme événement sur la journée entière : aucun horaire fictif n'est ajouté puisque StudyFlow ne stocke pas encore d'heure de début.
- Les événements contiennent le titre, la matière, le chapitre, la durée prévue et l'état de la séance.
- L'export est disponible depuis l'en-tête de l'onglet Planning et reste désactivé si aucune séance n'existe.
- Ajout de `npm run audit:calendar` et intégration à `npm run audit:release`.

## Fiabilité et limites
- Les valeurs textuelles iCalendar sont échappées ; la fin de l'événement est fixée au lendemain, conformément au modèle des événements de journée entière.
- Le fichier `.ics` est un instantané : après modification du planning, il faut l'exporter à nouveau.
- L'audit est statique et ne vaut pas validation d'import sur tous les calendriers et appareils.
