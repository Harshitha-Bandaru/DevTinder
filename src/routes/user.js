const express = require("express");
const { userAuth } = require("../middleware/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");
const userRouter = express.Router();

const USER_SAFE_DATA = [
  "firstName",
  "lastName",
  "gender",
  "hobbies",
  "photoUrl",
];

userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const data = await ConnectionRequest.find({
      toId: loggedInUser._id,
      status: "interested",
    }).populate("fromId", USER_SAFE_DATA);
    console.log("data", data);
    res.send(data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connections = await ConnectionRequest.find({
      $or: [
        { fromId: loggedInUser._id, status: "accepted" },
        { toId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromId", USER_SAFE_DATA)
      .populate("toId", USER_SAFE_DATA);
    const data = connections.map((connection) => {
      // console.log(
      //   "connection.fromId._id == loggedInUser._id",
      //   connection.fromId._id,
      //   loggedInUser._id
      // );
      return connection.fromId._id.equals(loggedInUser._id)
        ? connection.toId
        : connection.fromId;
    });
    res.json({ data: data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userRouter.get("/user/feed", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    // A user should not see
    // 1. His own profile card
    // 2. His connections
    // 3. Pending / Ignored connections
    const existingConnections = await ConnectionRequest.find({
      $or: [{ fromId: loggedInUser._id }, { toId: loggedInUser._id }],
    });
    const uniqueConnections = new Set();
    existingConnections.forEach((connection) => {
      uniqueConnections.add(connection.fromId.toString());
      uniqueConnections.add(connection.toId.toString());
    });
    console.log("uniqueConnections", uniqueConnections);
    const userFeed = await User.find({
      $and: [
        { _id: { $nin: Array.from(uniqueConnections) } },
        { _id: { $ne: loggedInUser._id } },
      ],
    }).select(USER_SAFE_DATA);
    res.json({ data: userFeed });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = userRouter;
