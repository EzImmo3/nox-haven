# NOX HAVEN 7.3.0 — Focus & énergie

## Ajouts
- Nouvel onglet Focus & énergie.
- Minuteur de 10, 15, 20, 25, 30 ou 40 minutes, avec pause et reprise.
- Intention de séance et matière facultatives.
- Auto-évaluation facultative de l’énergie avant et après la séance.
- Bilan écrit et historique des séances.
- Indicateurs hebdomadaires calculés depuis les sessions réellement enregistrées.
- Recommandation de durée indicative selon l’énergie déclarée.
- Recherche rapide améliorée : navigation par flèches, sélection annoncée, fermeture Échap, piège de focus et restauration du focus initial.

## Compatibilité et sécurité des données
- Les métadonnées de concentration sont optionnelles dans `StudySession`.
- Les anciennes sessions sans ces champs restent compatibles.
- Les nouvelles données passent par le flux de sauvegarde existant (IndexedDB et snapshot cloud).
- Aucun changement de schéma de compte ou de secrets Supabase.

## Vérifications locales réalisées pendant la préparation
- 15 assertions du module d’analyse Focus & énergie réussies.
- Transpilation syntaxique de `App.tsx`, `extraFeatures.tsx`, `types.ts` et `data.ts` réussie.
- Compilation Vite complète non exécutée dans cet environnement.
