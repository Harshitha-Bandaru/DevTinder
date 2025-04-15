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

connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  console.log("this", this);
  if (connectionRequest.fromId.equals(connectionRequest.toId)) {
    return next(new Error("Cannot send connection request to themselves!"));
  }
  next();
});

connectionRequestSchema.index({ fromId: 1, toId: 1 });

const ConnectionRequest = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;
