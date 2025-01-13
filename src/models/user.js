const mongoose = require("mongoose");

// Define Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

// create a model
const User = mongoose.model("User", userSchema);

module.exports = User;
