const { body } = require("express-validator");
const Drink = require("../database/Drink");

const drinkValidatorUpdate = [
  body("brand")
    .optional({ nullable: true })
    .not()
    .isNumeric()
    .withMessage("Marca tiene que ser un texto"),

  body("title")
    .optional({ nullable: true })
    .not()
    .isNumeric()
    .withMessage("Titulo tiene que ser un texto")
    .bail()
    .isLength({ max: 15 })
    .withMessage("Titulo demasiado largo"),

  body("measurement")
    .optional({ nullable: true })
    .bail()
    .isString()
    .withMessage("Medición tiene que ser un texto")
    .isIn(["l", "ml"])
    .withMessage("Medición invalida ( l y ml )"),

  body("size")
    .optional({ nullable: true })
    .bail()
    .isNumeric()
    .withMessage("Tamaño tiene que ser un número"),

  body("show")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("Mostrar tiene que ser un número")
    .bail()
    .isIn([0, 1])
    .withMessage("Mostrar es invalido"),

  body("available")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("Disponible tiene que ser un número")
    .bail()
    .isIn([0, 1])
    .withMessage("Disponible es invalido"),

  body("price")
    .optional({ nullable: true })
    .bail()
    .isNumeric()
    .withMessage("Precio tiene que ser un número"),

  body("category")
    .optional({ nullable: true })
    .bail()
    .not()
    .isNumeric()
    .withMessage("Categoría tiene que ser un texto"),
];

const checkDrink = async (req, res, next) => {
  const drink = await Drink.findById(req.params.id);
  if (!drink) {
    return res.status(422).json({
      ok: false,
      msg: "La bebida no existe",
    });
  }

  next();
};

module.exports = { drinkValidatorUpdate, checkDrink };
