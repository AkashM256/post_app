// uses database connection to create,read,update,delete data

const { default: mongoose } = require("mongoose");
const postModel = require("../collection/post");
const userDetailsModel = require("../collection/user_details");

async function getPost(req, res) {
  try {
    const data = await postModel.find({ user_id: req.query.user_id });

    if (data.length === 0) {
      return { success: true, message: "Data not found for ID" };
    }

    return { success: true, data: data, message: "Post Details" };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function getUserDetails(req, res) {
  try {
    const data = await userDetailsModel.find({ user_id: req.query.user_id });

    if (data.length === 0) {
      return { success: true, message: "Data not found for ID" };
    }

    return { success: true, data: data, message: "User Details" };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function login(req, res) {




  return;
}

async function registration(req, res) {
  try {
    const result = await collection.insertOne(document);


    return { success: true, data: data, message: "User Details" };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}

async function addPost(req, res) {
  
  console.log(req)
  
  
  // try {
  //   const data = await postModel.create(req.body);
    
  //   console.log('Document inserted:', data);


  //   return { success: true, data: data, message: "Post Added Successfully" };
  // } catch (error) {
  //   return { success: false, message: "Internal server error" };
  // }
}

module.exports = { getPost, getUserDetails, login, registration, addPost };
