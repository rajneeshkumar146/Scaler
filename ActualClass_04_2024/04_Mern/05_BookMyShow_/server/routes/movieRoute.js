const movieRouter = require("express").Router();
const {
    addMovie,
    getAllMovie,
    updateMovie,
    deleteMovie,
} = require("../controllers/movieControllers");

movieRouter.post("/add-movie", addMovie);
movieRouter.get("/get-all-movies", getAllMovies);
movieRouter.put("/update-movies", updateMovies)
movieRouter.post("/delete-movie", deleteMovie);

module.exports = userRouter;
