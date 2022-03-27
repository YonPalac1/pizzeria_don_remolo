module.exports = router = require("express").Router();

// Controllers
const {
  addElement,
  getCart,
  delElement,
  delAll,
  orderMsg,
  moreQuantity,
  lessQuantity,
  commentAdd,
} = require("../controllers/apiCartController");

// Validations Middleware
const { existProductsCart } = require("../validations/errorHandler");

router
  // AGREGAR UN NUEVO PRODUCTO
  .post("/", addElement)

  // OBTENER LA INFORMACIÓN DE UN CARRITO DE COMPRA
  .get("/:id", getCart)

  // AUMENTAR LA CANTIDAD DEL PRODUCTO
  .post("/more", moreQuantity)

  // DISMINUIR LA CANTIDAD DEL PRODUCTO
  .post("/less", lessQuantity)

  // ELIMINAR UN PRODUCTO DEL CARRITO
  .delete("/", delElement)

  // ELIMINAR EL CARRITO
  .delete("/:id", delAll)

  // ENLACE PARA DIRECCIÓN A WHATSAPP
  .patch("/comment",commentAdd)

  // CREAR ORDEN - falta terminar
  .get("/order/:userId",existProductsCart ,orderMsg);

