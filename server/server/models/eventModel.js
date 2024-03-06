const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    rating: {
        type: String,
        enum: ['Excellent', 'Very good', 'Good'],
        required: true,
    },
    comment: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const eventSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    description: {
        type: [String],
        default: ["Event"],
    },
    category: {
        type: String,
        enum: ['Sports', 'Theater', 'Concerts', 'Festivals', 'Conferences', 'Exhibitions'],
        required: true,
    },
    eventImage: String,
    numberOfGuests: {
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
    tags: {
        type: [String],
        enum: ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly', "UpComing"],
    },
    tickets: [{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
     }],
    reviews: [reviewSchema],
}, { timestamps: true });

module.exports = {
    Review: mongoose.model('Review', reviewSchema),
    Event: mongoose.model('Event', eventSchema),
};

