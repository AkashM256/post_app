// Connection with the database using the config provided
// Handles the middlewares, controllers and actions

const express = require("express");
const mongoose = require("mongoose");

// Create an Express app
const app = express();

// MongoDB connection configuration
const dbURI = "mongodb://localhost/my-database"; // Replace with your MongoDB connection URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check if the MongoDB connection is successful
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define routes and middleware here

// Start the Express server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
