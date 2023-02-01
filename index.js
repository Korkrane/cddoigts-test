const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./app/routes/chicken.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
