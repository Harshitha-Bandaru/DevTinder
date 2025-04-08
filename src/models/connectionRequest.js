const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromId: {
      type: mongoose.ObjectId,
      required: true,
    },
    toId: { type: mongoose.ObjectId, required: true },
    status: {
      type: String,
      enum: {
        values: ["rejected", "accepted", "ignored", "interested"],
        message: "`{VALUE} is not a valid {PATH}`",
      },
    },
  },
  {
    timestamps: true,
  }
);

const ConnectionRequest = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;
