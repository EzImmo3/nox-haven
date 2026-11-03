# NOX HAVEN 5.12.0 — expérience multi-écrans

## Inclus
- Renforcement du responsive pour les tablettes et les largeurs intermédiaires, sans retirer les adaptations mobiles existantes.
- Ajustements pour les écrans de 320 px, les téléphones en paysage et les appareils à faible hauteur d'écran.
- Prise en compte des unités de viewport dynamiques (`svh`) et des zones de sécurité iOS.
- Amélioration des états de focus visibles et respect du réglage de réduction des animations.
- Suppression de la dépendance aux polices Google Fonts distantes : typographie système pour conserver un rendu cohérent hors connexion et réduire les requêtes externes.
- Mise à jour de la version affichée, des métadonnées de sauvegarde et de la version de cache du service worker.
- Extension des tests mobiles de 39 à 48 contrôles.

## Vérifications effectuées
- Test mobile statique : 48/48.
- Audit PWA statique : 12/12.
- Audit du manifeste : 13/14 ; le contrôle restant concerne `package-lock.json`, absent du projet.

## Limites connues
- Le build TypeScript/Vite n'a pas pu être exécuté dans cet environnement : les dépendances ne sont pas installées et l'accès au registre npm a expiré ; le mode hors ligne npm ne dispose pas des métadonnées nécessaires.
- Les contrôles automatisés ne remplacent pas les essais physiques sur Android, iOS, tablette et ordinateur.
- La synchronisation distante entre appareils n'est pas incluse dans ce lot.
