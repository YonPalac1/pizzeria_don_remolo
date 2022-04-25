const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: String,  // nombre 
  price: Number,  // precio
  description: String, // descripción
  image: Array, // imagen
  measurement: { type: String, default: 0 }, // medición
  preparationTimeMin: Number, // tiempo de preparación
  category: String, // categoría
  available: { type: Number, default: 1 },  // disponible
},{ versionKey: false }); 

const Food = model("Food", foodSchema);

module.exports = Food;