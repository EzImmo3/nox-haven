# NOX HAVEN V6.0.1 — état de livraison

## Livré
- Adaptateur cloud Supabase (Auth REST + table de sauvegarde PostgREST).
- Validation des instantanés, empreinte SHA-256, contrôle du compte.
- Schéma SQL et politiques RLS.
- Tests simulés du client cloud : 8 assertions.
- Suite `npm run test:all` réussie sur les scripts disponibles.
- Cohérence de version : 8/8.

## Non certifié / non livré
- Aucun `package-lock.json` : l'installation npm a expiré dans cet environnement.
- Build TypeScript/Vite non exécuté avec les dépendances installées.
- Le cloud n'est pas encore relié à l'interface utilisateur.
- Aucun projet Supabase réel configuré ; les tests cloud sont simulés.
- Tests sur téléphones et tablettes physiques non effectués.

## Condition pour une RC publiable
Depuis un environnement réseau fonctionnel, exécuter `npm install`, vérifier le lockfile, `npm ci`, `npm run build`, puis configurer un projet Supabase de test et valider RLS + synchronisation sur deux navigateurs. Ne pas déployer comme synchronisation multi-appareils terminée avant ces étapes.
