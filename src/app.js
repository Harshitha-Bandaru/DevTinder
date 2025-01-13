const express = require("express");
const app = express();
const connectDB = require("./config/database");

connectDB()
  .then(() => {
    console.log("Connection established successfully");
    app.listen(3000, () => {
      console.log("server started succesfully");
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
