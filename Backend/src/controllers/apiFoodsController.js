const Food = require("../database/Food");
const { uploadInBucket } = require("../helpers/upload-S3");

module.exports = {
  store: async (req, res) => {
    let files = [req.files.image]
        .flat(3)
        .map(async (file) => await uploadInBucket(file));
      files = await(await Promise.all(files)).map((file) => file.Location);

    try {
      const newFood = new Food({
        // We create a new food
        ...req.body,
        image: files || ["https://ayudawp.com/wp-content/uploads/2016/01/icono-enlace-roto.png"],
      });

      // Save the food in database
      await newFood.save();

      res.status(201).json({
        // Response from Api if all out good
        ok: true,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(503).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },

  update: async (req, res) => {
    try {
      let files = [req.files.image]
          .flat(3)
          .map(async (file) => await uploadInBucket(file));
        files = await(await Promise.all(files)).map((file) => file.Location);
      const foodBefore = await Food.findOne({ _id: req.params.id }); // Search the food before

      const {
        name,
        price,
        description,
        measurement,
        category,
        available,
      } = req.body;

      await Food.findOneAndUpdate(
        { _id: req.params.id },
        {
          name: name || foodBefore.name,
          price: price || +foodBefore.price,
          description: description || foodBefore.description,
          measurement: measurement || foodBefore.measurement,
          category: category || foodBefore.category,
          available: available || +foodBefore.available,
          image: files || foodBefore.image,
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
      res.status(503).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },

  remove: async (req, res) => {
    try {
      const { id: _id } = req.params;
      await Food.remove({ _id });

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

  all: async (req, res) => {
    const { show, category, available } = req.query;
    try {
      let foods = await Food.find();

      if (show) {
        foods = await Food.find({ show });
      }

      if (category) {
        foods = await Food.find({ category });
      }

      if (available) {
        foods = await Food.find({ available });
      }

      if (show && category) {
        foods = await Food.find({ $and: [{ show }, { category }] });
      }

      if (show && available) {
        foods = await Food.find({ $and: [{ show }, { available }] });
      }

      const foodsMapped = foods.map(
        ({ _id, measurement, price, description, image, category, name }) => ({
          _id,
          name,
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
        data: foodsMapped,
      });
    } catch (error) {
      res.status(500).json({
          ok: false,
        errors: { msg: error.message },
      });
    }
  },

  detail: async (req, res) => {
    try {
      const { _id, measurement, price, description, image, category, name } =
        await Food.findById(req.params.id); // Return us one food

      let food = {
        _id,
        name,
        measurement,
        price,
        description,
        category,
        image,
      };

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
        data: food,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },

  deletedAll: async (req, res) => {
    await Food.deleteMany();
  },
};
