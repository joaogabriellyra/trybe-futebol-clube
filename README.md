# Trybe Futebol Clube
This project is a comprehensive full-stack application with a pre-existing front-end provided by Trybe. The application consumes data from a backend integrated with a MySQL database. The all application is dockerized, including components like the apps, network, volumes, and compose configurations. Data modeling is achieved using Sequelize, with the creation and association of tables using Sequelize models. The project also includes the development of a RESTful API with endpoints for interacting with the created models, as well as the implementation of a TypeScript-based CRUD system using an Object-Relational Mapping (ORM).

**Summary**
- [Features](#features)
- [Tools and Libraries](#tools-and-libraries)
- [Getting Started](#getting-started)
- [Routes](#routes)
- [Front-end](#front-end)

## Features
* Classification: View team ranking list with all statistics.
* Login: To login with sucess, check the login section.
* Matches: View all the matches, included the live matches.

## Tools and Libraries
* Node.js
* Express.js
* TypeScript
* React
* Sequelize
* Axios
* jsonwebtoken
* bcryptjs
* http-status-code
* Jest / Mocha / Chai / Sinon
* Docker
* Dotenv
* ESLint
* Nodemon

## Getting Started
### To run the project locally and start the application, follow these steps:
The .env file has been commited to facilitate.

### Clone this repository:
```
git clone https://github.com/joaogabriellyra/trybe-futebol-clube.git
```
### Install project dependencies:
```
npm run install:apps
```
### Run the Dockers containers: 
```
npm run compose:up
```
![Containers healthy](https://i.ibb.co/jG2FXGz/Captura-de-tela-de-2023-09-28-16-40-00.png)

### Access the application at:
```
http://localhost:3000
```
![initial-page](https://i.ibb.co/xJnvWZh/Captura-de-tela-de-2023-09-28-18-09-22.png)

## Routes
### Login
<details>
<summary><b>/login</b></summary>
<br />

- POST: Retrieve a token for authorization to use the talker route:
```
{
  "email": "jgabriellyra@gmail.com",
  "password": "12345678"
}
```
![login](https://i.ibb.co/Vqbvgjy/Captura-de-tela-de-2023-09-28-02-30-31.png)
</details>

### Talker
<details>
<summary><b>/talker</b></summary>
<br />

- GET: Retrieve a list of all talkers.:
```
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": {
      "watchedAt": "23/10/2020",
      "rate": 5
    }
  }
]
```

- POST: Register a new talker.
```
  {
    "name": "Gaules",
    "age": 39,
    "talk": {
      "watchedAt": "28/09/2023",
      "rate": 5
    }
  }
```
![Gaules](https://i.ibb.co/F0KKXXp/Captura-de-tela-de-2023-09-28-02-59-22.png)
</details>
<details>
<summary><b>/talker/:id</b></summary>
<br />

- GET: Retrieve a specific talker by ID.
```
{
  "name": "Henrique Albuquerque",
  "age": 62,
  "id": 1,
  "talk": {
    "watchedAt": "23/10/2020",
    "rate": 5
  }
}
```


- PUT: Update an existing talker by ID.
  - It expects a JSON object to be passed to the request and the token.

![New talker](https://i.ibb.co/jHscQv5/Captura-de-tela-de-2023-09-28-02-32-30.png)
![New talker](https://i.ibb.co/DfrdMWN/Captura-de-tela-de-2023-09-28-02-32-15.png)
- DELETE: Delete a talker by ID.
</details>

<details>
<summary><b>/talker/search?q=</b></summary>
<br />

- GET: /talker/search/:query: Search for talkers based on a query.

```
http://localhost:3001/talker/search?q=Clóvis
```
![Talker query](https://i.ibb.co/FX1sjNh/Captura-de-tela-de-2023-09-28-02-53-12.png)
</details>
