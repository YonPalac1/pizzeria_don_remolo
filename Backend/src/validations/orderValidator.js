const { body } = require("express-validator");

const orderValidator = [
  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .not().isNumeric()
    .withMessage("Nombre tiene que ser una cadena de texto")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Nombre debe tener más de 3 caracteres"),

  body("lastname")
    .notEmpty()
    .withMessage("Apellido requerido")
    .not().isNumeric()
    .withMessage("Apellido tiene que ser una cadena de texto")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Apellido debe tener más de 3 caracteres"),

  body("celphone")
    .notEmpty()
    .withMessage("Celular requerido")
    .bail()
    .isNumeric()
    .withMessage("Celular tiene que ser un número"),

  body("address")
    .notEmpty()
    .isAlphanumeric()
    .isLength({
       min: 4
     })
  .withMessage('Debes ingresar una dirección'),

  body("note")
    .optional({ nullable: true })
    .isAlphanumeric(),

  body("total")
    .notEmpty()
    .withMessage("Monto requerido")
    .bail()
    .isNumeric()
    .withMessage("Total tiene que ser un número"),

  
];



module.exports = { orderValidator };