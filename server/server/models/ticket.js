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
    price: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    },
    bill: {
        type: Number,
        required: true,
    },
    ticketType: {
        type: String,
        neum: ['VIP', 'Normal'],
        default: 'Normal',
    },
});

module.exports = mongoose.model("Ticket", ticketSchema);