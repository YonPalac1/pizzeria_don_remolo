module.exports = router = require("express").Router();

// Controllers
const {
  store,
  cancel,
  enable,
  all,
  remove,
  update
} = require("../controllers/apiShippingController");

// Validations Middleware
const {
  orderValidator
} = require("../validations/orderValidator");

const {
  checkTicket,
} = require("../validations/orderValidatorUpdate")
const {
  checkObjectId,
} = require("../validations/errorHandler");

/* ADMIN POST */
router
  // Verbs GET
  .get("/", all)
  
  // Verb POST
  .post("/", orderValidator, store)

  // Verb DELETE
  .patch("/cancel/:id", cancel)

  // Verb DELETE
  .patch("/enable/:id", enable)

  .delete("/remove/:id", checkObjectId, checkTicket, remove);
