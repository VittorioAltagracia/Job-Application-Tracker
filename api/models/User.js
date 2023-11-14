const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username can not be null"],
      min: 3,
      unique: [true, "username must be unique"],
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
  },
  { timestamps: true }
);

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, username: this.username }, "secret", {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", UserSchema);
