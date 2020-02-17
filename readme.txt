Pour faire fonctionner le projet :
    - cd 'serveur'
    - nodemon index.js
    - cd 'client'
    - yarn start

1) création du projet
2) création du frontend
3) création du backend
4) création d'une page d'affichage des utilisateurs (pour les non admin)

1) Créer dossier 'admin' :
    - dans le dossier 'admin', créer un projet react (frontend = client) : 'npx create-react-app client'
    - dans le dossier 'admin', créer un dossier 'serveur' (backend = serveur)

2) installer les librairies suivantes :
    - yarn add axios
    - yarn add querystring
    - yarn add react-router-dom
    - fichier 'index.js' avec les routes
    - fichier 'App.js' qui est la page d'accueil de la partie admin
    - dossier 'services' avec un fichier 'api.js'qui détermine l'adresse où sera accessible le backend
    - dossier 'components' avec :
        - dossier 'forms' qui comprend 2 fichiers :
            - 'AddUserForm.js' : formulaire pour ajouter un utilisateur
            - 'EditUserForm.js' : formulaire pour éditer un utilisateur
        - dossier 'table' qui comprend un fichier 'UserTable.js' qui affiche la liste des utilisateurs avec 2 boutons : update et delete

3) a) Créer la base de données 'database.sqlite' :
        - ouvrir sqlite
        - 'Nouvelle base de données' -> 'database.sqlite'
        - 'Exécuter le SQL' :
            CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255) NOT NULL, `username` VARCHAR(255) NOT NULL UNIQUE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)
        - cliquer sur la flèche (play) pour lancer la requête SQL
        - enregistrer la base de données dans un dossier 'database'

    b) Se placer dans le dossier 'serveur' -> 'yarn init' pour créer le fichier 'package.json'

    c) Installer les librairies suivantes :
        - yarn add cors
        - yarn add express
        - yarn add sequelize
        - yarn add sqlite3
        - yarn add --dev nodemon
        - yarn add --dev sequelize-cli

    d) Créer le fichier 'index.js' à la racine

    e) Créer le fichier 'routes.js' à la racine

    f) Créer un dossier 'config' avec un fichier 'database.js'

    g) Créer un dossier 'app' avec 2 dossiers :
        - un dossier 'controllers' qui comprend un fichier 'UserController.js'
        - un dossier 'models' avec 2 fichiers :
            - un fichier 'index.js'
            - un fichier 'User.js'

4) Créer 2 fichiers :
    - un fichier 'Test.js' pour afficher la page d'accueil et fait appel au composant 'TestUserTable'
    - un fichier 'TestUserTable.js' qui affiche les utilisateurs