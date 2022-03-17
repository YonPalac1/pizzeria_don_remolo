const Food = require("../database/Food");
const path = require("path");
const { unlinkSync, existsSync } = require("fs");

const getPath = (
  filename // Function that return a path by every filename
) => path.join(__dirname, "../public/archives/images/", filename);

module.exports = {
  store: async (req, res) => {
    // Constant variables
    const files = req.files?.image;
    const arrImages = files ? [files].flat(2) : null;
    let arrFilename = [];

    if (arrImages) {
      // If the value is truthy
      arrFilename = arrImages.map(
        // Mapped the filenames get the path complete
        (file) => `${new Date().getTime()}_${file.name}`
      );
    }

    try {
      const newFood = new Food({
        // We create a new food
        ...req.body,
        image: files ? arrFilename : ["default.png"],
      });

      // Save the food in database
      const food = await newFood.save();

      // Save archives of images
      arrFilename.forEach((name) => {
        files &&
          arrImages.forEach(async (file) => await file.mv(getPath(name)));
      });

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
    // Constant variables
    const files = req.files?.image;
    const arrImages = files ? [files].flat(2) : null;
    let arrFilename = [];

    // Mapped the filenames
    if (arrImages) {
      // If the value is truthy
      arrFilename = arrImages.map(
        (file) => `${new Date().getTime()}_${file.name}`
      );
    }

    try {
      const foodBefore = await Food.findOne({ _id: req.params.id }); // Search the food before

      const {
        name,
        price,
        description,
        measurement,
        category,
        show,
        available,
      } = req.body;

      await Food.findOneAndUpdate(
        { _id: req.params.id },
        {
          name: name ? name : foodBefore.name,
          price: price ? +price : +foodBefore.price,
          description: description ? description : foodBefore.description,
          measurement: measurement ? measurement : foodBefore.measurement,
          category: category ? category : foodBefore.category,
          show: show ? +show : +foodBefore.show,
          available: available ? +available : +foodBefore.available,
          image: files ? arrFilename : foodBefore.image,
        },
        {
          multi: true,
        }
      );

      let existsFileBefore = await Promise.all(
        // example [true ,true ,true]
        // The promises returns us a array with values booleans
        foodBefore.image // In the food before we mapped
          .map((filenameBefore) =>
            existsSync(
              // Enter a path
              getPath(filenameBefore) // Get path to directory specify
            )
          )
      );

      // Method .every() return us a boolean according to its condition in callback
      existsFileBefore = existsFileBefore.every((isTrue) => isTrue);

      // Delete archives before
      if (files && existsFileBefore) {
        await Promise.all(
          foodBefore.image // In the food before we iterate
            .map((filenameBefore) =>
              unlinkSync(
                // Enter a path
                getPath(filenameBefore) // Get path to directory specify
              )
            )
        );
      }

      // Save archives of images
      arrFilename.forEach((name) => {
        files &&
          arrImages.forEach(async (file) => await file.mv(getPath(name)));
      });

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
      const food = await Food.findById(_id);

      await Food.remove({ _id });

      let existsFileBefore = await Promise.all(
        // example [true ,true ,true] (true for each file)
        // The promises returns us a array with values booleans
        food.image // In the food before we mapped
          .map((filenameBefore) =>
            existsSync(
              // Enter a path
              getPath(filenameBefore) // Get path to directory specify
            )
          )
      );

      // Method .every() return us a boolean according to its condition in callback
      existsFileBefore = existsFileBefore.every((isTrue) => isTrue);

      // Delete archives before
      if (existsFileBefore) {
        await Promise.all(
          food.image // In the food before we iterate
            .map((filenameBefore) =>
              unlinkSync(
                // Enter a path
                getPath(filenameBefore) // Get path to directory specify
              )
            )
        );
      }

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
        meta: {
          ok: false,
          status: 500,
        },
        data: null,
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
