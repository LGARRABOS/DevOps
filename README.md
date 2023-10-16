# DevOps
Utilisation du projet DevOps pour le cours de DevOps

## Installation
Pour installer le projet, il suffit de cloner le projet sur votre machine.
```bash
git clone https://github.com/LGARRABOS/DevOps.git
```

## Utilisation
Pour lancer le projet il suffit d'entrée dans un terminal la command suivante:
```bash
npm run start
```
Pour changer le port d'écoute du serveur, il suffit de changer la variable d'environnement PORT.

Pour obtenir les données de l'API, il suffit d'entrée dans un navigateur l'adresse suivante:
```bash
http://localhost:3000/ping
```

## Note

Ce projet à pour but de permettre à un utilisateur de récupérer les Headers de la requête HTTP GET sur l'adresse /ping.
Si l'utilisateur envoie une requête HTTP GET sur une autre adresse, il recevra une erreur 404.