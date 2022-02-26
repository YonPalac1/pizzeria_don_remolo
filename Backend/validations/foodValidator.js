const { body } = require("express-validator");
const Drink = require("../database/Drink");
const Food = require("../database/Food");

const foodValidator = [
  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .not()
    .isNumeric()
    .withMessage("Nombre tiene que ser un texto"),

  body("price")
    .notEmpty()
    .withMessage("Precio requerido")
    .isNumeric()
    .withMessage("Precio tiene que ser un numero"),

  body("description")
    .notEmpty()
    .withMessage("Descripción requerida")
    .bail()
    .isString()
    .withMessage("Descripción tiene que ser un texto"),

  body("measurement")
    .optional({ nullable: true })
    .isString()
    .withMessage("Medición tiene que ser un texto")
    .bail()
    .isIn(["1", "12", "6", "1/4", "1/2", ])
    .withMessage("Medición incorrecta ( '1', '12', '6', '1/4', '1/2')"),

  body("preparationTimeMin")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("El tiempo tiene que ser numérico"),

  body("category")
    .isString()
    .withMessage("Categoría tiene que ser un texto")
    .bail()
    .isIn(["pizzas", "empanadas", "postres"])
    .withMessage("Categorías invalidas ( 'pizzas', 'empanadas', 'postres' )"),

  body("show")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("Mostrar tiene que ser un número")
    .bail()
    .isIn([0, 1])
    .withMessage("Mostrar es invalido ( 0 , 1 )"),

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
      meta: {
        status: 422,
        ok: false,
      },
      data: null,
      errors: { msg: "El alimento no existe" },
    });
  }

  next();
};

module.exports = { foodValidator, checkFood };
