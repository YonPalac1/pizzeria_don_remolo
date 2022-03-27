module.exports = router = require("express").Router();

// Controllers
const {
  store,
  cancel,
  enable,
  all,
} = require("../controllers/apiShippingController");

/* ADMIN POST */
router
  // Verbs GET
  .get("/", all)
  
  // Verb POST
  .post("/", store)

  // Verb DELETE
  .patch("/cancel/:id", cancel)

  // Verb DELETE
  .patch("/enable/:id", enable);
