const { Router } = require('express');
const ordersController = require('../controllers/orders');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const validate = require('../middlewares/validate');

const router = Router();

router.get('/', auth, ordersController.getAll);
router.post('/', auth, validate, ordersController.create);
router.put('/:orderId', auth, admin, validate, ordersController.update);
// router.delete('/:orderId', auth, admin, ordersController.remove);

module.exports = router;
