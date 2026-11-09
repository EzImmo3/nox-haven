# Export calendrier — NOX HAVEN 7.1.0

**10/10** contrôles statiques positifs.

- OK — Conteneur iCalendar 2.0
- OK — Séances exportées comme dates sans horaire inventé
- OK — Fin exclusive calculée au lendemain
- OK — Titre, matière, chapitre et durée exportés
- OK — Caractères spéciaux et retours à la ligne échappés
- OK — Lignes repliées à 75 octets UTF-8
- OK — Dates impossibles rejetées
- OK — Téléchargement .ics depuis le planning
- OK — Export désactivé si aucune séance
- OK — Statut VEVENT conforme et compatibilité VEVENT historique préservée

## Limites
- Audit statique et tests de structure : ils ne remplacent pas des essais d’import sur Google Calendar, Outlook ou Apple Calendar.
- Les séances restent des événements sur la journée entière : aucune heure de début n’est connue.
- L’export est un instantané ; un nouvel export est nécessaire après modification du planning.
