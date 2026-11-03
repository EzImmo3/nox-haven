# NOX HAVEN V6.2.0 — Comptes & interface cloud

## Ajouts
- Rubrique Compte & synchronisation.
- Création de compte, connexion et déconnexion via Supabase Auth.
- Restauration de session dans le même onglet à partir du refresh token conservé en sessionStorage.
- Comparaison des versions locale/distante et résolution explicite : restaurer la version distante ou conserver la version locale.
- Envoi de la sauvegarde complète et vérification SHA-256.
- Identifiant stable d’appareil stocké localement.

## Sécurité et limites
- Clé publique anon uniquement côté navigateur ; jamais de service_role.
- RLS du schéma Supabase reste obligatoire.
- Pas d’écrasement silencieux en cas de conflit.
- Pas de projet Supabase réel ni de credentials de production fournis : le parcours doit être testé par le propriétaire du projet.
- Session non garantie après fermeture complète de l’onglet.
- Build production non certifié si les dépendances ne sont pas disponibles.
