const { productValidation } = require('../models/products')
const productController = require('../controllers/products')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')
const validate = require('../middlewares/validate')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get('/product', productController.getAll)

router.post('/product', auth, admin, validate, productValidation, productController.create);
router.put(
	'/product/:productId',
	auth,
	admin,
	mongoIdFromParamValidation('productId'),
	productValidation,
	validate,
	productController.update
)

router.delete(
	'/product/:productId',
	auth,
	admin,
	mongoIdFromParamValidation('productId'),
	validate,
	productController.remove
) 

module.exports = router
