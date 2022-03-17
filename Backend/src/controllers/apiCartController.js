const Cart = require("../database/Cart");
const Drink = require("../database/Drink");
const Food = require("../database/Food");
const { MappedDrinks, MappedFoods } = require("./functions/cartFunctions");

module.exports = {
  addElement: async (req, res) => {
    const { productId, userId } = req.body;
    try {
      let cart = await Cart.findOne({ userId });
      let food = await Food.findById(productId);

      if (!cart) {
        if (food) {
          cart = await new Cart({
            userId,
            foods: [{ product: productId }],
            drinks: [],
          });
        } else {
          // created
          cart = await new Cart({
            userId,
            drinks: [{ product: productId }],
            foods: [],
          });
        }
        await cart.save(); // we keep
      } else {
        let IDs;

        if (food) {
          IDs = cart?.foods?.map((el) => el.product._id.toString()); // We getting array with the Ids
          if (IDs?.indexOf(productId) === -1) {
            // If do not exists the id in the variable Ids of products from shopping cart add that product
            await Cart.findOneAndUpdate(
              // Find it and update it
              { userId }, // Find with Id user
              {
                $push: { foods: { product: productId } },
              } // Add to array the Id product
            );
          }
        } else {
          IDs = cart?.drinks?.map((el) => el.product._id.toString());
          if (IDs?.indexOf(productId) === -1) {
            cart = await Cart.findOneAndUpdate(
              { userId },
              {
                $push: { drinks: { product: productId } },
              }
            );
          }
        }
      }

      return res.status(200).json({
        ok: true,
      });
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
      console.log(cart)
      if (cart) {
        return res.status(200).json({
          data: {
            idCart: cart._id,
            comment: cart.comment,
            products: [
              ...MappedDrinks(cart.drinks),
              ...MappedFoods(cart.foods),
            ], 
          },
        });
      }
      res.status(400).json({ msg: "No existe ningún carrito de compra" });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: error.message,
      });
    }
  },

  delElement: async (req, res) => {
    const { userId, productId } = req.body;
    let food = await Food.findById(productId);

    try {
      if (!food) {
        await Cart.updateMany(
          // Actualizamos buscando el userId
          { userId },
          {
            // Buscaos el carrito del con el id del usuario
            $pull: { drinks: { product: { $eq: productId } } }, // Eliminamos del registro de productos el id que nos llega del body
          },
          {
            multi: true,
          }
        );
      } else {
        await Cart.updateMany(
          // Actualizamos buscando el userId
          { userId },
          {
            // Buscaos el carrito del con el id del usuario
            $pull: { foods: { product: { $eq: productId } } }, // Eliminamos del registro de productos el id que nos llega del body
          },
          {
            multi: true,
          }
        );
      }

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error(error.message);
    }
  },

  delAll: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.id });
      cart.foods = [];
      cart.drinks = [];
      await cart.save();
      res.json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Fallo el servidor" });
    }
  },

  moreQuantity: async (req, res) => {
    const { productId, userId } = req.body;
    const drink = await Drink.findById(productId);
    const cart = await Cart.findOne({ userId });
    try {
      if (drink) {
        for (index in cart.drinks) {
          if (cart.drinks[index].product._id == productId) {
            cart.drinks[index].quantity++;
          }
        }
      } else {
        for (index in cart.foods) {
          if (cart.foods[index].product._id == productId) {
            cart.foods[index].quantity++;
          }
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
    const drink = await Drink.findById(productId);
    let cart = await Cart.findOne({ userId });

    try {
      if (drink) {
        for (index in cart.drinks) {
          if (cart.drinks[index].product._id == productId) {
            cart.drinks[index].quantity--;
            if (!cart.drinks[index].quantity) {
              cart.drinks.splice(index, 1);
            }
          }
        }
      } else {
        for (index in cart.foods) {
          if (cart.foods[index].product._id == productId) {
            cart.foods[index].quantity--;
            if (!cart.foods[index].quantity) {
              cart.foods.splice(index, 1);
            }
          }
        }
      }

      await cart.save();
      res.json({ ok: true });
    } catch (error) {
      res.json(error);
    }
  },

  commentAdd: async (req, res) => {
    try {
      const { comment, userId } = req.body;
      const cart = await Cart.findOneAndUpdate({ userId },{ 
        comment: comment ? comment : cart.comment
      });

      res.status(200).json({ ok: true });
    } catch (error) {
      console.log(error);
    }
  },

  orderMsg: async (req, res) => {
    try {
      const { _id, foods, drinks } = req.cart;

      const transformProps = (string) => string.split(" ").join("%20");
      let order;
      if (foods.length > 0) {
        order = foods.map(
          ({ product, quantity }) =>
            `* ${quantity}  ${product.category}  ${product.name} ${product.measurement}%0A     ${product.description}  ,  `
        );
      }

      if (drinks.length > 0) {
        order = [
          ...order,
          ...drinks.map(
            ({ product, quantity }) =>
              `* ${quantity}  ${product.category}%0A  ${product.title} ${product.measurement} ${product.size}%0A     ${product.description}  ,  `
          ),
        ];
      }

      const url = `https://api.whatsapp.com/send?phone=+5491156412335&text=%20*%20%20Código%20del%20pedido%20:%20%20${_id}%20%0A${transformProps(
        order.join("%0A")
      )}`;

      setTimeout(async () => {
        await Cart.findOneAndRemove({ _id: req.cart._id });
      }, 1000);

      res.status(200).json({ ok: true, url });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
