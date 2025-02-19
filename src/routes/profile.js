const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const { validateProfileEditData } = require("../utils/validateData");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateProfileEditData(req)) {
      throw new Error("Invalid Edit Request");
    }
    console.log("user", req.user);
    const loggedInUser = req.user;
    Object.keys(req.body).forEach(
      (value) => (loggedInUser[value] = req.body[value])
    );
    console.log("newUser", loggedInUser);
    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your profile is updated succesfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Error editing profile" + err.message);
  }
});

module.exports = profileRouter;
