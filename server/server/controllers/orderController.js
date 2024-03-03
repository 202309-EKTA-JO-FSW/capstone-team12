const Order = require('../models/orderModel');

// Create a new order
const createOrder = async (req, res, next) => {
  try {
    const { boughtTickets, ticketItems } = req.body;
    const userId = req.user._id; // Assuming you have authentication middleware

    const order = await Order.create({
      boughtTickets,
      ticketItems,
      user: userId // Associate the order with the user
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400);
    return next(new Error('Failed to create order'));
  }
};

// Get all orders for a user
const getUserOrders = async (req, res, next) => {
  try {
    const userId = req.user._id; // Assuming you have authentication middleware

    const orders = await Order.find({ user: userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(400);
    return next(new Error('Failed to fetch user orders'));
  }
};

// Get details of a specific order
const getOrderDetails = async (req, res, next) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);

    if (!order) {
      res.status(404);
      return next(new Error('Order not found'));
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400);
    return next(new Error('Failed to fetch order details'));
  }
};

// Update an existing order
const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, { new: true });

    if (!updatedOrder) {
      res.status(404);
      return next(new Error('Order not found'));
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400);
    return next(new Error('Failed to update order'));
  }
};

// Delete an existing order
const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      res.status(404);
      return next(new Error('Order not found'));
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(400);
    return next(new Error('Failed to delete order'));
  }
};

module.exports = { createOrder, getUserOrders, getOrderDetails, updateOrder, deleteOrder };
