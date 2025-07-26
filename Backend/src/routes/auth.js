const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const { generateHash } = require("../utils/validateData");
authRouter.post("/signup", async (req, res) => {
  // const userObj = {
  //   firstName: "Harshitha",
  //   lastName: "Bandaru",
  //   emailId: "harshitha4547@gmail.com",
  //   gender: "F",
  //   age: 22,
  //   password: "Harshi",
  // };
  // you have to add express.json middleware for the below line to work, as express can't decode json by default
  const { firstName, lastName, emailId, password, gender, hobbies, about } =
    req.body;
  const passwordHash = await generateHash(password);
  // creating new instance of User model
  const userInstance = new User({
    firstName,
    lastName,
    emailId,
    gender,
    password: passwordHash,
    hobbies,
    about,
  });
  try {
    await userInstance.save();
    res.send("user details saved successfully");
  } catch (err) {
    res.status(400).send(`Error saving user: ${err.message}`);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("User not found");
    }
    const isPassswordValid = await user.validatePassword(password);
    if (isPassswordValid) {
      const token = await user.getJWT();
      res.cookie("token", token, { sameSite: "none", secure: true });
      res.send(user);
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

authRouter.post("/logout", (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout Successful");
});

module.exports = authRouter;
