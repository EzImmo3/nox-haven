# StudyFlow V5.0.48 — Conformité iCalendar

## Changements
- Corrige le champ `STATUS` des événements VEVENT : seules les valeurs adaptées à VEVENT sont utilisées (`CONFIRMED`).
- Préserve l'état terminé/non terminé via la propriété d'extension `X-STUDYFLOW-COMPLETED`.
- Neutralise les caractères de contrôle et séparateurs inattendus dans l'identifiant UID, tout en conservant un identifiant stable.
- Renforce les tests statiques du format calendrier.

## Vérifications
- Tests ciblés calendrier : 8/8.
- Audit calendrier : 10/10.
- Revue globale : 10/13 commandes réussies.
- Build de production : non validé. Il reste des erreurs TypeScript dans les données pédagogiques et les dépendances React/Vite ne sont pas installées dans cet environnement.

Les audits statiques ne remplacent pas l'import réel dans Google Calendar, Outlook ou Apple Calendar.
