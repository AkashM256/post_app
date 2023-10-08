const {
  validateGetPost,
  validateGetUserDetails,
  validateLogin,
  validateRegistration,
  validateAddPost,
} = require("./validate");

const {
  processGetPost,
  processGetUserDetails,
  processLogin,
  processRegistration,
  processAddPost,
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

async function loginController(req, res) {
    const validate = validateLogin(req, res);

    if (validate.success === true) {
      const process = await processLogin(req, res);
  
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

async function registrationController(req, res) {
    const validate = validateRegistration(req, res);

    if (validate.success === true) {
      const process = await processRegistration(req, res);
  
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

async function addPostController(req, res) {
  const validate = validateAddPost(req, res);

  if (validate.success === true) {
    const process = await processAddPost(req, res);

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

module.exports = {
  getPostController,
  getUserDetailsController,
  loginController,
  registrationController,
  addPostController,
};
