const mongoose = require("mongoose")
const { body } = require("express-validator")

const productsSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
  imageURL: { type: String, required: true }
})

const Products = mongoose.model("Products", productsSchema)

const productValidation = 
  body("nombre").notEmpty()


exports.Products = Products
exports.productValidation = productValidation
