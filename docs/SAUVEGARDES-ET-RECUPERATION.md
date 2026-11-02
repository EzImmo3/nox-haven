# Sauvegardes et récupération StudyFlow

## Exporter

Depuis les paramètres de StudyFlow, utiliser l'action d'export. Le fichier JSON contient les données scolaires et les préférences locales, ainsi qu'une empreinte SHA-256 destinée à détecter une altération accidentelle.

## Conserver une copie

- Garder une copie sur l'appareil et une autre dans un emplacement distinct (clé USB ou espace personnel de confiance).
- Donner au fichier un nom daté sans écraser les sauvegardes précédentes.
- Exporter à nouveau après une période importante de révision ou avant une réinitialisation.

## Restaurer

L'import refuse les fichiers vides, les fichiers de plus de 25 Mo, les enveloppes versionnées dont l'empreinte est absente ou invalide, et les données qui ne passent pas la validation du modèle. Une confirmation est demandée avant le remplacement des données actuelles.

Les anciens exports compatibles restent importables selon les règles de migration du modèle. Toujours exporter l'état actuel avant de restaurer une ancienne sauvegarde.

## Limites

SHA-256 n'est pas un chiffrement. Le fichier de sauvegarde contient des informations personnelles scolaires : ne pas le publier ni le transmettre à une personne non autorisée. Cette version ne fournit ni sauvegarde automatique distante ni synchronisation multi-appareils.

## Test manuel recommandé avant publication

1. Ajouter une note, une flashcard, une fiche et une séance.
2. Exporter une sauvegarde et conserver le fichier original.
3. Modifier les données dans l'application puis restaurer le fichier.
4. Vérifier les notes, flashcards, fiches, séances, progression et préférences.
5. Essayer un fichier vide, un fichier JSON invalide et une copie altérée : aucun ne doit remplacer les données.
6. Recharger l'application et vérifier que les données restaurées persistent.
