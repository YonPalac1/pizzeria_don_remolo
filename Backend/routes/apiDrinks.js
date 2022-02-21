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


/* ADMIN POST */
router
  .post("/drink/add", store)
  .put("/drink/update/:id", update)
  .delete("/drink/remove/:id", remove)
  .get("/drinks", allDrinks)
  .get("/drink/:id", detail);

module.exports = router;
