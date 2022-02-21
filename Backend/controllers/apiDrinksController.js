const Drink = require("../database/Drink");
module.exports = {
  store: async(req, res) => {
    const {
      brand,
      title,
      measurement,
      size,
      show,
      available,
      price,
      category
    } = req.body;
    try {
        const newDrink = new Drink({ 
            brand,
            title,
            measurement,
            size,
            show,
            available,
            price,
            category
        })
        const drink = await newDrink.save();
    
        res.status(200).json({
            meta: {
              ok: true,
              status: 200,
              msg: "Bebida ingresada",
            },
            data: drink,
            errors:null
          });
    } catch (error) {
        res.json(error)
    }
  },
  update: (req, res) => {},
  remove: (req, res) => {},
  allDrinks: (req, res) => {},
  detail: (req, res) => {},
};
