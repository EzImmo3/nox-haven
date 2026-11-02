# StudyFlow 5.2.0 — Équilibrage de l'affichage des QCM

## Grand lot livré
- Mélange déterministe des propositions des QCM de la bibliothèque.
- Conservation stricte de la correspondance entre l'option affichée et l'index de réponse d'origine.
- L'ordre reste stable pour la même question afin de ne pas déplacer les propositions pendant une session de révision.
- Diversité de placement mesurée sur 80 graines : 24 permutations sur 24 observées.
- Ajout de tests dédiés et d'une commande de tests groupés.
- Ajout d'un libellé accessible sur les contrôles radio.

## Vérifications
- Test mélange QCM : 14 assertions réussies.
- Les tests de fumée, de contenu, calendrier et audits globaux sont lancés séparément avant livraison.
- Build TypeScript/Vite : non validé dans cet environnement si les dépendances ne sont pas présentes.

## Limites
- Cette modification équilibre les positions à l'affichage, mais ne valide pas la justesse disciplinaire des questions ni des corrections.
- Les contenus doivent toujours faire l'objet d'une relecture pédagogique.
