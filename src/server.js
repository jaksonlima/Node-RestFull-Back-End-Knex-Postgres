const appExpress = require("express")();
const routes = require("./routes");

appExpress.use(routes);

appExpress.listen("3333", () => console.log("start port: 3333"));

// # Parametros da requisição
// request.body
// request.headers
// request.params
// request.query
