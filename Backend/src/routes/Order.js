module.exports = router = require("express").Router();

// Controllers
const {
  store,
  cancel,
  enable,
  all,
} = require("../controllers/apiShippingController");

// Validations Middleware
const {
  orderValidator
} = require("../validations/orderValidator");

/* ADMIN POST */
router
  // Verbs GET
  .get("/", all)
  
  // Verb POST
  .post("/", orderValidator, store)

  // Verb DELETE
  .patch("/cancel/:id", cancel)

  // Verb DELETE
  .patch("/enable/:id", enable);
