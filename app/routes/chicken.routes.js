module.exports = app => {
  const chickens = require("../controllers/chicken.controller.js");

  var router = require("express").Router();

  // Create a new Chicken
  router.post("/", chickens.create);

  // Retrieve all Chickens
  router.get("/", chickens.findAll);

  // Retrieve a single Chicken with id
  router.get("/:id", chickens.findOne);

  // Update a Chicken with id
  router.patch("/:id", chickens.update);

  // Make a chicken run
  router.patch("/:id/run", chickens.run);

  // Delete a Chicken with id
  router.delete("/:id", chickens.delete);

  // Delete all Chickens
  router.delete("/", chickens.deleteAll);

  app.use("/chicken", router);
};
