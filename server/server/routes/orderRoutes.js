const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new order
router.post('/orders', authMiddleware, orderController.createOrder);

// Get all orders for the current user
router.get('/orders', authMiddleware, orderController.getUserOrders);

// Get details of a specific order
router.get('/orders/:id', authMiddleware, orderController.getOrderDetails);

// Update an existing order
router.put('/orders/:id', authMiddleware, orderController.updateOrder);

// Delete an existing order
router.delete('/orders/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;

