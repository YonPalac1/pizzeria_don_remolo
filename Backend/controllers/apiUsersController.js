const User = require("../database/User");
const { hash } = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    try {
      const { email, name, password, rol } = req.body;
      const newUser = new User({
        // Creamos el usuario
        email,
        name,
        password: await hash(password, 10),
        rol,
        created_at: new Date(),
      });

      const user = await newUser.save(); // Lo guardamos en la base de datos

      return res.status(201).json({
        ok: true,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email }); // Esta función asíncrona nos devuelve un objeto con varias propiedades
      const {
        _doc: { password, ...rest }, // Hacemos una d-estructuración anidada para extraer primero el objeto "_doc" y luego la propiedad password y el parámetro ...rest (resto de propiedades)
      } = user;

      res.status(200).json({
        ok: true,
        data: rest, // Enviamos toda la información del cliente menos el password hashed
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },
};
