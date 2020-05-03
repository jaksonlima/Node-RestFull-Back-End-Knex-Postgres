const routesRxpress = require("express").Router();

const UsersController = require("./controllers/users");

routesRxpress.get("/users", UsersController.index);

module.exports = routesRxpress;
