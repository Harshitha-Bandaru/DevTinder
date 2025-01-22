const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
app.use(express.json());

app.post("/signup", async (req, res) => {
  // const userObj = {
  //   firstName: "Harshitha",
  //   lastName: "Bandaru",
  //   emailId: "harshitha4547@gmail.com",
  //   gender: "F",
  //   age: 22,
  //   password: "Harshi",
  // };
  // you have to add express.json middleware for the below line to work, as express can't decode json by default
  const userObj = req.body;
  console.log("userObj", userObj);
  // creating new instance of User model
  const userInstance = new User(userObj);
  try {
    await userInstance.save();
    res.send("user details saved successfully");
  } catch (err) {
    res.status(400).send("Error saving user", err.message);
  }
});

app.get("/user", async (req, res) => {
  const emailId = req.body.emailId;
  console.log("emailId", emailId);
  // find function returns array of objects
  // const userdetails = await User.find({ emailId: emailId });
  const userdetails = await User.findOne({ emailId: emailId });
  console.log("userdetails", userdetails);
  if (userdetails) {
    res.send(userdetails);
  } else {
    res.status(404).send("user not found");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(404).send("users not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.send("something went wrong");
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
