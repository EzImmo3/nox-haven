# Sauvegarde et restauration — StudyFlow

## Ce qui est sauvegardé

L’export StudyFlow produit un fichier JSON contenant les données d’étude, la progression des chapitres, l’objectif de moyenne, les préférences de planification et le thème. Une empreinte SHA-256 est calculée sur le contenu exporté.

## Bonnes pratiques

1. Exporter une sauvegarde avant une réinitialisation, un changement d’appareil ou une mise à jour majeure.
2. Conserver au moins deux copies dans des emplacements personnels distincts (par exemple ordinateur et clé USB personnelle).
3. Ne pas publier le fichier : il peut contenir des informations scolaires personnelles.
4. Vérifier que le fichier téléchargé n’est pas vide et conserver son extension `.json`.
5. Pour restaurer, ouvrir Paramètres & données → Importer une sauvegarde, sélectionner le fichier et confirmer le remplacement.

## Contrôle d’intégrité

Les sauvegardes StudyFlow versionnées comportent une empreinte SHA-256. À l’import, l’application recalcule l’empreinte et refuse la restauration si elle ne correspond pas. Les anciens exports JSON non enveloppés restent acceptés pour compatibilité ; ils ne bénéficient pas de ce contrôle cryptographique.

## Limites importantes

- L’empreinte détecte une altération accidentelle, mais ne chiffre pas le fichier et ne prouve pas son origine.
- L’export est manuel : aucune copie cloud automatique n’est réalisée.
- Une sauvegarde créée sur un appareil n’apparaît pas automatiquement sur les autres appareils.
- Ne jamais importer un fichier reçu d’une source inconnue.
