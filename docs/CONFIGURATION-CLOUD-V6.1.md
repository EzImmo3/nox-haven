# NOX HAVEN — Configuration du cloud V6.1

La synchronisation distante utilise Supabase Auth + une table `study_snapshots` protégée par RLS.

1. Créer un projet Supabase personnel.
2. Dans SQL Editor, exécuter `supabase-schema.sql`.
3. Récupérer l'URL du projet et la clé **anon/public** (jamais `service_role`).
4. Les variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` doivent être définies au moment du build.
5. Recompiler et publier l'application. Une clé publique anon peut être présente dans le client uniquement si RLS est correctement activée.
6. Activer la confirmation d'adresse e-mail dans Supabase Auth si souhaité.

La session cloud est conservée en mémoire dans cette version : une fermeture complète du navigateur nécessite une nouvelle connexion. Les données locales restent disponibles hors ligne. Une copie distante n'est créée qu'après connexion et synchronisation explicite.

## Limites et sécurité
- Le script SQL limite chaque instantané à 10 Mo et chaque compte à une seule sauvegarde courante.
- Les politiques RLS isolent les lignes par `auth.uid()`.
- Le client vérifie SHA-256 avant l'envoi et après le téléchargement.
- Un conflit ne doit jamais déclencher d'écrasement automatique.
- Le cloud n'est pas activé tant que le projet Supabase et les variables de build ne sont pas configurés.
