const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// API endpoints
router.post("/products", productController.addProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id/stock", productController.updateStock);
router.post("/products/:id/reviews", productController.addReview);

// ✅ VERY IMPORTANT: export router
module.exports = router;



