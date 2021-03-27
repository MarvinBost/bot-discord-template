# Bot discord basique
## 1.Préparation

- Clonez le repository
- Installez [nodejs](https://nodejs.org/fr/) si ce n'est pas déjà fait
- Importez les dépendances avec la commande : `npm install`
- Connectez-vous ici : [Espace Developpeur de discord](https://discord.com/developers/applications)
- Applications > New Application > Name > Bot >Add a bot>Click to Reveal Token
- Invitez le bot sur votre serveur en récupérant le client id de votre bot
  ---> https://discordapp.com/oauth2/authorize?client_id=votreclientid&scope=bot&permissions=3072

## 2.Modifier les informations

*Le code est fonctionnel, mais il a besoin d'informations pour le serveur sur lequel il va être lancé (j'estime que vous n'allez pas lancer le bot sur 150 serveurs sans modifier le code).*

Modifier les informations dans le fichier : `config.json`

Et voilà le bot est fonctionnel !

## 3.Lancer le bot

Bon maintenant, il suffit de le lancer le bot, allons-y !

- Lancer le bot avec `node index.js`
- Écrivez `!help` dans un channel sur le serveur