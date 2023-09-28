# Trybe Futebol Clube
This project is a comprehensive full-stack application with a pre-existing front-end provided by Trybe. The application consumes data from a backend integrated with a MySQL database. The all application is dockerized, including components like the apps, network, volumes, and compose configurations. Data modeling is achieved using Sequelize, with the creation and association of tables using Sequelize models. The project also includes the development of a RESTful API with endpoints for interacting with the created models, as well as the implementation of a TypeScript-based CRUD system using an Object-Relational Mapping (ORM).

**Summary**
- [Features](#features)
- [Tools and Libraries](#tools-and-libraries)
- [Getting Started](#getting-started)
- [Routes](#routes)

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

```
{
  "email": "user@user.com",
  "password": "secret_user"
}
```
![login](https://i.ibb.co/tJJhF9K/Captura-de-tela-de-2023-09-28-18-24-11.png)
</details>

### Matches
<details>
<summary><b>/matches</b></summary>
<br />
  
![matches](https://i.ibb.co/8msV3Mr/Captura-de-tela-de-2023-09-28-18-35-28.png)
</details>
