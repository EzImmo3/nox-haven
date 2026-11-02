# StudyFlow 5.10.1 — navigation mobile plus accessible

## Changements
- Annonce de la rubrique active dans le panneau « Plus » via `aria-current="page"`.
- Retour explicite du focus vers le déclencheur « Plus » après sélection d’une rubrique ou ouverture des paramètres depuis le panneau.
- Deux assertions supplémentaires dans la suite de tests mobile : état actif annoncé et restauration du focus.
- Ajout de noms accessibles explicites aux actions de stockage, au champ de recherche générique et aux sélecteurs du carnet d’erreurs.
- Audit d’accessibilité corrigé pour reconnaître les champs correctement associés à un label englobant et ignorer le champ fichier masqué.
- L’audit d’accessibilité est désormais inclus dans la suite complète de validation.
- Le type des résumés de fiches de révision accepte les paragraphes regroupés par partie, ce qui corrige 15 erreurs TypeScript certaines dans les données SES.
- Cache Service Worker renouvelé pour la version 5.10.1.

## Validation
- `npm run test:all` : réussi après modifications, avec audits plateforme, accessibilité et cohérence de version intégrés.
- `npm run test:mobile` : 37/37.
- Build de production : non validé, dépendances npm absentes et installation réseau indisponible dans l’environnement.
- Essais physiques Android/iOS : à effectuer.
