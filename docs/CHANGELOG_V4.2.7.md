# StudyFlow V4.2.7 — Conflits inter-onglets et transition des préférences

## Changements
- Ajout d'un canal BroadcastChannel pour signaler les écritures IndexedDB entre onglets de même origine.
- Lorsqu'un onglet reçoit une modification distante, il passe en état obsolète et suspend ses sauvegardes automatiques afin de ne pas écraser silencieusement les changements. L'utilisateur doit recharger cet onglet pour reprendre sur les données à jour.
- Les effets React qui réécrivaient la progression des chapitres, l'objectif hebdomadaire et la capacité quotidienne dans localStorage ont été retirés : après chargement, ces valeurs sont sauvegardées par le dépôt IndexedDB des préférences.
- Les clés historiques restent lues pendant la migration et ne sont pas supprimées.
- Ajout de contrôles smoke test pour ces garanties.

## Limites connues
- La détection inter-onglets repose sur BroadcastChannel. Les navigateurs qui ne le prennent pas en charge ne bénéficient pas de cette protection inter-onglets.
- Cette protection détecte un changement distant et bloque les écritures ultérieures de l'onglet obsolète ; elle ne constitue pas encore une résolution automatique de conflits ni un verrou transactionnel multi-onglets.
- La compilation TypeScript/Vite n'a pas été confirmée dans cet environnement : l'installation des dépendances a dépassé le délai disponible.
