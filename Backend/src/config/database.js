const mongoose = require("mongoose");
require("dotenv").config();

const CLUSTER_STRING = process.env.MONGO_CONNECTION_STRING;
const DATABASE_STRING = process.env.DATABASE_NAME;
// const connectDB = mongoose.connect(CLUSTER_STRING);

const connectDB = async () => {
  await mongoose.connect(CLUSTER_STRING + DATABASE_STRING);
};

module.exports = connectDB;
