const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send("Please Login!");
    }
    const decoded = await jwt.verify(token, "Harshi@123");
    // console.log(decoded.email);
    const email = decoded.email;
    const user = await User.findOne({ emailId: email });
    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send("Error: " + err.message);
  }
};

module.exports = { userAuth };
