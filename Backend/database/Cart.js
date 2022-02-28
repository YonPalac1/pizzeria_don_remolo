const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    userId: String,
    payment: { type: String, default: "efectivo" },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Drink",
          ref: "Food",
          autopopulate: true,
        },
        quantity: { type: Number, default: 1 },
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
