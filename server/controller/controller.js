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
  processAddPost,
  processGetUserDetails,
} = require("./process");

async function getPostController(req, res) {
  const validate = validateGetPost(req, res);

  if (validate.success === true) {
    const process = await processGetPost(req, res);

    if (process.success === true) {
      return {
        status: process.status,
        message: process.message,
        data: process.data,
      };
    }
    return { status: process.status, message: process.message };
  }

  return { status: validate.status, message: validate.message };
}

async function getUserDetailsController(req, res) {
  const validate = validateGetUserDetails(req, res);

  if (validate.success === true) {
    const process = await processGetUserDetails(req, res);

    if (process.success === true) {
      return {
        status: process.status,
        message: process.message,
        data: process.data,
      };
    }
    return { status: process.status, message: process.message };
  }

  return { status: validate.status, message: validate.message };
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

async function addPostController(req, res) {
//   const validate = validateAddPost(req, res);

//   if (validate.success === true) {
    const process = await processAddPost(req, res);

    if (process.success === true) {
      return {
        status: process.status,
        message: process.message,
        data: process.data,
      };
    }
//     return { status: process.status, message: process.message };
//   }

  return { status: validate.status, message: validate.message };
}

module.exports = {
  getPostController,
  getUserDetailsController,
  loginController,
  registrationController,
  addPostController,
};
