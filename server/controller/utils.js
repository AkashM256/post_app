// uses database connection to create,read,update,delete data

const postModel = require("../collection/post");
const userDetailsModel = require("../collection/user_details");

async function getPost(req, res) {
  try {
    // const data = await postModel.find({ user_id });
    const data = await postModel.find();
    res.json({ vgh: "huhu" });

    console.log("***********", data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

  return;
}

async function getUserDetails(req, res) {
  try {
    const data = await userDetailsModel.find({ name }); // Fetch documents with the specified name
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

  return;
}

async function login(req, res) {
  let data = ValidatePing(req, res);

  if (data.success === true) {
  }

  return;
}

async function registration(req, res) {
  let data = ValidatePing(req, res);

  if (data.success === true) {
  }

  return;
}

async function addPost(req, res) {
  let data = ValidatePing(req, res);

  if (data.success === true) {
  }

  return;
}

module.exports = { getPost, getUserDetails, login, registration, addPost };
