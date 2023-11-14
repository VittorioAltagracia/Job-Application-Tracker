import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./db/DbConnection.js";
dotenv.config();
import User from "./models/User.js";

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

const port = parseInt(process.env.PORT || "4000", 10);

// route
// parse int assures that PORT will be converted to a number as it is typically a string in production

app.get("/", (req, res) => {
  res.send("Ok it works");
});

const initServer = async () => {
  try {
    await connectToDatabase(process.env.DB_CONNECTION_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

initServer();

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const createUser = await User.create({
      username,
      email,
      password,
    });
    res.json(createUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
