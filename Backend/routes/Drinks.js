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
const drinkAddValidation = require("../validations/drinkValidation");

/* ADMIN POST */
router

  // Verb POST
  .post("/add", drinkAddValidation, store)
  
  // Verb PUT
  .put("/update/:id", drinkAddValidation, update)
  
  // Verb DELETE
  .delete("/remove/:id", remove)

  // Verbs GET
  .get("/", all)
  .get("/:id", detail);