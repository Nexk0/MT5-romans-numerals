
# mt5-romans-numerals

Le projet est basé sur Vue 3, et un serveur Express pour la logique des conversions et servir une API REST.

Utile : [Doc de Vue 3](https://vuejs.org/guide/introduction.html) / [Doc d'Express](https://expressjs.com/fr/api.html)

&nbsp;
## Architecture du projet

Il s'agit d'une architecture de projet Vue 3 classique, à l'exception de :

- l'ajout du dossier ```server/```, contenant notre api.
- l'ajout du dossier ```cypress/```, contenant les fichiers nécessaires aux tests e2e.

&nbsp;
## API
Le serveur Express sert deux routes GET :
- ```/convert-to-arabic/[ROMAN_NUMBER]```
- ```/convert-to-roman/[ARABIC_NUMBER]```

&nbsp;
## Commandes
### Développement

- ```npm run dev:client``` lance l'application Vue3.
- ```npm run dev:server``` lance le serveur Express.

### Tests

Deux types de tests unitaires ont été mis en place : unitaires et e2e.
Les tests unitaires (cf [Vitest](https://vitest.dev/guide/)) concernent les fonctions de conversions de nombres elles-mêmes, on trouve les fichiers de test au même niveau qu'elles (```server/utils```).

Les tests e2e utilisent Cypress, leurs fichiers sont dans ```/cypress```

Pour lancer ces tests, utiliser les commandes suivantes :

- ```npm run test:unit``` lance les tests unitaires.
- ```npm run test:e2e``` lance les tests end-to-end.

### Production

- ```npm run build:client``` lance le build de l'application Vue3.
- ```npm run build:server``` lance le build du serveur Express.
- ```npm run start:server``` lance le serveur Express.

L'application Vue 3 est générée, elle n'a pas besoin de runtime.