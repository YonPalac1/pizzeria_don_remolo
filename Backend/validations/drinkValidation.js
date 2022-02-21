const { body } = require("express-validator");
const Drink = require("../database/Drink");

module.exports = [
  body("brand")
    .notEmpty()
    .withMessage("Marca requerido")
    .not().isNumber()
    .withMessage("Marca tiene que ser un texto")
    .bail()
    .custom(async (value) => {
      const email = await User.findOne({ email: value });
      return email && Promise.reject("Email ya esta registrado");
    }),

  body("title")
    .notEmpty()
    .withMessage("Titulo requerido")
    .not().isNumber()
    .withMessage("Titulo tiene que ser un texto")
    .bail()
    .isLength({ max: 15 })
    .withMessage("Titulo demasiado largo"),

  body("measurement")
    .notEmpty()
    .withMessage("Elige una medición")
    .bail()
    .isString()
    .withMessage("Medición tiene que ser un texto"),

  body("size")
    .notEmpty()
    .withMessage("Tamaño requerido")
    .isNumeric()
    .withMessage("Tamaño tiene que ser un número")
    .bail()
    .isIn([1, 2]) 
    .withMessage("Rol tiene que ser 1 o 2"),

  body("show")
    .notEmpty()
    .withMessage("Rol requerido")
    .isNumeric()
    .withMessage("Rol tiene que ser un número")
    .bail()
    .isIn([1, 2]) 
    .withMessage("Rol tiene que ser 1 o 2"),
    
  body("available")
    .notEmpty()
    .withMessage("Rol requerido")
    .isNumeric()
    .withMessage("Rol tiene que ser un número")
    .bail()
    .isIn([1, 2]) // 1 = Dueño y 2 = Encargado
    .withMessage("Rol tiene que ser 1 o 2"),
  body("price")
    .notEmpty()
    .withMessage("Rol requerido")
    .isNumeric()
    .withMessage("Rol tiene que ser un número")
    .bail()
    .isIn([1, 2]) // 1 = Dueño y 2 = Encargado
    .withMessage("Rol tiene que ser 1 o 2"),
  body("category")
    .notEmpty()
    .withMessage("Rol requerido")
    .isNumeric()
    .withMessage("Rol tiene que ser un número")
    .bail()
    .isIn([1, 2]) // 1 = Dueño y 2 = Encargado
    .withMessage("Rol tiene que ser 1 o 2"),
];
