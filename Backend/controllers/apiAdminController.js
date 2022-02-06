const User = require("../database/User");
const { hash } = require("bcrypt");
const { validationResult } = require("express-validator");

const getUrl = (req) => {
  return `${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = {
  adminLogin: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const { email } = req.body;
        const userFound = await User.findOne({ email });
        res.status(200).json({
          meta: {
            status: 200,
            ok: true,
          },
          data: userFound,
        });
      } catch (error) {
        res.status(404).json({
          meta: {
            status: 404,
            ok: false,
            msg: error.message,
          },
        });
      }
    } else {
      const errorsObj = errors.mapped();
      for (key in errorsObj) {
        delete errorsObj[key].param;
        delete errorsObj[key].location;
      }
      res.status(400).json({
        error: true,
        errors: errorsObj,
      });
    }
  },
  adminRegister: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const { email, name, password, rol } = req.body;
        const newUser = new User({
          email,
          name,
          password: await hash(password, 10),
          rol,
          created_at: new Date(),
        });
        const user = await newUser.save();

        res.status(200).json({
          meta: {
            ok: true,
            status: 200,
            msg: "Usuario creado con existo",
          },
          data: user,
        });
      } catch (error) {
        res.status(404).json({
          meta: {
            ok: false,
            status: 404,
            msg: error.message,
          },
        });
      }
    } else {
      
      const errorsObj = errors.mapped();
      for (key in errorsObj) {
        delete errorsObj[key].param;
        delete errorsObj[key].location;
      }
      res.status(400).json({
        error: true,
        errors: errorsObj,
      });
    }
  },
};
