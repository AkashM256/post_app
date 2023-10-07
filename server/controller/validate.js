// // validate the request recieved from the client and return response object or throw error accordingly

function validateGetPost(req, res) {
  if (req.query.hasOwnProperty("user_id") && req.query.user_id !== undefined) {
    const userID = req.query.user_id;

    if (!isNaN(userID) && userID != 0) {
      return res.json({ success: true });
    }
  }

  return res
    .status(400)
    .send({ success: false, message: "Invalid Parameters" });
}

function validateGetUserDetails(req, res) {
  if (
    req.hasOwnProperty("user_id") &&
    req.data.user_id !== undefined &&
    req.data.user_id !== 0
  ) {
    return res.send({ success: true });
  }

  return res
    .status(400)
    .send({ success: false, message: "Invalid Parameters" });
}

function validateLogin(req, res) {
  if (
    req.hasOwnProperty("email", "password") &&
    !req.data.email in (undefined, "") &&
    !req.data.password in (undefined, "")
  ) {
    return res.send({ success: true });
  }

  return res
    .status(400)
    .send({ success: false, message: "Invalid Parameters" });
}

function validateRegistration(req, res) {
  if (
    req.hasOwnProperty("name", "email", "phone", "password") &&
    !req.data.name in (undefined, "") &&
    !req.data.email in (undefined, "") &&
    !req.data.phone in (undefined, "") &&
    !req.data.password in (undefined, "")
  ) {
    return res.send({ success: true });
  }

  return res
    .status(400)
    .send({ success: false, message: "Invalid Parameters" });
}

function validateAddPost(req, res) {
  req.hasOwnProperty("title", "description") &&
    !req.data.title in (undefined, "") &&
    !req.data.description in (undefined, "");

  return res
    .status(400)
    .send({ success: false, message: "Invalid Parameters" });
}

module.exports = {
  validateGetPost,
  validateGetUserDetails,
  validateLogin,
  validateRegistration,
  validateAddPost,
};
