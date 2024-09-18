```markdown
# Gestion d'Équipe de Tournois

Ce projet est une application de gestion d'équipes pour des tournois. Il comprend une API backend construite avec Express et MongoDB, ainsi qu'un front-end développé avec Vue.js.

## Structure du Projet

- **Backend** : Gère les opérations CRUD pour les équipes via une API REST.
- **Frontend** : Interface utilisateur pour interagir avec l'API.

## Fonctionnalités

### API Backend

- **Affichage des Équipes** : Récupère toutes les équipes depuis la base de données.
- **Ajout d'une Équipe** : Permet d'ajouter une nouvelle équipe à la base de données.
- **Suppression d'une Équipe** : Permet de supprimer une équipe par son ID.

### Frontend

- **Affichage des Équipes** : Affiche la liste des équipes.
- **Ajouter une Équipe** : Formulaire pour ajouter une nouvelle équipe.
- **Supprimer une Équipe** : Option pour supprimer une équipe existante.

## Installation

### Backend

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ton-utilisateur/ton-repository.git
   cd ton-repository/backend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer la base de données** :
   La connexion à MongoDB se fait via `mongodb://localhost:27017`. Assurez-vous que MongoDB est en cours d'exécution localement.

4. **Démarrer le serveur** :
   ```bash
   npm start
   ```

### Frontend

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ton-utilisateur/ton-repository.git
   cd ton-repository/frontend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer l'application Vue.js** :
   ```bash
   npm run serve
   ```

## API Endpoints

### `GET /teams`

Récupère toutes les équipes.

- **Réponse** : Liste des équipes en format JSON.

### `POST /add-teams`

Ajoute une nouvelle équipe.

- **Corps de la requête** :
  ```json
  {
    "name": "Nom de l'équipe"
  }
  ```
- **Réponse** : Objet JSON avec l'ID et le nom de l'équipe ajoutée.

### `DELETE /teams/:id`

Supprime une équipe par son ID.

- **Paramètres** : `id` - ID de l'équipe à supprimer.
- **Réponse** : Message de confirmation de la suppression.

## Tests

### Backend

1. **Installer les dépendances de test** :
   ```bash
   npm install --save-dev mocha chai supertest mongodb-memory-server
   ```

2. **Exécuter les tests** :
   ```bash
   npm test
   ```

Les tests couvrent les opérations de connexion, ajout, récupération, et suppression des équipes en utilisant une instance MongoDB en mémoire pour garantir l'isolation et la reproductibilité des tests.

## Technologies Utilisées

- **Backend** :
  - Node.js
  - Express
  - MongoDB
  - Mocha, Chai, Supertest (pour les tests)

- **Frontend** :
  - Vue.js
  - Vue Router
  - Vuex (si utilisé pour la gestion d'état)

## Contribuer

1. **Forker le dépôt**.
2. **Créer une branche** :
   ```bash
   git checkout -b feature/nouvelle-fonctionnalité
   ```
3. **Effectuer des modifications**.
4. **Soumettre une Pull Request**.

## License

Ce projet est sous la licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
```

---
