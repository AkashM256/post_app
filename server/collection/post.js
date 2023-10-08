// schema for posts to be stored in database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { createCollection } = require("../config/createCollection");

// Create a schema for your MongoDB documents
const posts_schema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

// Export the model for use in other parts of the application
module.exports = mongoose.models.posts || mongoose.model("posts", posts_schema);
