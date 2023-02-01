# Technical test - Clac des doigts

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Routes
The following table shows an overview of the existing API routes:

- GET     `chicken`	            get all Chickens
- GET     `chicken/:id`         get Chicken by id
- POST    `chicken`             add new Chicken
- PATCH   `chicken/:id`         update Chicken by id
- PATCH   `chicken/:id/run`     increase a Chicken steps by 1 and set isRunning to true
- DELETE  `chicken/:id`         remove Chicken by id
- DELETE  `chicken`             remove all Chickens

## Project setup
```
git clone https://github.com/Korkrane/cddoigts-test.git
cd cddoigts-test
./run.sh
```

## Test the API

Once the application is running, you can access and test the API with Swagger on `http://localhost:3000/api-docs`
