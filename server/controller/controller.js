const {
  validateGetPost,
  validateGetUserDetails,
  validateLogin,
  validateRegistration,
  validateAddPost,
} = require("./validate");

const {
  processGetPost,
  procesGetUserDetails,
  procesLogin,
  procesRegistration,
  procesAddPost,
} = require("./process");

function getPostController(req, res) {
  //   let data = validateGetPost(req, res);

  //   if (data.success === true) {
  data = processGetPost(req, res);

  if (data.success === true) {
    return data;
  }
  //   }

  return;
}

function getUserDetailsController(req, res) {
  let data = validateGetUserDetails(req, res);

  if (data.success === true) {
    data = procesGetUserDetails(req, res);

    if (data.success === true) {
      return data;
    }
  }

  return;
}

function loginController(req, res) {
  let data = validateLogin(req, res);

  if (data.success === true) {
    data = procesLogin(req, res);

    if (data.success === true) {
      return data;
    }
  }

  return;
}

function registrationController(req, res) {
  let data = validateRegistration(req, res);

  if (data.success === true) {
    data = procesRegistration(req, res);

    if (data.success === true) {
      return data;
    }
  }

  return;
}

function addPostController(req, res) {
  let data = validateAddPost(req, res);

  if (data.success === true) {
    data = procesAddPost(req, res);

    if (data.success === true) {
      return data;
    }
  }

  return;
}

module.exports = {
  getPostController,
  getUserDetailsController,
  loginController,
  registrationController,
  addPostController,
};
