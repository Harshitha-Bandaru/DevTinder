const express = require("express");
const app = express();

const { adminAuth } = require("./middleware/auth");

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

app.get(
  "/getMe",
  (req, res, next) => {
    console.log("Hehe,i'm not here");
    next();
  },
  (req, res) => {
    res.send("Hihi, here");
  }
);

app.get(
  "/findMeForever",
  (req, res, next) => {
    console.log("Hehe,i'm not here");
    next();
  },
  (req, res, next) => {
    console.log("you can't find me forever");
    // next();
    console.log("i'll never see console");
    // res.send("Hi");
    next();
  }
);

app.use("/admin", adminAuth);

app.get("/adminData", adminAuth, (req, res) => {
  res.send("This is Admin Data");
});

// listen on a port
app.listen(3000, () => {
  console.log("Server Started Succcessfully");
});
