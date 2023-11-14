import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username can not be null"],
    min: 3,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "must provide valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "user must have a password"],
    min: 8,
  },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("User", UserSchema);
