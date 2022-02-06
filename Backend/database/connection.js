const mongoose = require('mongoose');
module.exports = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGODB_CONNECTION);
    console.log("Connection to MongoDB Atlas successful");
  } catch (error) {
    console.error(error.message);
  }
};
