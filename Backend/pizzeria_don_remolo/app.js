require("dotenv").config(); // Configuración de variables de entorno.

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const path = require("path");
const app = express();
const mongooseConnection = require('./database/connection')

/////////////// Conexión a base de datos /////////////
mongooseConnection()
///////////////////////////////////////////////////

// Enrutadores
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Error 404 -  Not Found
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
 
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;
