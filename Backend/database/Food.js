const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: String,
  price: Number,
  description: Text,
  measurement: String,
  preparationTimeMin: Number,
  show: { type: Number, default: 1 },
  available: { type: Number, default: 1 },
  category: String,
  amount: Number,
  image: String,
},{ versionKey: false });

const Food = model("Food", foodSchema);

module.exports = Food;