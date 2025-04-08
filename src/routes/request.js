const express = require("express");
const { userAuth } = require("../middleware/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");
const connectionRequestRouter = express.Router();

connectionRequestRouter.post(
  "/request/send/:status/:userId",
  userAuth,
  async (req, res) => {
    try {
      const fromId = req.user._id;
      const toId = req.params.userId;
      const status = req.params.status;
      console.log("fromid", fromId);
      console.log("toid", toId);
      // check if user is sending connection request to themselves
      if (fromId === toId) {
        res.json({ message: `Cannot send connecetion request to themselves` });
      }
      // check if the receipient exists
      const toUser = await User.findById(toId);
      if (!toUser) {
        res.json({ message: "Receipent Profile doesn't exist" });
      }
      const allowedStaus = ["ignored", "interested"];
      if (!allowedStaus.includes(status)) {
        res.json({ message: "status not allowed" });
      }
    } catch (err) {
      res.json({ message: `${err.message}` });
    }
  }
);

module.exports = connectionRequestRouter;
