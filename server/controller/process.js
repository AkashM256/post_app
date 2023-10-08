// contains only the business logic by using the data from database and returns a response object

const { encrypt, decrypt } = require("../config/crypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const {
  getPost,
  getUserDetails,
  login,
  registration,
  addPost,
} = require("./utils");

async function processGetPost(req, res) {
  let utils = await getPost(req, res);

  if (utils.success === true) {
    return {
      success: true,
      message: utils.message,
      status: 200,
      data: utils.data,
    };
  }

  return { success: false, status: utils.status, message: utils.message };
}

async function processGetUserDetails(req, res) {
  let utils = await getUserDetails(req, res);

  if (utils.success === true) {
    return {
      success: true,
      message: utils.message,
      status: 200,
      data: utils.data,
    };
  }

  return { success: false, status: utils.status, message: utils.message };
}

async function processLogin(req, res) {
  let utils = await login(req, res);

  const saltAndHash = {
    iv: utils.data.salt,
    encryptedData: utils.data.password,
  };

  if (utils.success === true && decrypt(saltAndHash) === req.body.password) {
    const userID = utils.data._id;

    const token = jwt.sign({ userID }, config.jwt_secret_key, {
      expiresIn: "1h",
    });

    return {
      success: true,
      message: "Login Successful",
      status: 200,
      data: token,
    };
  }

  return {
    success: false,
    status: 500,
    message: "Invalid credentials",
    data: utils,
  };
}

async function processRegistration(req, res) {
  const saltAndHash = encrypt(req.body.password);

  req.body.password = saltAndHash.encryptedData;
  req.body.salt = saltAndHash.iv;

  let utils = await registration(req, res);

  if (utils.success === true) {
    const userID = utils.data._id;

    const token = jwt.sign({ userID }, config.jwt_secret_key, {
      expiresIn: "1h",
    });

    return {
      success: true,
      message: utils.message,
      status: 200,
      data: token,
    };
  }

  return { success: false, status: 500, message: utils.message };
}

async function processAddPost(req, res) {
  let utils = await addPost(req, res);

  if (utils.success === true) {
    return {
      success: true,
      message: utils.message,
      status: 200,
      data: utils.data,
    };
  }

  return { success: false, status: 500, message: utils.message };
}

module.exports = {
  processGetPost,
  processGetUserDetails,
  processLogin,
  processRegistration,
  processAddPost,
};
