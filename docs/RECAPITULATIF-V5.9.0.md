# Récapitulatif V5.9.0 — priorité mobile

## Livré
- Dialogue mobile Plus accessible : focus initial, piège Tab/Shift+Tab, fermeture Échap, restauration du focus, blocage/restauration du scroll arrière-plan.
- Champs adaptés à Safari iOS et aux interactions tactiles.
- Modales, tableaux, formulaires, quiz et cours mieux adaptés aux écrans étroits.
- Ajustements spécifiques au paysage mobile.

## Tests
- `npm run test:all` : réussi.
- Mobile : 32/32.
- PWA : 12/12.
- Service Worker runtime : 11 assertions.
- Calendrier : 8/8.
- Versions : 8/8.
- Plateforme : 16/16.
- Catalogue : 120 chapitres, 405 QCM, 630 flashcards, 233 exercices.

## Non terminé
La partie mobile n'est pas encore déclarée finie : il manque un build de production réussi, une validation réelle sur téléphone, et la vérification manuelle de tous les parcours. Le build actuel échoue aussi sur des erreurs de types dans les données de cours, en plus des dépendances React/Vite manquantes dans l'environnement.
