# Audit des sauvegardes — StudyFlow 5.10.0

Résultat : **12/12** contrôles statiques positifs.

- OK — Export versionné
- OK — Empreinte SHA-256 à l’export
- OK — Empreinte vérifiée avant import
- OK — Format hexadécimal SHA-256 contrôlé
- OK — Taille maximale du fichier contrôlée
- OK — Fichier vide refusé
- OK — Données validées avant confirmation
- OK — Confirmation avant remplacement
- OK — IndexedDB prioritaire
- OK — Migration sans suppression immédiate des anciennes données
- OK — Conflits inter-onglets signalés
- OK — Validation des matières et notes

## Limites
- Audit statique : les tests de restauration réelle doivent être effectués dans un navigateur avec IndexedDB.
- Une empreinte SHA-256 détecte les altérations accidentelles, mais ne chiffre pas la sauvegarde et ne prouve pas son origine.
- Aucune sauvegarde cloud ni synchronisation entre appareils n’est fournie.
