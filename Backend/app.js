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
const usersRouter = require("./routes/users");
const drinksRoutes = require("./routes/drinks");
const cartRoutes = require("./routes/cart");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(fileUpload());


// Routes
app.use("/api/users", usersRouter);
app.use("/api/drinks", drinksRoutes);
app.use("/api/cart", cartRoutes);

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
