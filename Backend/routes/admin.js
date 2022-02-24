const router = require("express").Router();

// Controllers
const { login, register } = require("../controllers/apiAdminController");

// Validations Middleware
const {
  loginValidator,
  registerValidator,
  indexValidation,
} = require("../validations/indexValidations");

/* ADMIN POST */
router
  .post("/login", loginValidator, indexValidation, login)
  .post("/register", registerValidator, indexValidation, register);

module.exports = router;
