const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/jokes", jokeController.getJokes);
  app.get("/api/jokes/:id", jokeController.getJokeById);
  app.post("/api/jokes", jokeController.createJoke);
  app.put("/api/jokes/:id", jokeController.updateJoke);
  app.delete("/api/jokes/:id", jokeController.deleteJoke);
};
