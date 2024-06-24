const mongoose = require("mongoose");
const express = require("express")

const connectDb = require("./config/db");
const productRouter = require("./routes/productRouter");

const app = express();
app.use(express.json());   // Middleware

connectDb();

// Routes.


app.use("/api/products", productRouter);


app.get("/", (req, res) => {
    res.status(201).send("Welcome to the home page.")
});

app.get((req, res) => {
    res.status(404).json({ message: "page not found" })
});

app.listen(3000, function () {
    console.log("Server is running");
})