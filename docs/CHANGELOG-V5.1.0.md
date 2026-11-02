# StudyFlow 5.1.0 — Qualité continue et consolidation multiplateforme

## Livrables
- Regroupement des évolutions sous une livraison 5.1.0 afin d'éviter les micro-versions purement incrémentales.
- Contrôle automatique de cohérence entre le manifeste PWA, le cache du Service Worker, l'export de sauvegarde, le pied de page et la documentation.
- Workflow GitHub Actions pour générer le lockfile, installer proprement les dépendances, construire le bundle de production, lancer les audits et archiver les rapports.
- Prérequis explicités : Node.js 20+ et npm 10+.

## Vérification locale
- `npm run audit:version` : 6/6 contrôles réussis.
- Les audits statiques et tests de fumée sont exécutés avant archivage.
- La compilation locale reste non validée : les dépendances ne sont pas installées et la tentative d'accès au registre npm a expiré.
- Le workflow CI doit être exécuté après publication/push sur le dépôt ; sa présence dans le ZIP ne signifie pas qu'il a déjà tourné.

## Limites connues
- Aucun lockfile n'est inclus : il n'a pas pu être résolu proprement hors ligne. Le workflow génère un lockfile depuis `package.json`, puis effectue une installation propre.
- Les essais sur appareils physiques et la synchronisation cloud multi-appareils ne sont pas implémentés par cette livraison.
