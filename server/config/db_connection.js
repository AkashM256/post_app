// contains the config files to create a database connection

const mongoose = require("mongoose");
const config = require("./config");

// MongoDB connection configuration
mongoose.connect(config.db_host + config.db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the MongoDB connection is successful
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
