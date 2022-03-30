const { Schema, model } = require("mongoose");

const shippingSchema = new Schema(
  {
    name: String, // nombre
    lastname: String, // apellido
    celphone: Number, // celular
    address: String, // dirección
    menu: Array, // 
    note: String, // 
    total: Number,  // precio total
    status:{type:Number,default:1} // categoría 1 = activo , 2 cancelado
  },
  { versionKey: false }
);

const ShippingTicket = model("ShippingTicket", shippingSchema);

module.exports = ShippingTicket;