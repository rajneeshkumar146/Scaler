const express = require("express");

const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("../controllers/productController");
const productRouter = express.Router();

//Prefix of router:  /api/products

productRouter.get("/", getAllProducts); // Example: /api/products/
productRouter.get("/:id", getProductById);   // Example: /api/products/123
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.put("/:id", deleteProductById);


module.exports = productRouter;
