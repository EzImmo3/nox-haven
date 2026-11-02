
## 1er novembre 2026 — fiabilité des révisions et intégration pédagogique

- Les flashcards d'un chapitre dédié peuvent être ajoutées directement au paquet personnel de révision SM-2. L'ajout est idempotent : les cartes déjà présentes pour le même chapitre ne sont pas recréées.
- Les distracteurs des quiz sont dédupliqués et leur ordre reste stable pendant l'affichage d'une question, afin d'éviter les changements d'options au re-rendu.
- Le calendrier SM-2 distingue désormais les évaluations « À revoir », « Difficile », « Bien » et « Facile » avec des intervalles initiaux différenciés, puis une progression fondée sur l'intervalle et le facteur de facilité.
- Les dates de révision et la date du jour sont calculées en calendrier local plutôt qu'en découpant une date UTC, ce qui évite les décalages d'un jour autour de minuit selon le fuseau horaire.
- Les audits structurels et smoke tests passent après ces modifications. La compilation React/Vite reste à effectuer dans l'environnement de développement de l'utilisateur.
