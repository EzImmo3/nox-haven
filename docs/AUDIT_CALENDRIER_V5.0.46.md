# Export calendrier — StudyFlow 5.0.46

**8/8** contrôles statiques positifs.

- OK — Conteneur iCalendar conforme
- OK — Séances exportées sur leur date sans inventer d’horaire
- OK — Fin de journée exclusive calculée au lendemain
- OK — Titre, matière, chapitre et durée exportés
- OK — Caractères iCalendar échappés
- OK — Téléchargement .ics déclenché depuis le planning
- OK — Export désactivé sans séance
- OK — Le modèle de séance conserve date et durée

## Limites
- Audit statique : il ne remplace pas un essai d’import dans Google Calendar, Outlook, Apple Calendar ou un calendrier Android.
- Les séances sont exportées comme événements sur la journée entière : l’application ne connaît pas d’heure de début.
- Le calendrier exporté est un instantané ; les changements ultérieurs dans StudyFlow nécessitent un nouvel export.
