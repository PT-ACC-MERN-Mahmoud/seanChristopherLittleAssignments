const movieController = require("../controllers/movie.controller");

module.exports = (app) => {
  app.get("/api/movies", movieController.getMovies);
  app.get("/api/movies/:id", movieController.getMovieById);
  app.post("/api/movies", movieController.createMovie);
  app.put("/api/movies/:id", movieController.updateMovie);
  app.delete("/api/movies/:id", movieController.deleteMovie);
};
