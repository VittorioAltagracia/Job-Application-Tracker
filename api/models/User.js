const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username can not be null"],
      minlength: 3,
      maxlength: 50,
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

// pre stap for user schema to hash the password to avoid bulking up the controller

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// mongoose method that allows to return a certain property. helps me keep the controller cleaner
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, username: this.username }, "secret", {
    expiresIn: "30d",
  });
};

// compares password user provides on login to the one hashed in the database
UserSchema.methods.comparePassword = async function (userPass) {
  const Match = await bcrypt.compare(userPass, this.password);
  return Match;
};

module.exports = mongoose.model("User", UserSchema);
