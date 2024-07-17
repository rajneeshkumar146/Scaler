const express = require("express");

require('dotenv').config();  // to access the environment variales.
const rateLimit = require("express-rate-limit")

const connectDB = require("./config/dbConfig");
const userRouter = require("./routes/userRouter")
const movieRouter = require("./routes/movieRoute");
const theatreRouter = require("./routes/theatreRoute");
const showRouter = require("./routes/showRoute");
const bookingRouter = require("./routes/bookingRoute");

const app = express();
// app.use("/api/bookings/verify", express.raw({ type: "application/json" }));
app.use(express.json());

connectDB();

// Rate limiter middleware.
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each Ip to 100 request per window.
    message: "Too many request from the IP, Please try again after 15 minutes"
});

// Apply rate limiter to all API routes.
app.use("/api/", apiLimiter);


/** Routes */
app.use('/api/users', userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Page not found" });
});

app.listen(8082, () => {
    console.log("Server is running on port 8082");
})