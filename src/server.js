const express = require("express");
const appExpress = express();
const routes = require("./routes");

const PORT = 3333;

appExpress.use(express.json());
appExpress.use(routes);

// catch all erros Middleware
appExpress.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({ status, error: error.message });
});

// NotFound
appExpress.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

appExpress.listen(PORT, () => console.log(`Server is running port ${PORT}`));

// # Parametros da requisição
// request.body
// request.headers
// request.params
// request.query
