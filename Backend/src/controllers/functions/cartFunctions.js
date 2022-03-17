const MappedDrinks = (arr) =>
  arr?.map(
    ({
      quantity,
      product: { _id, brand, title, measurement, size, price, category, image },
    }) => {
      console.log(_id)
      return {
        id: _id,
        brand,
        title,
        measurement,
        size,
        price,
        category,
        quantity,
        image,
      };
    }
  );

const MappedFoods = (arr) =>
  arr?.map(
    ({
      quantity,
      product: {
        _id,
        name,
        price,
        description,
        measurement,
        category,
        image,
      },
    }) => {
      return {
        id: _id,
        name,
        price,
        description,
        measurement,
        category,
        quantity,
        image,
      };
    }
  );

module.exports = { MappedDrinks, MappedFoods };
