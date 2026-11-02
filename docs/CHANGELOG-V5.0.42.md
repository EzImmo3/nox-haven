# StudyFlow V5.0.42 — Navigation accessible et lot de fiabilisation

## Améliorations livrées
- Ajout d'un lien d'évitement visible au clavier pour accéder directement au contenu principal.
- Ajout d'un identifiant stable et d'une cible de focus au repère principal.
- Nom accessible explicite pour la navigation principale.
- Styles du lien d'évitement compatibles avec le thème et la préférence de réduction des animations.
- Audit accessibilité étendu : vérification de la cible du lien d'évitement, de sa visibilité au focus et du nom de la navigation.
- Synchronisation de la version dans l'application, les exports, le manifeste et le cache PWA.

## Contrôles exécutés
- Audit contenu : 120 chapitres, 120 ressources, aucun chapitre manquant, aucune ressource orpheline ou dupliquée.
- Smoke tests : réussis.
- Audit plateforme : 16/16.
- Audit PWA : 12/12.
- Audit sécurité statique : 6/6 contrôles.
- Audit intégrité QCM : 2 405 questions, 0 index invalide, 0 doublon de choix ; 53 explications courtes restent à réviser.
- Audit accessibilité : 9/11 heuristiques positives ; les boutons et champs nécessitent encore une vérification manuelle.

## Limites connues
- La compilation de production n'est pas déclarée validée ; les problèmes TypeScript et l'installation des dépendances restent à résoudre.
- Les audits statiques ne remplacent pas les essais sur appareils, clavier, lecteur d'écran et contraste.
- La synchronisation distante multi-appareils et la publication publique ne sont pas encore livrées.
