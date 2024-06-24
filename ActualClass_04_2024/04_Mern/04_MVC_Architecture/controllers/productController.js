const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    const allProducts = await productModel.find();
    console.log("all products: ", allProducts);
    return res.status(201).json(allProducts);
};


const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).json(product);
};

const createProduct = async function (req, res) {
    console.log("Product Creation is in progress.");

    const {
        product_name,
        product_price,
        category,
        isInStock,
        password,
        confirmPassword,
    } = req.body;

    try {
        const product = await productModel.create({
            product_name: product_name,
            product_price: product_price,
            category: category,
            isInStock: isInStock,
            password: password,
            confirmPassword: confirmPassword
        });

        console.log("product: ", product);
        return res.status(201).json({ message: "Product created successfully" });
    } catch (err) {
        console.log("error: ", err);
        return res.status(400).json({ message: err.message });

    }
};

const updateProductById = async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
};

const deleteProductById = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "Product Deleted successfully" });
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
}