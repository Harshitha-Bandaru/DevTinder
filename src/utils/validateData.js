const bcrypt = require("bcrypt");
const validateProfileEditData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "gender",
    "about",
    "hobbies",
    "age",
  ];
  const isValid = Object.keys(req.body).every((v) =>
    allowedEditFields.includes(v)
  );
  console.log("isvalid", isValid);

  return isValid;
};

const validateChangePasswordData = (req) => {
  const allowedEditFields = ["password"];
  const isValid = Object.keys(req.body).every((key) =>
    allowedEditFields.includes(key)
  );
  return isValid;
};

const validateIsSamePassword = async (req) => {
  const userEnterdPassword = req.body.password;
  console.log("req", req);
  const isSame = await bcrypt.compare(userEnterdPassword, req.user.password);
  console.log("isame", isSame);
  return isSame;
};

const generateHash = async (password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};
module.exports = {
  validateProfileEditData,
  validateChangePasswordData,
  validateIsSamePassword,
  generateHash,
};
