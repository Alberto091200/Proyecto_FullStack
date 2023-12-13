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
	'/:nombre',
	productController.getByNombre
)


router.post(
	'/',
	auth,
	admin,
	validate,
	productValidation,
	productController.create
)

router.put(
	'/:nombre',
	auth,
	admin,
	validate,
	productController.update
)

router.delete(
	'/:nombre',
	auth,
	admin,
	validate,
	productController.remove
  );
  

router.post(
	'/users/:userId/wishlist/:nombre',
	auth,
	validate,
	productController.toggleWishlist
)

module.exports = router
