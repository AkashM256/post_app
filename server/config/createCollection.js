const db = require("./db_connection");

async function createCollection(collection, schema) {
  try {
    await db.createCollection(collection, {
      validator: schema,
    });
    console.log("Collection created with schema validation");
  } catch (err) {
    console.error("Error creating collection:", err);
  }
}

module.exports = { createCollection };
