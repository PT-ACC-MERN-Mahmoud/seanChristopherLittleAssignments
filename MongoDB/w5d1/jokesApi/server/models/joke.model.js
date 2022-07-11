const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: String,
    setUp: String,
    punchLine: String,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;
