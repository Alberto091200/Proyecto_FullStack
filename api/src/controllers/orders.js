const { Orders } = require('../models/orders')
const { User } = require('../models/user')
const { Products } = require('../models/products')
const { validationResult } = require('express-validator')

const getAll = async (req, res) => {
  try {
    const orders = await Orders.find().populate('user products')
    res.json(orders)
  } catch (error) {
    console.error('Error al obtener las órdenes:', error)
    res.status(500).json({ msg: 'Error interno del servidor', error })
  }
  
}

const create = async (req, res) => {
  try {
    const userId = req.user.id
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }

    if (!user.orders) {
      user.orders = [];
    }

    const productIds = req.body.products
    const products = await Products.find({ _id: { $in: productIds } })

    if (products.length !== productIds.length) {
      return res.status(400).json({ msg: 'Algunos productos no fueron encontrados' })
    }

    const total = products.reduce((acc, product) => acc + product.precio, 0)

    const newOrder = await Orders.create({
      estPagado: req.body.estPagado,
      user: userId,
      products: productIds,
      total: total,
      fechaCompra: new Date(),
    })

    user.orders.push(newOrder._id)
    await user.save()

    res.json(newOrder)
  } catch (error) {
    console.error('Error al crear la orden:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
}

const update = async (req, res) => {
  try {
    const order = await Orders.findByIdAndUpdate(req.params.orderId, req.body, { new: true })
    res.json(order)
  } catch (error) {
    console.error('Error al actualizar la orden:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
}

// const remove = async (req, res) => {
//   try {
//     const order = await Orders.findByIdAndDelete(req.params.orderId)

//     if (!order) {
//       return res.status(404).json({ msg: 'Orden no encontrada' })
//     }

//     const user = await User.findById(order.user)
//     if (user && user.orders) {
//       user.orders = user.orders.filter(orderId => !orderId.equals(order._id))
//       await user.save()
//     }

//     res.json(order)
//   } catch (error) {
//     console.error('Error al eliminar la orden:', error)
//     res.status(500).json({ msg: 'Error interno del servidor' })
//   }
// }

module.exports = {
  getAll,
  create,
  update,
  //remove,
}
