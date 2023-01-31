import express from 'express';
import swaggerUi from "swagger-ui-express";
// import swaggerJSDoc from "swagger-jsdoc";
import swaggerDocument from '../swagger.js';

import sequelize from './config/db.config.js';
import getChickens from './models/chicken.model.js';

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log('Tables have been created successfully.');
  })
  .catch((err) => {
    console.error('Unable to create tables:', err);
  });

// const options = {
//   failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: "Example API",
//       version: "1.0.0",
//     },
//     basePath: "/",
//   },
//   apis: ["./src/*.js"],
// };

// const specs = swaggerJSDoc(options);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// import {db} from './models/index.js'
// const db = require("./src/models");
// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Drop and re-sync db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });


// /**
//  * @openapi
//  * /:
//  *   get:
//  *     description: Welcome to swagger-jsdoc!
//  *     responses:
//  *       200:
//  *         description: Returns a mysterious string.
//  */
app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

// require("./app/routes/chicken.routes")(app);
const main = async () => {
  const users = await getChickens();
  console.log(users);
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

  main();
});