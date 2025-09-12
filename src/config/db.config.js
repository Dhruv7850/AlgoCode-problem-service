const mongoose = require("mongoose");
const { NODE_ENV, PROD_DB_URL } = require("./server.config");
const InternalServerError = require("../errors/internalServer.error");

async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(PROD_DB_URL);
    }
  } catch (error) {
    console.log("Unable to connect to DB");
    throw new InternalServerError(
      "DB connection failed. Please check connection string and check db is up"
    );
  }
}

module.exports = connectToDB;