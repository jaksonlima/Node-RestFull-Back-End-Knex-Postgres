const routesRxpress = require("express").Router();

const UsersController = require("./controllers/users");
const ProjectsController = require("./controllers/projects");

//Users
routesRxpress
  .get("/users", UsersController.index)
  .post("/users", UsersController.create)
  .put("/users/:id", UsersController.update)
  .delete("/users/:id", UsersController.delete)
  .get("/users/encontrar/:id", UsersController.encontraPorId);

//Projects
routesRxpress
  .get("/projects", ProjectsController.index)
  .post("/projects", ProjectsController.create)
  .get("/projects/encontrar/:id", ProjectsController.encontraPorId);

module.exports = routesRxpress;
