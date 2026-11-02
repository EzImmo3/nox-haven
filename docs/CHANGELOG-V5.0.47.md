# StudyFlow V5.0.47 — Fiabilisation de l’export calendrier

## Nouveautés
- Extraction de la génération iCalendar dans `src/calendar.ts` pour isoler la logique du composant React.
- Échappement des caractères spéciaux et normalisation des retours à la ligne selon le format TEXT d’iCalendar.
- Repli des lignes à 75 octets UTF-8 sans couper les caractères accentués.
- Validation stricte des dates calendaires ; les séances invalides ou de durée non positive sont exclues de l’export.
- Conservation d’identifiants stables, de la date de fin exclusive et de l’état des séances.
- Libération différée de l’URL Blob après le déclenchement du téléchargement.
- Synchronisation des versions de l’interface, du manifeste, du service worker et des sauvegardes sur 5.0.47.

## Contrôles réalisés
- Audit calendrier : 10/10.
- Tests statiques ciblés du générateur : 8/8.
- Tests de fumée : réussis.
- Catalogue : 120 chapitres, 120 ressources, aucun chapitre sans ressource, aucun doublon de ressource.
- Compatibilité PC/mobile : 16/16.
- PWA : 12/12.
- Sauvegardes : 12/12.
- Santé du stockage : 8/8.
- Sécurité statique : 0 constat.
- Accessibilité : 9/11 heuristiques positives.
- Qualité QCM : biais de position (61,9 % des réponses en A), 4 ressources avec moins de 10 réponses indexées ; 53 explications courtes.
- Revue de livraison : 12/13 commandes réussies ; diagnostic TypeScript à examiner car les dépendances ne sont pas installées dans l’environnement de construction.

## Limites
- Les séances sont exportées comme événements sur la journée entière : aucune heure de début n’est enregistrée.
- Aucun essai d’import réel n’a été effectué dans Google Calendar, Outlook ou Apple Calendar.
- La compilation TypeScript/Vite n’a pas pu être validée : `npm install` a dépassé le délai disponible.
