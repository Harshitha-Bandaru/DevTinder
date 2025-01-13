const mongoose = require("mongoose");
const CLUSTER_STRING =
  "mongodb+srv://harshitha4547:IuxBu0X5om3J4r3a@node.jjywt.mongodb.net/";

// const connectDB = mongoose.connect(CLUSTER_STRING);

const connectDB = async () => {
  await mongoose.connect(CLUSTER_STRING);
};

module.exports = connectDB;
