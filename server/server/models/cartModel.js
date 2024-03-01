const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bill: {
        type: Number
    },
    //info for  tickets for different events  
    //for example in the cart  6 tickets for a sport event ,7 for a concert ... 
    ticketItems: [
        {
            quantity: {
                type: Number,
            },
            ticketId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ticket",
            },

        },
    ],
});

module.exports = mongoose.model("Cart", cartSchema);