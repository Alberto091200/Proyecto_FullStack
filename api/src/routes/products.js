const { productValidation } = require('../models/products')
const productController = require('../controllers/products')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')
const validate = require('../middlewares/validate')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get(
	'/',
	productController.getAll
)

router.get(
	'/:name',
	productController.getByname
)


router.post(
	'/',
	[auth, admin],
	[productValidation,validate],
	productController.create
)

router.put(
	'/:name',
	[auth, admin],
	[productValidation,validate],
	productController.update
)

router.delete(
	'/:name',
	[auth, admin],
	productController.remove
  )
  

router.post(
	'/users/:userId/wishlist/:_id',
	auth,
	productController.addToWishList
)

router.delete(
	'/users/:userId/wishlist/:name',
	auth,
	productController.removeFromWishList
)


module.exports = router
