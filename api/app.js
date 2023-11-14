const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./db/DbConnection");
dotenv.config();

// routers
const auth = require("./routes/auth.js");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// routes
app.use("/api/v1/auth", auth);

const port = parseInt(process.env.PORT || "4000", 10);

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
