const Movie = require("../models/movie.model");

module.exports = {
  getMovies: (req, res) => {
    Movie.find({})
      .then((movies) => {
        res.json(movies);
      })
      .catch((err) => {
        console.log("ERROR IN GET ALL", err);
        res.status(400).json({
          message: "something went wrong in find all movies",
          error: err,
        });
      });
  },
  getMovieById: (req, res) => {
    Movie.findOne({ _id: req.params.id })
      .then((movie) => {
        res.json(movie);
      })
      .catch((err) => {
        console.log("ERROR IN GET ONE", err);
        res.status(400).json({
          message: "something went wrong in findById",
          error: err,
        });
      });
  },
  createMovie: (req, res) => {
    Movie.create(req.body)
      .then((newMovie) => {
        res.status(201).json(newMovie);
      })
      .catch((err) => {
        console.log("ERROR IN CREATE", err);
        res.status(400).json({
          message: "something went wrong in create",
          error: err,
        });
      });
  },
  updateMovie: (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((movie) => {
        res.json(movie);
      })
      .catch((err) => {
        console.log("ERROR IN UPDATE", err);
        res.status(400).json({
          message: "something went wrong in update",
          error: err,
        });
      });
  },
  deleteMovie: (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id })
      .then((movie) => {
        res.json(movie);
      })
      .catch((err) => {
        console.log("ERROR IN DELETE", err);
        res.status(400).json({
          message: "something went wrong in delete",
          error: err,
        });
      });
  },
};
