# NOX HAVEN V6.0.2 — Sauvegarde durable et restauration mobile

## Problème corrigé
La sauvegarde reposait principalement sur IndexedDB. Les anciennes clés localStorage n'étaient plus actualisées après migration. Si IndexedDB était vidé, réinitialisé ou indisponible, le profil et certaines données pouvaient revenir à un état ancien et redemander le formulaire initial.

## Corrections
- Double écriture : IndexedDB + miroir localStorage horodaté.
- Choix de la copie la plus récente au redémarrage.
- Récupération du marqueur de profil historique `studyflow_profile_v1` pour ne pas réafficher inutilement le formulaire.
- Mise à jour des anciennes clés de compatibilité lors de chaque sauvegarde.
- Écriture synchrone de secours lors de `pagehide` et lorsque le document passe en arrière-plan.
- Récupération depuis le miroir si IndexedDB est absent ou endommagé.
- Mode de secours localStorage si IndexedDB n'est pas disponible.
- Demande de stockage persistant via `navigator.storage.persist()` lorsque le navigateur le permet.
- Métadonnées temporelles écrites dans la même transaction IndexedDB que les données.
- Export JSON existant conservé comme sauvegarde indépendante recommandée.

## Données concernées
Profil et choix de matières (via le profil enregistré dans les matières), notes, fiches, flashcards, carnet d'erreurs, séances, planning, progression par chapitre, objectif de moyenne, objectif hebdomadaire, capacité quotidienne et thème.

## Tests
- Nouveau test de durabilité : 11/11 contrôles.
- Suite automatisée complète : réussie sur cette archive.
- Les essais sur de vrais appareils Android/iOS et le build de production restent à effectuer.

## Limites
Le miroir localStorage protège contre la perte/éviction d'IndexedDB mais reste sur le même navigateur et le même appareil. Il ne remplace pas la synchronisation cloud multi-appareils. Le navigateur peut aussi refuser le stockage persistant ou l'utilisateur peut effacer toutes les données du site : conserver une exportation reste recommandé.
