const { body } = require("express-validator");
const User = require("../database/User");

const registerValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email requerido")
    .isEmail()
    .withMessage("Email invalido")
    .bail()
    .custom(async (value) => {
      const email = await User.findOne({ email: value });
      return email && Promise.reject("Email ya esta registrado");
    }),

  body("password")
    .notEmpty()
    .withMessage("Contraseña requerida")
    .isString()
    .withMessage("Contraseña tiene que ser una cadena de texto")
    .bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener más de 5 caracteres"),

  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .not().isNumeric()
    .withMessage("Nombre tiene que ser una cadena de texto")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Nombre debe tener más de 3 caracteres"),

  body("rol")
    .notEmpty()
    .withMessage("Rol requerido")
    .isNumeric()
    .withMessage("Rol tiene que ser un número")
    .bail()
    .isIn([1, 2]) // 1 = Dueño y 2 = Encargado
    .withMessage("Rol tiene que ser 1 o 2"),
];

module.exports ={
  registerValidator
}