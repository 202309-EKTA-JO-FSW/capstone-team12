const Cart = require('../models/cartModel');

// Add item to cart
const addItemToCart = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const { ticketId, quantity } = req.body;

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({
                user: userId,
                items: []
            });
        }

        // Check if item already exists in cart
        const existingItemIndex = cart.items.findIndex(item => item.ticket.toString() === ticketId);
        if (existingItemIndex !== -1) {
            // If exists, update quantity
            cart.items[existingItemIndex].quantity += quantity;
        } else {
            // If doesn't exist, add new item
            cart.items.push({ ticket: ticketId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(400);
        return next(new Error('Failed to add item to cart'));
    }
};

// Remove item from cart
const removeItemFromCart = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const { ticketId } = req.params;

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            res.status(404);
            return next(new Error('Cart not found'));
        }

        cart.items = cart.items.filter(item => item.ticket.toString() !== ticketId);

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(400);
        return next(new Error('Failed to remove item from cart'));
    }
};

// Clear cart
const clearCart = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            res.status(404);
            return next(new Error('Cart not found'));
        }

        cart.items = [];

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(400);
        return next(new Error('Failed to clear cart'));
    }
};

const getUserCart = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const cart = await Cart.findOne({ user: userId }).populate('items.ticket');

        if (!cart) {
            res.status(404);
            return next(new Error('Cart not found'));
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(400);
        return next(new Error('Failed to fetch user cart'));
    }
};

module.exports = { addItemToCart, removeItemFromCart, clearCart, getUserCart};
