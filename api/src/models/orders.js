const mongoose = require("mongoose")
const { Schema } = mongoose
const { body } = require("express-validator")

const {productsSchema} = require('./products.js')

const ordersSchema = new Schema({
  estPagado: { type: Boolean, default: false, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [productsSchema],
  total: { type: Number, required: true },
  fechaCompra: { type: Date, default: Date.now },
})

const Orders = mongoose.model("Orders", ordersSchema);

const ordersValidation = [

]

exports.Orders = Orders
exports.ordersValidation = ordersValidation