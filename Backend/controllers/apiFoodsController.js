const Food = require("../database/Food");
const path = require("path");
const { unlinkSync, existsSync } = require("fs");
const res = require("express/lib/response");

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
        meta: {
          ok: true,
          status: 200,
          msg: "comida ingresada",
        },
        data: food,
        errors: null,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(503).json({
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
      const foodBefore = await Food.findOne({ _id: req.params.id }); // Search the food before

      await Food.updateOne(
        { _id: req.params.id },
        { ...req.body, image: files ? arrFilename : this.image }
      );

      const foodAfter = await Food.findOne({ _id: req.params.id }); // Search the food after

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
        meta: {
          ok: true,
          status: 200,
          msg: "Comida ingresada",
        },
        data: foodAfter,
        errors: null,
      });
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(503).json({
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
        meta: {
          status: 200,
          ok: true,
        },
        data: food,
        errors: null,
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
  all: async (req, res) => {
    try {
      const foods = await Food.find(); // Return us all foods

      res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
          msg: "Todas las comidas",
        },
        data: foods,
        errors: null,
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
      const food = await Food.findById(req.params.id); // Return us one food

      res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
        },
        data: food,
        errors: null,
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
  getAllCategory: async (req, res) => {
    try {
      const foodsForCategory = await Food.find({
        category: req.params.category,
      });
      res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
          msg: "Todas las comidas por categoría",
        },
        data: foodsForCategory,
        errors: null,
      });
    } catch (error) {
      res.status(503).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 503,
          msg: "Fallo en el servidor",
        },
        data: null,
        errors: error,
      });
    }
  },
};
