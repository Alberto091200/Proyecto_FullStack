const mongoose = require("mongoose")
const { body } = require("express-validator")

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  descripcion: { type: String, required: true },
  imageURL: { type: String, required: true }
})

const Products = mongoose.model("Products", productsSchema)

const productValidation = [
  body("name").notEmpty(),
  body("price").isNumeric(),
] 
  
exports.Products = Products
exports.productValidation = productValidation
exports.productsSchema = productsSchema
