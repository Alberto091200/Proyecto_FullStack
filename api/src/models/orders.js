const mongoose = require("mongoose")
const { Schema } = mongoose
const { body } = require("express-validator")

const ordersSchema = new Schema({
  estPagado: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
  total: { type: Number, required: true },
  fechaCompra: { type: Date, default: Date.now },
})

const Orders = mongoose.model("Orders", ordersSchema)

const ordersValidation = [
  body("estPagado").notEmpty(),
]

exports.Orders = Orders
exports.ordersValidation = ordersValidation