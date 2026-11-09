# NOX HAVEN 7.1.0 — plan de finalisation vers la VF

## Éléments consolidés dans cette livraison

- Correction du manifeste PWA : version alignée sur 7.1.0.
- Correction des chemins de fichiers sous Windows dans les audits PWA, sécurité, qualité et intégrité QCM.
- Correction de l'appel au compilateur TypeScript dans le test du moteur de révision.
- Audit TypeScript : appel direct au compilateur local pour obtenir un code de sortie fiable.
- Audit de livraison : exécution npm compatible avec Windows.
- Rapports d'audit QCM et sécurité nommés selon la version du projet.
- Protection de `.env` et des fichiers d'environnement locaux dans `.gitignore`, tout en conservant `.env.example`.

## Validations disponibles

Les tests automatisés principaux, la compilation de production, les contrôles de contenu et les essais manuels PC/Android ont été rapportés comme réussis par l'utilisateur sur son environnement. Les audits exécutés dans l'environnement de préparation confirment :

- intégrité QCM : 2 405 questions, 0 index de réponse invalide, 0 doublon de choix ; 23 explications sont courtes selon le seuil mécanique de 25 caractères et méritent une relecture pédagogique ;
- sécurité statique : 29 fichiers analysés, 0 motif ciblé détecté, 6 contrôles statiques réussis ;
- PWA : 12/12 contrôles statiques réussis ;
- cohérence des versions : 8/8 contrôles réussis.

## À faire avant de déclarer la version finale

1. Réinstaller les dépendances sur le poste de publication et régénérer/committer `package-lock.json` si absent.
2. Refaire `npm.cmd run build` sur le dossier final et les tests principaux.
3. Déployer depuis une branche sauvegardée, puis vérifier le déploiement GitHub Pages.
4. Tester sur les appareils réels l'actualisation PWA et le mode hors ligne après chargement complet des matières nécessaires.
5. Configurer un vrai projet Supabase, appliquer `supabase/schema.sql`, configurer uniquement `VITE_SUPABASE_URL` et la clé publique `VITE_SUPABASE_ANON_KEY`, puis tester inscription, confirmation e-mail, connexion, déconnexion, sauvegarde, restauration et conflits entre deux appareils.
6. Vérifier que les politiques RLS sont actives et qu'un compte ne peut jamais lire ou modifier la sauvegarde d'un autre compte. Ne jamais utiliser la clé `service_role` dans le client.
7. Faire une relecture pédagogique humaine des contenus et des 23 explications courtes signalées par l'audit.

## Statut

Cette livraison est une consolidation technique de la 7.1.0, pas une déclaration de VF. La synchronisation Supabase réelle, la publication du code corrigé et les validations finales sur appareils doivent encore être effectuées.
