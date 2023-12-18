const { Router } = require('express');
const ordersController = require('../controllers/orders');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const validate = require('../middlewares/validate');

const router = Router();

router.get('/', /* auth, */ ordersController.getAll);
router.post('/', /* auth, */  ordersController.create);
router.put('/:orderId', [/* auth ,*/ admin], ordersController.update);

module.exports = router;
