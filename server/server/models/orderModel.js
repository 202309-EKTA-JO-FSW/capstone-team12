// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const orderSchema = new mongoose.Schema({
//     boughtTickets: {
//         type: Number,
//         default: 0,
//         min: 0,
//     },
//     ticketItems: [
//         {
//             ticketId: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Ticket', 
//             },
//         },
//     ],
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User', 
//     },
// },
// {
//     timestamps: true,
// });

// module.exports = mongoose.model('Order', orderSchema);

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    boughtTickets: {
        type: Number,
        // required: true
    },
    ticketItems: [
        {
            ticketId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ticket',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);


