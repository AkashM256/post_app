// schema for posts to be stored in database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for your MongoDB documents
const posts_schema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  //   user_id: {
  //     type: Integer,
  //   },
});

// Create a model based on the schema
const posts = mongoose.model("posts", posts_schema);

// Export the model for use in other parts of your application
module.exports = { posts };
