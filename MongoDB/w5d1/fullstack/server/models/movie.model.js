const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A movie title is required"],
      maxlength: [40, "The title length should be no more than 40 characters"],
    },
    genre: {
      type: String,
      required: [true, "A movie genre is required"],
      enum: [
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Fantasy",
        "Action",
        "Family",
        "Animated",
        "Documentary",
        "Romcom",
        "Silent Movie",
        "Thriller",
        "Crime Noir",
        "French Cinema",
      ],
    },
    boxArt: {
      type: String,
      required: [true, "Movie boxArt is required"],
    },
    duration: {
      type: String,
      default: "N/A",
    },
    rating: {
      type: String,
      required: [true, "Movie rating is required"],
      enum: ["G", "PG", "PG-13", "R", "NC-17"],
    },
    actors: { type: [String] },
    isKidFriendly: {
      type: Boolean,
      default: false,
    },
    releaseYear: {
      type: Number,
      min: [1922, "Too old"],
    },
  },

  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;
