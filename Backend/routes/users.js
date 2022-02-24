const router = require("express").Router();

// Controllers
const { login, register } = require("../controllers/apiUsersController");

// Validations Middleware
const {
  loginValidator,
  registerValidator,
  errorHandler,
} = require("../validations/errorHandler");

/* ADMIN POST */
router
  .post("/login", loginValidator, errorHandler, login)
  .post("/register", registerValidator, errorHandler, register);

module.exports = router;
