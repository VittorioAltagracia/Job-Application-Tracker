import mongoose from "mongoose";

const connectToDatabase = (url) => {
  return mongoose.connect(url);
};

export default connectToDatabase;
