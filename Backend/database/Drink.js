const { Schema, model } = require("mongoose");

const drinkSchema = new Schema({
  brand: String,
  title: String,
  measurement: String,
  size: Number,
  show: { type: Number, default: 1 },
  available: { type: Number, default: 1 },
  price: Number,
  category: String,
});

const Drink = model("Drink", drinkSchema);

module.exports = Drink;
