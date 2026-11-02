# Audit du manifeste — StudyFlow 5.2.0

**13/14** contrôles réussis ; **1** à corriger.

- OK — dependency:react : ^18.3.1
- OK — dependency:react-dom : ^18.3.1
- OK — dependency:lucide-react : ^0.468.0
- OK — dependency:vite : ^6.0.1
- OK — dependency:@vitejs/plugin-react : ^4.3.4
- OK — dependency:typescript : ~5.6.2
- À CORRIGER — lockfile:present : package-lock.json absent ou illisible
- OK — script:build : tsc -b && vite build
- OK — script:dev : vite
- OK — script:preview : vite preview
- OK — script:doctor : node scripts/project-doctor.mjs
- OK — script:audit:release : node scripts/audit-release.mjs
- OK — runtime:node : Node 22.16.0 (minimum projet 20)
- OK — runtime:npm : 10.9.2

> Cet audit contrôle le manifeste et les métadonnées locales ; il ne prouve ni la disponibilité du registre npm, ni la réussite du build.

## Étapes suivantes

- Générer et contrôler package-lock.json depuis un environnement réseau stable.
- Installer les dépendances avec npm ci.
- Exécuter npm run build puis npm run audit:release.
