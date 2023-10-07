// schema for posts to be stored in database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for your MongoDB documents
const user_details_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
});

// Create a model based on the schema
const user_details = mongoose.model("user_details", user_details_schema);

// Export the model for use in other parts of your application
module.exports = { user_details };
