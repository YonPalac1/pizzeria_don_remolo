const router = require("express").Router();

// Controllers
const {
  store,
  update,
  remove,
  allDrinks,
  detail,
} = require("../controllers/apiDrinksController");

// Validations Middleware
const drinkAddValidation = require("../validations/drinkValidation");

/* ADMIN POST */
router
  .post("/add", drinkAddValidation, store)
  .put("/update/:id", update)
  .delete("/remove/:id", remove)
  .get("/", allDrinks)
  .get("/:id", detail);

module.exports = router;
