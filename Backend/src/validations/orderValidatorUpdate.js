const ShippingTicket = require("../database/ShippingTicket");


const checkTicket = async (req, res, next) => {
  const ticket = await ShippingTicket.findById(req.params.id);
  if (!ticket) {
    return res.status(422).json({
      ok: false,
      errors: { msg: "El alimento no existe" },
    });
  }

  next();
};

module.exports = { checkTicket };
