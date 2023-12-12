const {  Products } = require("../models/products")

const create = async (req, res) => {
  const newProduct = await Products.create(req.body)

  res.json(newProduct)
}

const getAll = async (req, res) => {
  const products = await Products.find()

  res.json(products)
}

const update = async (req, res) => {
  const product = await Products.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  })

  res.json(product)
}

const remove = async (req, res) => {
  console.log(req.params.productId)
  const product = await Products.findByIdAndDelete(req.params.productId)

  if (!product) return res.status(404).json({ msg: "Producto no existe" })

  res.json(product)
}

module.exports = {
  create,
  getAll,
  update,
  remove,
}
