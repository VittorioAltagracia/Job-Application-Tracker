const mongoose = require("mongoose");
const connectToDatabase = (url) => {
  return mongoose.connect(url);
};

module.exports = connectToDatabase;
