const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const orderSchema = new mongoose.Schema({
//     boughtTickets: {
//         type: Number,
//         default: 0,
//         min: 0,
//     },
//     TicketItems: [
//         {
//             ticketId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Ticket",
//             },
//         },
//     ],

// });
const userSchema = new Schema({
    userId: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    dateofBirth: {
        type: Date,
    },
    nationality: {
        type: String,
    },
    location: {
        type: String,
    },
    ////////// added 
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
    },
//     orders: [orderSchema],
},
    {
        timestamps: true,
    }
);
// module.exports = mongoose.model("Order", orderSchema);
module.exports = mongoose.model("User", userSchema);






