const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: String,
  comment: String,
  rating: Number
});

const productSchema = new mongoose.Schema({
  productId: String,
  name: String,
  brand: String,
  price: Number,
  stock: Number,
  ratings: Number,
  reviews: [reviewSchema]
});

module.exports = mongoose.model("Product", productSchema);
