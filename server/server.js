// Connection with the database using the config provided
// Handles the middlewares, controllers and actions
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");
const config = require("./config/config");
const db = require("./config/db_connection");
const Routes = require("./routes/route");


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes(app,db);
Routes(app);

app.listen(config.server_port, () => {
  console.log(`Server is running on port ${config.server_port}`);
});
