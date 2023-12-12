const { Orders } = require('../models/orders')

const getAll = async (req, res) => {
	const orders = await Orders.find()
  
	res.json(orders)
  }

const create = async (req, res) => {
	const newOrder = await Orders.create(req.body)

	res.json(newOrder)
}

const update = async (req, res) => {
	const order = await Orders.findByIdAndUpdate(req.params.orderId, req.body, {
		new: true,
	})

	res.json(order)
}

const remove = async (req, res) => {
	const order = await Orders.findByIdAndDelete(req.params.orderId)

	res.json(order)
}

module.exports = {
	getAll,
	create,
	update,
	remove,
}
