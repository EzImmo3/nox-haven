# Audit du manifeste — NOX HAVEN 8.0.0

**21/21** contrôles réussis ; **0** à corriger.

- OK — dependency:react : ^18.3.1
- OK — dependency:react-dom : ^18.3.1
- OK — dependency:lucide-react : ^0.468.0
- OK — dependency:vite : ^6.0.1
- OK — dependency:@vitejs/plugin-react : ^4.3.4
- OK — dependency:typescript : ~5.6.2
- OK — lockfile:present : package-lock v3
- OK — lockfile:root-version : package 8.0.0 / projet 8.0.0
- OK — lockfile:react : déclaré ^18.3.1 / verrouillé ^18.3.1
- OK — lockfile:react-dom : déclaré ^18.3.1 / verrouillé ^18.3.1
- OK — lockfile:lucide-react : déclaré ^0.468.0 / verrouillé ^0.468.0
- OK — lockfile:vite : déclaré ^6.0.1 / verrouillé ^6.0.1
- OK — lockfile:@vitejs/plugin-react : déclaré ^4.3.4 / verrouillé ^4.3.4
- OK — lockfile:typescript : déclaré ~5.6.2 / verrouillé ~5.6.2
- OK — script:build : tsc -b && vite build
- OK — script:dev : vite
- OK — script:preview : vite preview
- OK — script:doctor : node scripts/project-doctor.mjs
- OK — script:audit:release : node scripts/audit-release.mjs
- OK — runtime:node : Node 26.13.0 (minimum projet 20)
- OK — runtime:npm : 11.20.0

> Cet audit contrôle le manifeste et les métadonnées locales ; il ne prouve ni la disponibilité du registre npm, ni la réussite du build.

## Étapes suivantes

- Exécuter npm ci depuis la racine.
- Exécuter npm run build puis npm run audit:release.
