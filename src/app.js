const express = require("express");
const app = express();

// Request Handlers
// Home route
// app.use((req, res) => {
//   res.send("Hello from home page");
// });

// build a specific route
app.use("/test", (req, res) => {
  res.send("Hello from test route");
});

app.use("/testUser", (req, res) => {
  res.send("Hello from test user route");
});

app.get("/getUser", (req, res) => {
  res.send("getuser");
});

app.get("/getUserwithID/:id", (req, res) => {
  // getting dynamic id
  console.log(`${req.params} user is Harshi`);
  console.log("req.params", req.params.id);
  res.status(200);
  res.send("Exists");
});

app.post("/postUser", (req, res) => {
  // query params
  console.log("req.query", req.query.userName);
  console.log("req.query", req.query.email);
  res.send(`${req.query.userName} data posted successfully`);
});

// listen on a port
app.listen(3000, () => {
  console.log("Server Started Succcessfully");
});
