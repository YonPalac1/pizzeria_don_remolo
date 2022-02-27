const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: Array,
  measurement: { type: String, default: 0 },
  preparationTimeMin: Number,
  category: String,
  show: { type: Number, default: 1 },
  available: { type: Number, default: 1 },
},{ versionKey: false });

const Food = model("Food", foodSchema);

module.exports = Food;