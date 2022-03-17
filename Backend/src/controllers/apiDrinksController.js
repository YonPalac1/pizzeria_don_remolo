const Drink = require("../database/Drink");
const { uploadInBucket } = require("../helpers/upload-S3");

module.exports = {
  store: async (req, res) => {
    try {
      let files = [req.files.image]
        .flat(3)
        .map(async (file) => await uploadInBucket(file));
      files = await(await Promise.all(files)).map((file) => file.Location);
      const newDrink = new Drink({
        // We create a new drink
        ...req.body,
        image: files || [
          "https://ayudawp.com/wp-content/uploads/2016/01/icono-enlace-roto.png",
        ],
      });

      // Save the drink in database
      await newDrink.save();

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      let files = [req.files.image]
      .flat(3)
      .map(async (file) => await uploadInBucket(file));
    files = await(await Promise.all(files)).map((file) => file.Location);
      const drinkBefore = await Drink.findOne({ _id: req.params.id }); // Search the drink before

      const {
        brand,
        price,
        title,
        measurement,
        category,
        show,
        available,
        size,
      } = req.body;

      // If don't have errors
      await Drink.findOneAndUpdate(
        { _id: req.params.id },
        {
          brand: brand || drinkBefore.brand,
          price: price || +drinkBefore.price,
          title: title || drinkBefore.title,
          size: size || drinkBefore.size,
          measurement: measurement || drinkBefore.measurement,
          category: category || drinkBefore.category,
          show: show || +drinkBefore.show,
          available: available || +drinkBefore.available,
          image: files || drinkBefore.image,
        },
        {
          multi: true,
        }
      );

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { id: _id } = req.params;
      await Drink.remove({ _id });

      res.status(200).json({
        ok: true,
      });

    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },
  all: async (req, res) => {
    const { show, available } = req.query;
    try {
      let drinks = await Drink.find();

      if (show) drinks = await Drink.find({ show });

      if (available) drinks = await Drink.find({ available });

      if (show && available)
        drinks = await Drink.find({ $and: [{ show }, { available }] });

      const drinksMapped = drinks.map(
        ({
          _id,
          brand,
          size,
          measurement,
          price,
          description,
          image,
          category,
        }) => ({
          _id,
          brand,
          size,
          measurement,
          price,
          description,
          image,
          category,
        })
      );

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
        data: drinksMapped,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },
  detail: async (req, res) => {
    try {
      const {
        _id,
        brand,
        size,
        measurement,
        price,
        description,
        image,
        category,
      } = await Drink.findById(req.params.id); // Return us one drink

      let drink = {
        _id,
        brand,
        size,
        measurement,
        price,
        description,
        image,
        category,
      };

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
        data: drink,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },
  deletedAll: async (req, res) => {
    await Drink.deleteMany();
  },
};
