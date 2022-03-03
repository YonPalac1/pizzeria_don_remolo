const Drink = require("../database/Drink");
const path = require("path");
const { validationResult } = require("express-validator");
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

    // get errors from express-validator
    const errors = validationResult(req);
    const errorsArr = errors.mapped(); // The mapped

    if (arrImages) {
      // If the value is truthy
      arrFilename = arrImages.map(
        // Mapped the filenames get the path complete
        (file) => `${new Date().getTime()}_${file.name}`
      );
    }

    try {
      const newDrink = new Drink({
        // We create a new drink
        ...req.body,
        image: files ? arrFilename : ["default.png"],
      });

      // Save the drink in database
      const drink = await newDrink.save();

      // Save archives of images
      arrFilename.forEach((name) => {
        files &&
          arrImages.forEach(async (file) => await file.mv(getPath(name)));
      });

      res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
          msg: "Bebida ingresada",
        },
        data: drink,
        errors: null,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
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
          brand: brand ? brand : drinkBefore.brand,
          price: price ? +price : +drinkBefore.price,
          title: title ? title : drinkBefore.title,
          size: size ? size : drinkBefore.size,
          measurement: measurement ? measurement : drinkBefore.measurement,
          category: category ? category : drinkBefore.category,
          show: show ? +show : +drinkBefore.show,
          available: available ? +available : +drinkBefore.available,
          image: files ? arrFilename : drinkBefore.image,
        },
        {
          multi: true,
        }
      );

      const drinkAfter = await Drink.findOne({ _id: req.params.id }); // Search the drink after

      let existsFileBefore = await Promise.all(
        // example [true ,true ,true]
        // The promises returns us a array with values booleans
        drinkBefore.image // In the drink before we mapped
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
          drinkBefore.image // In the drink before we iterate
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
  remove: async (req, res) => {
    try {
      const { id: _id } = req.params;
      const drink = await Drink.findById(_id);

      await Drink.remove({ _id });

      let existsFileBefore = await Promise.all(
        // example [true ,true ,true] (true for each file)
        // The promises returns us a array with values booleans
        drink.image // In the drink before we mapped
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
          drink.image // In the drink before we iterate
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
      let drinks = await Drink.find();
      if (show) {
        drinks = await Drink.find({ show });
      }

      if (category) {
        drinks = await Drink.find({ category });
      }

      if (available) {
        drinks = await Drink.find({ available });
      }

      if (show && category) {
        drinks = await Drink.find({ $and: [{ show }, { category }] });
      } //

      if (show && available) {
        drinks = await Drink.find({ $and: [{ show }, { available }] });
      }

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
          show,
        }) => ({
          _id,
          brand,
          size,
          measurement,
          price,
          description,
          image,
          category,
          show,
        })
      );

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
        data: drinksMapped,
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
      const {
        _id,
        brand,
        size,
        measurement,
        price,
        description,
        image,
        category,
        show,
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
        show,
      };

      res.status(200).json({
        // Response from Api if all out good
        ok: true,
        data: drink,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        errors: { msg: error.message },
      });
    }
  },

  deletedAll: async (req, res) => {
    await Drink.deleteMany();
  },
};
