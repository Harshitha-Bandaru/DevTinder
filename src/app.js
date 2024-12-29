const express = require("express");
const app = express();

const { adminAuth } = require("./middleware/auth");

// Request Handlers
// Home route
// app.use((req, res) => {
//   res.send("Hello from home page");
// });

app.get("/getUserData", (req, res, next) => {
  throw new Error("Error");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("server started succesfully");
});
