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
          msg: "Error del servidor",
        },
        data: null,
        errors: error,
      });
    }
  },
  update: async (req, res) => {
    // Constant variables
    const files = req.files?.image;
    const arrImages = files ? [files].flat(2) : null;
    let arrFilename = [];

    // get errors from express-validator
    const errors = validationResult(req);
    const errorsArr = errors.mapped(); // The mapped

    // Mapped the filenames
    if (arrImages) {
      // If the value is truthy
      arrFilename = arrImages.map(
        (file) => `${new Date().getTime()}_${file.name}`
      );
    }

    try {
        const drinkBefore = await Drink.findOne({ _id: req.params.id }); // Search the drink before

        // If don't have errors
        await Drink.updateOne(
          { _id: req.params.id },
          { ...req.body, image: files ? arrFilename : this.image }
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
          meta: {
            ok: true,
            status: 200,
            msg: "Bebida ingresada",
          },
          data: drinkAfter,
          errors: null,
        });
      
    } catch (error) {
      // Response from Api if exists errors in the server
      res.status(500).json({
        meta: {
          ok: false,
          status: 500,
          msg: "Error del servidor",
        },
        data: null,
        errors: error.message,
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { id: _id } = req.params;
      const drink = await Drink.findById(_id);
      if (drink) {
        // If the value is truthy

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
          meta: {
            status: 200,
            ok: true,
          },
          data: drink,
          errors: null,
        });
      } else {
        res.status(400).json({
          meta: {
            status: 400,
            ok: false,
          },
          data: null,
          errors: {
            msg: "El elemento no existe",
          },
        });
      }
    } catch (error) {
      res.status(500).json({
        meta: {
          ok: false,
          status: 500,
          msg: "Error del servidor",
        },
        data: null,
        errors: error.message,
      });
    }
  },
  all: async (req, res) => {
    try {
      const drinks = await Drink.find(); // Return us all drinks

      res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
          msg: "Todas las bebidas",
        },
        data: drinks,
        errors: null,
      });
    } catch (error) {
      res.status(500).json({
        meta: {
          ok: false,
          status: 500,
          msg: "Error del servidor",
        },
        data: null,
        errors: error.message,
      });
    }
  },
  detail: async (req, res) => {
    try {
      const drink = await Drink.findById(req.params.id); // Return us one drink

       res.status(200).json({
        // Response from Api if all out good
        meta: {
          ok: true,
          status: 200,
        },
        data: drink,
        errors: null,
      });
      
    } catch (error) {
      res.status(500).json({
        meta: {
          ok: false,
          status: 500,
        },
        data: null,
        errors: {msg: error.message},
      });
    }
  },
};
