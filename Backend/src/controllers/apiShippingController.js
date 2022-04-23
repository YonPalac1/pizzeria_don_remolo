const ShippingTicket = require("../database/ShippingTicket");
const { uploadInBucket } = require("../helpers/upload-S3");

module.exports = {
  store: async (req, res) => {
    try {
      const { name, lastname, celphone, address, menu, note, total } = req.body;
      const shipping = new ShippingTicket({
        name,
        lastname,
        celphone,
        address,
        menu,
        note,
        total,
      });

      await shipping.save();

      res.status(201).json({ ok: true, msg: "Pedido realizado" });
    } catch (error) {
      res.status(500).json({ ok: false, msg: error.message });
    }
  },

  cancel: async (req, res) => {
    try {
      const { id } = req.params;
      await ShippingTicket.findOneAndUpdate(
        { _id: id },
        { status: 2 }
      );
      res.status(200).json({ ok: true, msg: "Pedido cancelado" });
    } catch (error) {
      res.status(500).json({ ok: false, msg: error.message });
    }
  },

  enable: async (req, res) => {
    try {
      const { id } = req.params;
      await ShippingTicket.findOneAndUpdate(
        { _id: id },
        { status: 1 }
      );
      res.status(200).json({ ok: true, msg: "Pedido habilitado" });
    } catch (error) {
      res.status(500).json({ ok: false, msg: error.message });
    }
  },

  all: async (req, res) => {
    try {
      const shippings = await ShippingTicket.find();
      res.status(200).json({ ok: true, result: shippings });
    } catch (error) {
      res.status(500).json({ ok: false, msg: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const { id: _id } = req.params;
      await ShippingTicket.remove({ _id });

      res.status(200).json({
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },
};


