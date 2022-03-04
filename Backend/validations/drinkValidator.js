const { body } = require("express-validator");

const drinkValidator = [
  body("brand")
    .notEmpty()
    .withMessage("Marca requerida")
    .not()
    .isNumeric()
    .withMessage("Marca tiene que ser un texto"),

  body("title")
    .notEmpty()
    .withMessage("Titulo requerido")
    .not()
    .isNumeric()
    .withMessage("Titulo tiene que ser un texto")
    .bail()
    .isLength({ max: 15 })
    .withMessage("Titulo demasiado largo"),

  body("measurement")
    .notEmpty()
    .withMessage("Medición requerida")
    .bail()
    .isString()
    .withMessage("Medición tiene que ser un texto")
    .isIn(["l", "ml"])
    .withMessage("Medición invalida ( l y ml )"),

  body("size")
    .notEmpty()
    .withMessage("Tamaño requerido")
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
    .notEmpty()
    .withMessage("Precio requerido")
    .bail()
    .isNumeric()
    .withMessage("Precio tiene que ser un número"),

  body("category")
    .notEmpty()
    .withMessage("Categoría requerido")
    .bail()
    .not()
    .isNumeric()
    .withMessage("Categoría tiene que ser un texto"),
];



module.exports = { drinkValidator };
