const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, Unauthenticated } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { username: user.username }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    throw new Error("Invalid credentials. Please try again.");
  }

  // compare user's password from input to the db value

  const correctPass = await findUser.comparePassword(password);
  if (!correctPass) {
    throw new Error("Invalid Credentials. Please try again.");
  }

  const token = findUser.createJWT();
  res.status(StatusCodes.OK).json({
    user: { username: findUser.username, createdAt: findUser.createdAt },
    token,
  });
};

module.exports = {
  register,
  login,
};
