// const mongoose = require("mongoose");

// const ticketSchema = mongoose.Schema({
//     ticketId: {
//         type: Number,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     eventId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Event",
//     },
//     numberOfTickets: {
//         type: Number,
//         required: true,
//         min: 0,
//     },
//     eventDate: {
//         type: Date,
//     },
//     // price
//     price: {
//         type: Number,
//         required: true,
//         min: 0,
//     },

//     ticketType: {
//         type: String,
//         enum: ['VIP', 'Normal'],
//         default: 'Normal',
//     },

// });

// module.exports = mongoose.model("Ticket", ticketSchema);

const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    ticketId: {
        type: Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    numberOfTickets: {
        type: Number,
        required: true,
        min: 0,
    },
    availableTickets: {
        type: Number,
        required: true,
        min: 0,
    },
    eventDate: {
        type: Date,
    },
    // price
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    ticketType: {
        type: String,
        enum: ['VIP', 'Normal'],
        default: 'Normal',
    },
});

module.exports = mongoose.model("Ticket", ticketSchema);