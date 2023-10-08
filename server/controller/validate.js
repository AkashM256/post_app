// // validate the request recieved from the client and return response object or throw error accordingly
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function validateGetPost(req, res) {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const { userID } = jwt.verify(
        req.headers.authorization.split(" ")[1],
        config.jwt_secret_key
      );
      if (userID !== undefined && userID !== "") {
        req.user_id = userID;
        return { success: true };
      }
    }
  } catch (error) {
    return { success: false, status: 403, message: "Authentication Failed" };
  }
}

function validateGetUserDetails(req, res) {
  
  console.log(req.headers)
  
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const { userID } = jwt.verify(
        req.headers.authorization.split(" ")[1],
        config.jwt_secret_key
      );
      if (userID !== undefined && userID !== "") {
        req.user_id = userID;
        return { success: true };
      }
    }
  } catch (error) {
    return { success: false, status: 403, message: "Authentication Failed" };
  }
}

function validateLogin(req, res) {
  if (
    req.body.hasOwnProperty("email", "password") &&
    req.body.email !== undefined &&
    req.body.password !== undefined &&
    req.body.user_id !== "" &&
    req.body.email !== "" &&
    req.body.password !== ""
  ) {
    return { success: true };
  }

  return { success: false, status: 400, message: "Invalid Parameters" };
}

function validateRegistration(req, res) {
  if (
    req.body.hasOwnProperty("name", "email", "phone", "password") &&
    req.body.name !== undefined &&
    req.body.email !== undefined &&
    req.body.phone !== undefined &&
    req.body.password !== undefined &&
    req.body.name !== "" &&
    req.body.email !== "" &&
    req.body.phone !== "" &&
    req.body.password !== ""
  ) {
    return { success: true };
  }

  return { success: false, status: 400, message: "Invalid Parameters" };
}

function validateAddPost(req, res) {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const { userID } = jwt.verify(
        req.headers.authorization.split(" ")[1],
        config.jwt_secret_key
      );

      if (userID !== undefined && userID !== "") {
        req.body.user_id = userID;

        if (
          req.body.hasOwnProperty("title", "description") &&
          req.body.title !== undefined &&
          req.body.description !== undefined &&
          req.body.title !== "" &&
          req.body.description !== ""
        ) {
          return { success: true };
        }
      }
    }
  } catch (error) {
    return { success: false, status: 403, message: "Authentication Failed" };
  }

  return { success: false, status: 400, message: "Invalid Parameters" };
}

module.exports = {
  validateGetPost,
  validateGetUserDetails,
  validateLogin,
  validateRegistration,
  validateAddPost,
};
