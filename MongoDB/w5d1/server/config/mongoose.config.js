const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost/mongo-demo";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to the db"))
  .catch((err) => console.log("ERROR IN CONNECTION TO DB", err));
