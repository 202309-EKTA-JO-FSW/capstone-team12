const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    boughtTickets: {
        type: Number,
        default: 0,
        min: 0,
    },
    ticketItems: [
        {
            ticketId: {
                type: Schema.Types.ObjectId,
                ref: 'Ticket', // Assuming you have a Ticket model
            },
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
