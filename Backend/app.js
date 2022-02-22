require("dotenv").config(); // Setting environment variables

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const path = require("path");
const app = express();
const mongooseConnection = require("./database/connection");
const cors = require("cors");
const fileUpload = require("express-fileupload");

/////////////// Connection to database /////////////
mongooseConnection();
///////////////////////////////////////////////////

// Routers
const adminRouter = require("./routes/admin");
const apiDrinksRoutes = require("./routes/drinks");
const { body } = require("express-validator");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(fileUpload());


// Routes
app.use("/api/admin", adminRouter);
app.use("/api/drinks", apiDrinksRoutes);

app.use("/*", (req, res) => {
  res.status(404).json({
    status: 404,
    error: "Not found",
  });
});

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
