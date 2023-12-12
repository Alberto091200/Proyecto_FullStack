const mongoose = require("mongoose")
const { body } = require("express-validator")

const ordersSchema = new mongoose.Schema({
  estPagado: { type: Boolean, required: true },
})

const Orders = mongoose.model("Orders", ordersSchema)

const ordersValidation = [
  body("estPagado").notEmpty(),
]

exports.Orders = Orders
exports.ordersValidation = ordersValidation
