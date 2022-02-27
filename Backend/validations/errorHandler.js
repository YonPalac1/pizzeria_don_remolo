const { validationResult } = require("express-validator");

const { loginValidator } = require("./loginValidator");
const { registerValidator } = require("./registerValidator");
const { drinkValidator,checkDrink } = require("./drinkValidator");
const { foodValidator,checkFood} = require("./foodValidator");


const errorHandler = (req, res, next) => {
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


const checkObjectId = (req,res,next) => {
  const {isValid} = require('mongoose').Types.ObjectId
  
  if(!isValid(req.params.id)){
    return res.status(422).json({
      meta: {
        status: 422,
        ok: false,
      },
      data: null,
      errors: {msg:'El id es invalido'},
    });
  }
  next()
}

module.exports = {
  loginValidator,
  registerValidator,
  drinkValidator,
  errorHandler,
  checkDrink,
  checkObjectId,
  foodValidator,
  checkFood
};
