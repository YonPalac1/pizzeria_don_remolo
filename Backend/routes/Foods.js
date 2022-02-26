module.exports = router = require("express").Router();

// Controllers
const {
  store,
  update,
  remove,
  all,
  detail,
} = require("../controllers/apiFoodsController");

// Validations Middleware

/* ADMIN POST */
router
  // Verb POST
  .post("/", store)

  // Verb PUT
  .put(
    "/:id",
    update
  )

  // Verb DELETE
  .delete("/:id", remove)

  // Verbs GET
  .get("/", all)
  .get("/:id", detail);