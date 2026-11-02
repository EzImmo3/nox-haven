# StudyFlow V5.0.41 — Audit accessibilité

- Ajout d’un audit statique heuristique de l’accessibilité du document, du focus clavier, des boutons et des champs.
- Génération de rapports JSON et Markdown via `npm run audit:accessibility`.
- Synchronisation du numéro de version dans l’application, le titre HTML, le manifeste PWA et le service worker.

## Limites connues

Cet audit ne certifie pas la conformité WCAG. Le contraste, les lecteurs d’écran, la navigation clavier réelle et les associations label/champ doivent être testés dans le navigateur. La compilation de production reste à valider séparément.
