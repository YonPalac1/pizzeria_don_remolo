const Cart = require("../database/Cart");

module.exports = {
  addElement: async (req, res) => {
    const { productId, userId } = req.body;
    try {
      const cartFound = await Cart.findOne({ userId }); // Buscamos si el usuario existe

      if (!cartFound) {
        // Si no existe!
        const cart = new Cart({
          // Lo creamos
          userId,
          products: [{ product: productId }],
        });
        await cart.save(); // Guardamos el carro de compra en la base de datos
        return res.status(201).json({
          ok: true,
          msg: "Carrito creado",
        });
      } else {
        const IDs = cartFound?.products.map((el) => el.product._id.toString()); // Obtenemos un array con los IDs

        if (IDs.indexOf(productId) === -1) {
          // Si no existe el id en los IDs de productos del carrito agrega ese producto

          return await Cart.findOneAndUpdate(
            // Lo buscamos y lo actualizamos
            { userId }, // Lo buscamos con el id del usuario
            { $push: { products: { product: productId } } } // y le agregamos cada producto que se seleccione
          );
        }

        res.status(200).json({
          ok: true,
          msg: "Carrito actualizado",
        });
      }
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error.message,
      });
    }
  },

  getCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.id }); // Buscamos con el id del usuario
      res.status(200).json({
        data: cart.products,
      });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },

  delElement: async (req, res) => {
    const { userId, productId } = req.body;
    try {
      await Cart.updateMany(
        // Actualizamos buscando el userId
        { userId },
        {
          // Buscaos el carrito del con el id del usuario
          $pull: { products: { product: { $eq: productId } } }, // Eliminamos del registro de productos el id que nos llega del body
        },
        {
          multi: true,
        }
      );

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error(error.message);
    }
  },

  delAll: async (req, res) => {
    try {
      await Cart.findOneAndRemove({ userId: req.params.id });
      res.json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Fallo el servidor" });
    }
  },

  moreQuantity: async (req, res) => {
    const { productId, userId } = req.body;

    try {
      const cart = await Cart.findOne({ // Buscamos el carrito con el userId que obtenemos del body
        userId,
      });

      for (index in cart.products) {  // Recorro el array de objeto
        if (cart.products[index].product._id == productId) {  // Si el id del producto que tengo en el carrito de compra es igual que el productId que obtenemos del body
          cart.products[index].quantity++;  // Aumentale de a 1
        }
      }

      await cart.save();
      res.json({ ok: true });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },

  lessQuantity: async (req, res) => {
    const { productId, userId } = req.body;
    try {
      let cart = await Cart.findOne({
        userId,
      });

      for (index in cart.products) {
        if (cart.products[index].product._id == productId) {
          cart.products[index].quantity--;
          if (!cart.products[index].quantity) {
            cart.products.splice(index, 1);
          }
        }
      }

      await cart.save();
      res.json({ ok: true });
    } catch (error) {
      res.json(error);
    }
  },

  orderMsg: async (req, res) => {
    const { userId } = req.params;
    try {
      const { _id, products } = await Cart.findOne({ userId });

      const transformProps = (string) => string.split(" ").join("%20");

      const order = products.map(
        ({ product, quantity }) =>
          product.category === "gaseosas" &&
          `*%20%20${transformProps(product.title)}%20${product.size}%20${
            product.measurement
          }%20,%20${quantity}${quantity > 1 ? "%20unidades." : "%20unidad."}`
      );
      //const userAdmin = await User.findOne({ rol: 1 });

      const url = `https://api.whatsapp.com/send?phone=+5491156412335&text=%20*%20%20Código%20del%20pedido%20:%20%20${_id}%20%0A${order.join(
        "%0A"
      )}`;

      res.status(200).json({ ok: true, url });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
