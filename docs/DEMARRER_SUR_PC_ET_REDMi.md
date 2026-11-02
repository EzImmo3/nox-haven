# Voir StudyFlow sur le PC et sur un telephone Android

## Methode rapide (recommandee pour voir l'application maintenant)

1. Extraire tout le ZIP dans un dossier Windows.
2. Ouvrir ce dossier dans l'Explorateur de fichiers.
3. Cliquer avec le bouton droit sur `start-studyflow-lan.ps1`, puis choisir **Executer avec PowerShell**.
   - Si Windows bloque le script, ouvrir PowerShell dans le dossier et lancer :
     `powershell -ExecutionPolicy Bypass -File .\start-studyflow-lan.ps1`
4. Le terminal affiche deux adresses :
   - PC : `http://localhost:5173`
   - Redmi : `http://ADRESSE-IP-DU-PC:5173`
5. Sur le Redmi, ouvrir Chrome et saisir exactement l'adresse Redmi affichee dans le terminal.

Le PC et le telephone doivent etre connectes au meme reseau Wi-Fi. Laisser la fenetre PowerShell ouverte pendant l'utilisation. `Ctrl+C` arrete le serveur.

## Methode de previsualisation de production

Pour verifier la version compilee comme en production, lancer `start-studyflow-preview-lan.ps1`.
Le script execute d'abord `npm.cmd run build`, puis lance l'aperçu :
- PC : `http://localhost:4173`
- Redmi : `http://ADRESSE-IP-DU-PC:4173`

## Si le Redmi n'arrive pas a ouvrir la page

- Verifier que les deux appareils sont sur le meme Wi-Fi (pas le reseau mobile du telephone).
- Accepter l'autorisation Windows Defender Firewall pour Node.js sur un reseau **prive**.
- Ne pas utiliser `127.0.0.1` ou `localhost` sur le telephone : ces adresses designent le telephone lui-meme. Utiliser l'adresse IPv4 du PC affichee par le script.
- Certains Wi-Fi d'ecole, d'entreprise ou reseaux invites isolent les appareils entre eux. Essayer un partage de connexion prive si necessaire.

## Limite importante : installation PWA et mode hors ligne

Cette methode sert a consulter et tester l'interface sur le telephone. Un site servi en HTTP via une adresse IP locale n'est generalement pas considere comme un contexte securise par Android/Chrome : l'installation PWA et le service worker peuvent donc ne pas fonctionner. Pour valider l'installation PWA et le mode hors ligne sur le Redmi, il faudra ensuite publier StudyFlow sur une adresse HTTPS ou utiliser un environnement local HTTPS configure.

## Prerequis

- Node.js installe sur le PC (commande `node -v`).
- npm disponible (commande `npm.cmd -v`).
- Au premier lancement, executer `npm.cmd install` dans le dossier du projet.
