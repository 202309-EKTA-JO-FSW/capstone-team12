const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/add', authMiddleware, cartController.addItemToCart);

router.delete('/remove/:ticketId', authMiddleware, cartController.removeItemFromCart);

router.delete('/clear', authMiddleware, cartController.clearCart);

router.get('/', authMiddleware, cartController.getUserCart);

module.exports = router;
