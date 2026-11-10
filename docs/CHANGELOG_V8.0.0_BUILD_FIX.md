# V8.0.0 — correction de compilation

- Renommage du composant React `BacSimulator.tsx` en `BacSimulatorView.tsx`.
- Mise à jour de son import dans `App.tsx`.
- Cette correction évite une collision de résolution de modules sous Windows entre `BacSimulator` et `bacSimulator.mjs` (différence de casse ignorée par le système de fichiers Windows).
- Aucun changement apporté au calculateur, aux notes, au stockage local ou à la configuration Supabase.
