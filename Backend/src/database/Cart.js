const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    userId: String, // Id del usuario
    payment: { type: String, default: "efectivo" }, // forma de pago
    comment: {type:String, default: ""},
    foods: [
      // array de productos
      {
        product: {
          type: Schema.Types.ObjectId, // id del producto
          ref: "Food",
          autopopulate: true
        },
        quantity: { type: Number, default: 1 }, // cantidad
      },
    ],
    drinks: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Drink",
          autopopulate: true
        },
        quantity: { type: Number, default: 1 }, // cantidad
      },
    ],
    created_at: Date,
    deleted_at: Date,
  },
  { versionKey: false }
);

cartSchema.plugin(require("mongoose-autopopulate"));

const Cart = model("Cart", cartSchema);

module.exports = Cart;
