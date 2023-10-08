// uses database connection to create,read,update,delete data

const { default: mongoose } = require("mongoose");
const postModel = require("../collection/post");
const userDetailsModel = require("../collection/user_details");

async function getPost(req, res) {
  console.log(req.userID);

  try {
    const data = await postModel.find({ user_id: req.user_id }, { user_id: 0 });

    if (data.length === 0) {
      return { success: true, message: "No Posts of this user" };
    }

    return { success: true, data: data, message: "Post Details" };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function getUserDetails(req, res) {
  try {
    const data = await userDetailsModel.find(
      { _id: "6522994a370bbf870d4e1f25" },
      // req.user_id
      { password: 0 }
    );

    if (data.length === 0) {
      return { success: false, status: 404, message: "User not found" };
    }

    return { success: true, data: data, message: "User Details" };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function login(req, res) {
  try {
    const data = await userDetailsModel.findOne(
      { email: req.body.email },
      { phone: 0 }
    );

    if (data.length === 0) {
      return { success: true, message: "Email not found" };
    }

    return { success: true, data: data };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function registration(req, res) {
  try {
    const data = await userDetailsModel.create(req.body);

    return {
      success: true,
      data: data._id,
      message: "Registration Successful",
    };
  } catch (error) {
    console.log(error);

    if (error.code === 11000 && error.keyPattern.hasOwnProperty("email")) {
      return { success: false, message: "Duplicate Email ID" };
    } else if (
      error.code === 11000 &&
      error.keyPattern.hasOwnProperty("phone")
    ) {
      return { success: false, message: "Duplicate Phone Number" };
    }

    return { success: false, message: "Internal server error" };
  }
}

async function addPost(req, res) {
  console.log(req.body);

  try {
    const data = await postModel.create(req.body);

    return {
      success: true,
      data: data._id,
      message: "Post Added Successfully",
    };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

module.exports = { getPost, getUserDetails, login, registration, addPost };
