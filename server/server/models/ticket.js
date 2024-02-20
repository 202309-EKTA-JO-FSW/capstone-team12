const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    ticketId: {
        type: Number,
    },
    userId: {
        // type: Schema.Types.ObjectId,
        type: String,
        ref: "User",
    },
    eventId: {
        // type: Schema.Types.ObjectId,
        type: String,
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
        //type: Schema.Types.ObjectId,
        type: String,
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