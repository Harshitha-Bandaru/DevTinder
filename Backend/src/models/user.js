const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    hobbies: {
      type: [String],
      validate(v) {
        if (v.length > 100) {
          throw new Error("Maximum number of skills cannot exceed 100");
        }
      },
    },
    about: {
      type: String,
      validate(v) {
        if (v.length > 100) {
          throw new Error("About can not exceed 100 characters");
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

userSchema.methods.validatePassword = async function (passwordInputByUser) {
  // Do not write arrow function for this, the behavior of this will vary highly in arrow functions and normal functions
  const user = this;
  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    user.password
  );
  return isPasswordValid;
};

userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign(
    {
      email: user.emailId,
    },
    "Harshi@123",
    { expiresIn: "1h" }
  );
  return token;
};

// create a model
// Convention - Snakecase for model name
const User = mongoose.model("User", userSchema);

module.exports = User;
