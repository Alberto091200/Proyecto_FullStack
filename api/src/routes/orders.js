const { ordersValidation } = require('../models/orders')
const ordersController = require('../controllers/orders')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const validate = require('../middlewares/validate')

const { Router } = require('express')

const router = Router()

const { query } = require('express-validator')

router.get('/', auth, ordersController.getAll)

router.post(
	'/',
 	auth,
	ordersValidation,
	validate,
	ordersController.create
)

router.put(
	'/',
	auth,
	mongoIdFromParamValidation('orderId'),
	ordersValidation,
	validate,
	ordersController.update
)

router.delete(
	'/',
	auth,
	admin,
	mongoIdFromParamValidation('orderId'),
	ordersController.remove
)

module.exports = router
