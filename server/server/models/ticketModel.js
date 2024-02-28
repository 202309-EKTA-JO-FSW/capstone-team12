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
    },
    numberOfTickets: {
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
    // price: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Event",
    // },

    ticketType: {
        type: String,
        neum: ['VIP', 'Normal'],
        default: 'Normal',
    },

    boughtTickets: {
        type: Number,
        default: 0,
        min: 0,
    },




});

module.exports = mongoose.model("Ticket", ticketSchema);