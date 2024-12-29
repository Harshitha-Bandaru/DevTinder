const adminAuth = (req, res) => {
  token = "xyza";
  const isAuthorised = token === "xyz";
  if (!isAuthorised) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};

module.exports = { adminAuth };
