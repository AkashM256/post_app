// contains only the business logic by using the data from database and returns a response object

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

  return { success: false, status: 500, message: utils.message };
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

  return { success: false, status: 500, message: utils.message };
}

function processLogin(req, res) {
  let data = login(req, res);

  if (data.success === true) {
    return res.send({ success: true, message: "Login Successful" });
  }

  return res.status().send({ success: false, message: data });
}

function processRegistration(req, res) {
  let data = registration(req, res);

  if (data.success === true) {
    return res.send({ success: true, message: "Registration Successful" });
  }

  return res.status().send({ success: false, message: data });
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
