const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Harshitha",
    lastName: "Bandaru",
    emailId: "harshitha4547@gmail.com",
    gender: "F",
    age: 22,
    password: "Harshi",
  };
  // creating new instance of User model
  const userInstance = new User(userObj);
  try {
    await userInstance.save();
    res.send("user details saved successfully");
  } catch (err) {
    res.status(400).send("Error saving user", err.message);
  }
});

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
