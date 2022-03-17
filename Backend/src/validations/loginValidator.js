const { body } = require("express-validator");
const { compare } = require("bcrypt");
const User = require("../database/User");

const loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email requerido")
    .bail()
    .isEmail()
    .withMessage("Email invalido")
    .bail()
    .custom(async (value) => {
      const email = await User.findOne({email:value});
      return !email && Promise.reject("Email no registrado");
    }),

  body("password")
    .notEmpty()
    .withMessage("Contraseña requerida")
    .bail()
    .custom(async (value, {req}) => {
      const user = await User.findOne({email: req.body.email});
      if (user) {
        const passwordTrue = await compare(value, user.password);
        return !passwordTrue && Promise.reject("El email o la contraseña son incorrectas");
      }
    })
];

module.exports = {
  loginValidator
}
