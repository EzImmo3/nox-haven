# NOX HAVEN 7.2.0 — lot fonctionnel étudiant

## Nouveaux espaces
- Simulateur du baccalauréat général — session 2027, distinct du carnet de notes scolaires.
- Atelier Grand oral : deux questions ou plus, plan, introduction, conclusion, sources et notes de répétition.
- Urgence contrôle : séance express paramétrable, construite à partir des flashcards et erreurs réellement enregistrées.
- Carnet de formules et méthodes : fiches classées, filtrables et recherchables.
- Carnet d'orientation : formations, établissements, liens, échéances personnelles, états de suivi et notes comparatives.

## Données et compatibilité
- Les nouveaux espaces sont stockés dans la structure StudyData et suivent le stockage local IndexedDB existant.
- Les sauvegardes et synchronisations incluent ces champs avec les données de l'application.
- Les sauvegardes plus anciennes sont migrées avec des collections vides pour les nouveaux espaces.
- Le contenu d'orientation est saisi par l'utilisateur ; aucune admission, date ou information Parcoursup n'est inventée ni synchronisée depuis une source externe.
- Le service worker et le manifeste PWA portent la version 7.2.0.

## Limites de livraison
Cette version constitue un lot de développement. La compilation complète et les vérifications sur les appareils réels restent à effectuer dans l'environnement de développement de l'utilisateur avant publication.
