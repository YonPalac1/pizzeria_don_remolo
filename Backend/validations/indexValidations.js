const { validationResult } = require("express-validator");

const { loginValidator } = require("./loginValidator");
const { registerValidator } = require("./registerValidator");

const indexValidation = (req, res, next) => {
// Constant variables
  const errors = validationResult(req);
  const errorsObjects = errors.mapped();

  if (!errors.isEmpty()) {

    for (key in errorsObjects) {
      delete errorsObjects[key].param;
      delete errorsObjects[key].location;
    }

    return res.status(422).json({
      meta: {
        status: 422,
        ok: false,
      },
      data: null,
      errors: errorsObjects,
    });
  }
  next();
};

module.exports = { loginValidator, registerValidator,indexValidation };
