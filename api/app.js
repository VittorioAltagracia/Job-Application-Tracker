import express from "express";
const app = express();

const initServer = async () => {
  app.listen(() => {
    console.log(`Server is running on port 4000`);
  });
};

initServer();
