const mongoose = require("mongoose");
const validator = require("validator");

// Define Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
      validate(v) {
        if (!(v[0] === v[0].toUpperCase())) {
          throw new Error("First letter should be Uppercase");
        }
      },
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    emailId: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      validate(v) {
        if (!validator.isEmail(v)) {
          throw new Error("Enter a valid email");
        }
      },
    },
    gender: {
      type: String,
      required: true,
      enum: { values: ["M", "F"], message: "{VALUE} is not supported" },
    },
    age: {
      type: Number,
      min: 18,
      max: 100,
    },
    password: {
      type: String,
      required: true,
      validate(v) {
        if (!validator.isStrongPassword(v)) {
          throw new Error("Enter a Strong Password");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/45827542?s=96&v=4",
      validate(v) {
        if (!validator.isURL(v)) {
          throw new Error("Enter a valid photo url");
        }
      },
    },
  },
  { timestamps: true }
);

// create a model
// Convention - Snakecase for model name
const User = mongoose.model("User", userSchema);

module.exports = User;
