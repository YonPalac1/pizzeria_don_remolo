const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
// settings
const app = express();
const port = process.env.PORT || 9000;

// Routers
const usersRoutes = require("./src/routes/Users");
const drinksRoutes = require("./src/routes/Drinks");
const cartRoutes = require("./src/routes/Cart");
const foodsRoutes = require("./src/routes/Foods");
const shippingRoutes = require("./src/routes/Order");


// middlewares
app.use("/api", usersRoutes);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); 
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/drinks", drinksRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/foods", foodsRoutes);
app.use("/api/order", shippingRoutes);


app.use("/*", (req, res) => {
  res.status(404).json({
    ok:false,
    status: 404,
    msg: "Not found",
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

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@api-pizzeria.1bgkr.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

// mongodb connection
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

//