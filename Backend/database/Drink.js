const { Schema, model } = require("mongoose");

const drinkSchema = new Schema(
  {
    brand: String, // marca
    image: Array, // imagen
    title: String, // titulo
    measurement: String, // medición
    size: Number, // tamaño
    show: { type: Number, default: 1 }, // mostrar
    available: { type: Number, default: 1 }, // disponible
    price: Number,  // precio
    category: String // categoría
  },
  { versionKey: false }
);

const Drink = model("Drink", drinkSchema);

module.exports = Drink;
