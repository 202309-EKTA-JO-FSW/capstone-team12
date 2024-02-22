const mongoose = require('mongoose');
const eventScemha = new mongoose.Schema({
    eventId: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: String,
    category: {
        type: [String],
        //type: String,
        //   enum: ['Sport', 'Theater','Concert','Festivals'],
        required: true,
    },
    eventImage: {
        type: String,
    },
    numberOfGeust: {
        type: Number,
        required: true,
        min: 0,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    Tags: {
        type: String,
        neum: ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly'],
        default: 'Popular',
    },
    ticketId: {
        // type: Schema.Types.ObjectId,
        type: String,
        ref: "Ticket",
    },
    reviewID: {
        //type: Schema.Types.ObjectId,
        type: String,
        ref: "Review",
    },

});
module.exports = mongoose.model("Event", eventScemha);