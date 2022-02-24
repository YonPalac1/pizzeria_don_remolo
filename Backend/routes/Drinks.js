module.exports = router = require("express").Router();

// Controllers
const {
  store,
  update,
  remove,
  all,
  detail,
} = require("../controllers/apiDrinksController");

// Validations Middleware
const {
  drinkValidator,
  indexValidation,
  checkDrink,
  checkObjectId,
} = require("../validations/indexValidations");

/* ADMIN POST */
router
  // Verb POST
  .post("/", drinkValidator, indexValidation, store)

  // Verb PUT
  .put("/:id", checkObjectId,checkDrink,drinkValidator, indexValidation, update)

  // Verb DELETE
  .delete("/:id",checkObjectId, checkDrink, indexValidation, remove)

  // Verbs GET
  .get("/", all)
  .get("/:id", checkObjectId,checkDrink, detail);
