const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Add item to cart
router.post('/add', authMiddleware, cartController.addItemToCart);

// Remove item from cart
router.delete('/remove/:ticketId', authMiddleware, cartController.removeItemFromCart);

// Clear cart
router.delete('/clear', authMiddleware, cartController.clearCart);

router.get('/', authMiddleware, cartController.getUserCart);

module.exports = router;
