# NOX HAVEN — préparation de la synchronisation cloud

## État réel de cette livraison

La V6.0.1 ajoute un adaptateur Supabase sans dépendance SDK, un schéma SQL avec Row Level Security et des tests utilisant un serveur simulé. Le stockage IndexedDB local reste indépendant et continue de fonctionner hors connexion.

**La synchronisation cloud n'est pas encore activée dans l'interface.** Aucun projet Supabase réel n'a été connecté ni testé. Il faut configurer un projet, appliquer `supabase/schema.sql`, renseigner les deux variables publiques ci-dessous et intégrer le parcours de compte dans l'interface avant de considérer la synchronisation multi-appareils comme opérationnelle.

## Configuration requise

Créer un projet Supabase, puis exécuter `supabase/schema.sql` dans son SQL Editor. Dans l'environnement de build, définir :

- `VITE_SUPABASE_URL` : URL HTTPS du projet.
- `VITE_SUPABASE_ANON_KEY` : clé publique anon/publishable.

Ne jamais exposer `service_role`, une clé secrète ou un mot de passe de base de données dans le navigateur.

## Comportement de sécurité

- Les requêtes nécessitent une session utilisateur authentifiée.
- Les politiques RLS limitent chaque ligne à `auth.uid() = account_id`.
- Le payload est vérifié par SHA-256 avant envoi et après lecture.
- Les conflits de révision ne doivent pas écraser silencieusement une copie distante.
- La session est conservée en mémoire par l'adaptateur ; elle n'est pas écrite dans localStorage.
- Le stockage local IndexedDB reste la référence hors connexion.

## Tests

`npm run test:cloud-sync` utilise un fetch simulé. Il vérifie la validation des identifiants, la session, le calcul d'empreinte, l'envoi et la lecture. Il ne valide ni un vrai projet Supabase, ni les politiques RLS sur une instance distante.

## Étapes restantes

1. Ajouter l'écran de création de compte / connexion / déconnexion.
2. Ajouter la création et la persistance locale du device ID et des révisions.
3. Ajouter le choix explicite en cas de conflit et une sauvegarde de sécurité avant restauration distante.
4. Tester avec deux navigateurs et deux appareils sur un projet Supabase de test.
5. Vérifier les règles RLS et le comportement après perte de réseau / expiration de session.
