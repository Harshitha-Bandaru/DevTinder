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

// listen on a port
app.listen(3000, () => {
  console.log("Server Started Succcessfully");
});
