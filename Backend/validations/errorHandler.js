const { validationResult } = require("express-validator");

const { loginValidator } = require("./loginValidator");
const { registerValidator } = require("./registerValidator");
const { drinkValidator } = require("./drinkValidator");
const { foodValidator } = require("./foodValidator");
const { foodValidatorUpdate, checkFood } = require("./foodValidatorUpdate");
const { drinkValidatorUpdate, checkDrink } = require("./drinkValidatorUpdate");
const Cart = require("../database/Cart");

const errorHandler = (req, res, next) => {
  // Constant variables
  const errors = validationResult(req);
  const errorsObjects = errors.mapped();

  if (!errors.isEmpty()) {
    for (key in errorsObjects) {
      delete errorsObjects[key].param;
      delete errorsObjects[key].location;
    }

    return res.status(422).json({
      meta: {
        status: 422,
        ok: false,
      },
      data: null,
      errors: errorsObjects,
    });
  }
  next();
};

const checkObjectId = (req, res, next) => {
  const { isValid } = require("mongoose").Types.ObjectId;

  if (!isValid(req.params.id)) {
    return res.status(422).json({
      meta: {
        status: 422,
        ok: false,
      },
      data: null,
      errors: { msg: "El id es invalido" },
    });
  }
  next();
};

const existProductsCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
  if (cart.foods.length || cart.drinks.length) {
    req.cart = cart
    return next()
  }
  res.status(400).json({
    ok: false,
    errors: { msg: "No existen productos en el carrito de compra" }
  });
  } catch (error) {
    res.status(500).json({
      ok: false
    });
  }
  
};

module.exports = {
  loginValidator,
  registerValidator,
  drinkValidator,
  errorHandler,
  checkDrink,
  checkObjectId,
  foodValidator,
  checkFood,
  foodValidatorUpdate,
  drinkValidatorUpdate,
  existProductsCart,
};
