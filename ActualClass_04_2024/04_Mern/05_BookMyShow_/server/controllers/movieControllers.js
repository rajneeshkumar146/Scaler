const Movie = require("../model/movieModel");

const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.send({
            success: "true",
            message: "New Movie added successfully"
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllMovie = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.send({
            success: "true",
            message: "All Movies fetched successfully",
            data: allMovies
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}

const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.send({
            success: "true",
            message: "Movie updated successfully",
            data: updatedMovie
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}

const deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success: "true",
            message: "Movie updated successfully",
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}

module.exports = {
    addMovie,
    getAllMovie,
    updateMovie,
    deleteMovie
};