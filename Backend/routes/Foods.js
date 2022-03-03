module.exports = router = require("express").Router();

// Controllers
const {
  store,
  update,
  remove,
  all,
  detail,
  getAllCategory,
} = require("../controllers/apiFoodsController");
const {
  checkObjectId,
  checkFood,
  foodValidator,
  errorHandler,
  foodValidatorUpdate,
} = require("../validations/errorHandler");

// Validations Middleware

/* ADMIN POST */
router
  // Verb POST
  .post("/", foodValidator, errorHandler, store)

  // Verb PUT
  .patch(
    "/:id",
    checkObjectId,
    checkFood,
    foodValidatorUpdate,
    errorHandler,
    update
  )

  // Verb DELETE
  .delete("/:id", checkObjectId, checkFood, remove)

  // Verbs GET
  .get("/", all)

  .get("/:id", checkObjectId, checkFood, detail)
