// const Order = require('../models/orderModel');


// // Create a new order
// const createOrder = async (req, res, next) => {
//   try {
//     const { boughtTickets, ticketItems } = req.body;
//     const userId = req.user._id; // Assuming you have authentication middleware
    

//     const order = await Order.create({
//       boughtTickets,
//       ticketItems,
//       user: userId // Associate the order with the user
//     });

//     res.status(201).json(order);
//   } catch (error) {
//     res.status(400);
//     return next(new Error('Failed to create order'));
//   }
// };

// // Get all orders for a user
// const getUserOrders = async (req, res, next) => {
//   try {
//     const userId = req.user._id; // Assuming you have authentication middleware

//     const orders = await Order.find({ user: userId });

//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(400);
//     return next(new Error('Failed to fetch user orders'));
//   }
// };

// // Get details of a specific order
// const getOrderDetails = async (req, res, next) => {
//   try {
//     const orderId = req.params.id;

//     const order = await Order.findById(orderId);

//     if (!order) {
//       res.status(404);
//       return next(new Error('Order not found'));
//     }

//     res.status(200).json(order);
//   } catch (error) {
//     res.status(400);
//     return next(new Error('Failed to fetch order details'));
//   }
// };

// // Update an existing order
// const updateOrder = async (req, res, next) => {
//   try {
//     const orderId = req.params.id;
//     const updates = req.body;

//     const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, { new: true });

//     if (!updatedOrder) {
//       res.status(404);
//       return next(new Error('Order not found'));
//     }

//     res.status(200).json(updatedOrder);
//   } catch (error) {
//     res.status(400);
//     return next(new Error('Failed to update order'));
//   }
// };

// // Delete an existing order
// const deleteOrder = async (req, res, next) => {
//   try {
//     const orderId = req.params.id;

//     const deletedOrder = await Order.findByIdAndDelete(orderId);

//     if (!deletedOrder) {
//       res.status(404);
//       return next(new Error('Order not found'));
//     }

//     res.status(200).json({ message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(400);
//     return next(new Error('Failed to delete order'));
//   }
// };

// module.exports = { createOrder, getUserOrders, getOrderDetails, updateOrder, deleteOrder };

const Order = require('../models/orderModel');
const Ticket = require('../models/ticketModel');

// Create a new order
const createOrder = async (req, res, next) => {
  try {
      const { boughtTickets, ticketItems } = req.body;
      const userId = req.user._id; // Assuming you have authentication middleware
      
      let totalPrice = 0; // Initialize total price

      // Check if there are enough available tickets for purchase and calculate total price
      for (const item of ticketItems) {
          const ticket = await Ticket.findById(item.ticketId);
          if (!ticket) {
              res.status(404);
              return next(new Error('Ticket not found'));
          }
          if (ticket.availableTickets < item.quantity) {
              res.status(400);
              return next(new Error('Not enough tickets available'));
          }
          // Increment total price
          totalPrice += item.quantity * ticket.price;
      }

      // Deduct the purchased tickets from available tickets
      for (const item of ticketItems) {
          await Ticket.findByIdAndUpdate(item.ticketId, { $inc: { availableTickets: -item.quantity } });
      }

      // Create the order with total price
      const order = await Order.create({
          boughtTickets,
          ticketItems,
          totalPrice, // Include total price in the order
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
// Update an existing order
const updateOrder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const updates = req.body;

        // Calculate new total price if ticket quantities or prices are updated
        let newTotalPrice = 0;
        if (updates.ticketItems) {
            for (const item of updates.ticketItems) {
                const ticket = await Ticket.findById(item.ticketId);
                if (!ticket) {
                    res.status(404);
                    return next(new Error('Ticket not found'));
                }
                newTotalPrice += item.quantity * ticket.price;
            }
        }

        // Update the order with the new total price
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { ...updates, totalPrice: newTotalPrice }, { new: true });

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

