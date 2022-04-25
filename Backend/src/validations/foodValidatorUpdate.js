const { body } = require("express-validator");
const Food = require("../database/Food");

const foodValidatorUpdate = [
  body("name")
    .optional({ nullable: true })
    .not()
    .isNumeric()
    .withMessage("Nombre tiene que ser un texto"),

  body("price")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("Precio tiene que ser un numero"),

  body("description")
    .optional({ nullable: true })
    .bail()
    .isString()
    .withMessage("Descripción tiene que ser un texto"),

  body("measurement")
    .optional({ nullable: true })
    .isString()
    .withMessage("Medición tiene que ser un texto")
    .bail()
    .isIn(["1", "12", "6", "1/4", "1/2"])
    .withMessage("Medición incorrecta ( '1', '12', '6', '1/4', '1/2')"),

  body("preparationTimeMin")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("El tiempo tiene que ser numérico"),

  body("category")
    .optional({ nullable: true })
    .isString()
    .withMessage("Categoría tiene que ser un texto")
    .bail()
    .isIn(["pizzas", "empanadas", "postres"])
    .withMessage("Categorías invalidas ( 'pizzas', 'empanadas', 'postres' )"),

  body("available")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("Disponible tiene que ser un número")
    .bail()
    .isIn([0, 1])
    .withMessage("Disponible es invalido ( 0 , 1 )"),
];

const checkFood = async (req, res, next) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(422).json({
      ok: false,
      errors: { msg: "El alimento no existe" },
    });
  }

  next();
};

module.exports = { foodValidatorUpdate, checkFood };
