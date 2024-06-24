const mongoose = require("mongoose");
const express = require("express")

const app = express();
app.use(express.json());

const dbURL = "mongodb+srv://rajneeshkumar146:SAfmmRVnZLAIMmUk@cluster0.twfteet.mongodb.net/";

// connect to DB.
mongoose.connect(dbURL).then(function (connection) {
    // console.log("Connected to MongoDB: ", connection);
    console.log("Connected to MongoDB");
}).catch(function (err) {
    console.log("error: ", err);
});


/**
   "product_name":"iPhone 19",
   "product_price":"$2000",
   "isInStock":true,
   "category":"Phone",
   "password":"123456789",
   "confirmPassword":"123456789"
 */

// create a schema.
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    isInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function () {
                return this.password == this.confirmPassword;
            },
            message: "Password and confirm password should be same",
        }
    }
});

const productModel = mongoose.model("Products", productSchema);

app.post("/api/products", async function (req, res) {
    const body = req.body;
    console.log("body: ", body);

    try {
        const product = await productModel.create({
            product_name: body.product_name,
            product_price: body.product_price,
            category: body.category,
            isInStock: body.isInStock,
            password: body.password,
            confirmPassword: body.confirmPassword
        });

        console.log("product: ", product);
        return res.status(201).json({ message: "Product created successfully" });
    } catch (err) {
        console.log("error: ", err);
        return res.status(400).json({ message: err.message });

    }
});

app.get("/api/products", async function (req, res) {
    const allProducts = await productModel.find();
    // const allProducts = await productModel.find({ category: "TV" });

    console.log("all products: ", allProducts);
    return res.status(201).json(allProducts);
});

app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).json(product);
});

app.put("/api/products/:id", async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
});

app.patch("/api/products/:id", async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
});

app.delete("/api/products/:id", async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "Product Deleted successfully" });
});


app.listen(3000, function () {
    console.log("Server is running");
})