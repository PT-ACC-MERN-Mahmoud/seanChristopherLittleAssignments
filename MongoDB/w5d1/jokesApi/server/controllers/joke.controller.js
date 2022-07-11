const Joke = require("../models/joke.model");

module.exports = {
  getJokes: (req, res) => {
    Joke.find({})
      .then((jokes) => {
        res.json(jokes);
      })
      .catch((err) => {
        console.log("ERROR IN GET ALL", err);
        res.status(400).json({
          message: "something went wrong in find all jokes",
          error: err,
        });
      });
  },
  getJokeById: (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then((joke) => {
        res.json(joke);
      })
      .catch((err) => {
        console.log("ERROR IN GET ONE", err);
        res.status(400).json({
          message: "something went wrong in findById",
          error: err,
        });
      });
  },
  createJoke: (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => {
        res.status(201).json(newJoke);
      })
      .catch((err) => {
        console.log("ERROR IN CREATE", err);
        res.status(400).json({
          message: "something went wrong in create",
          error: err,
        });
      });
  },
  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((joke) => {
        res.json(joke);
      })
      .catch((err) => {
        console.log("ERROR IN UPDATE", err);
        res.status(400).json({
          message: "something went wrong in update",
          error: err,
        });
      });
  },
  deleteJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id })
      .then((joke) => {
        res.json(joke);
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
