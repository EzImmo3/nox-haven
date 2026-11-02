# V5.0.44 — Revue consolidée de livraison

Cette version ajoute une commande unique de revue qui exécute les audits existants dans un ordre déterministe et conserve les sorties de chaque commande dans un rapport JSON et Markdown.

## Utilisation

```bash
npm run audit:release
```

La commande renvoie un code non nul dès qu'un audit échoue. Le rapport complet est écrit dans `docs/RELEASE_READINESS_V5.0.44.json` et `.md`. Les détails sont conservés pour faciliter le diagnostic sans relancer immédiatement chaque audit séparément.

## Limites

- La revue ne corrige pas automatiquement les problèmes détectés.
- Un audit statique réussi n'est pas une preuve de conformité, de sécurité ou de fonctionnement sur appareil.
- Le diagnostic TypeScript est volontairement inclus : ses échecs restent visibles et ne sont pas masqués.
- Les tests de restauration IndexedDB, les tests réels Android/iOS/PC, la compilation de production et la relecture pédagogique restent des étapes distinctes.
