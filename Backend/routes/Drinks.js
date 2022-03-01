module.exports = router = require("express").Router();

// Controllers
const {
  store,
  update,
  remove,
  all,
  detail,
  deletedAll,
} = require("../controllers/apiDrinksController");

// Validations Middleware
const {
  drinkValidator,
  errorHandler,
  checkDrink,
  checkObjectId,
} = require("../validations/errorHandler");

/* ADMIN POST */
router
  // Verb POST
  .post("/", drinkValidator, errorHandler, store)

  // Verb PUT
  .put(
    "/:id",
    checkObjectId,
    checkDrink,
    drinkValidator,
    errorHandler,
    update
  )

  // Verb DELETE
  .delete("/:id", checkObjectId, checkDrink, errorHandler, remove)
    .delete("/",deletedAll)
  // Verbs GET
  .get("/", all)
  .get("/:id", checkObjectId, checkDrink, detail);
    