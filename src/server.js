const app = require("express")();
const knex = require("./database");

app.get("/users", (req, res) =>
  knex("users").then((result) => res.json(result))
);

app.listen("3333", () => console.log("start port: 3333"));

// # Parametros da requisição
// request.body
// request.headers
// request.params
// request.query
