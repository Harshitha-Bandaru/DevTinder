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

module.exports = { validateProfileEditData };
