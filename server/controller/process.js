// contains only the business logic by using the data from database and returns a response object

const {
  getPost,
  getUserDetails,
  login,
  registration,
  addPost,
} = require("./utils");

function processGetPost(req, res) {
  let data = getPost(req, res);

  if (data.success === true) {
    return res.send({ success: true, message: "Post Details" });
  }

  return res.status(500).send({ success: false, message: data.message });
}

function processGetUserDetails(req, res) {
  let data = getUserDetails(req, res);

  if (data.success === true) {
    return res.send({ success: true, message: "User Details" });
  }

  return res.status().send({ success: false, message: data });
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

function processAddPost(req, res) {
  let data = addPost(req, res);

  if (data.success === true) {
    return res.send({ success: true, message: "Post Added Successfully" });
  }

  return res.status().send({ success: false, message: data });
}

module.exports = {
  processGetPost,
  processGetUserDetails,
  processLogin,
  processRegistration,
  processAddPost,
};
