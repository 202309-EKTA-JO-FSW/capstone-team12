const mongoose = require('mongoose');
const reviewScemha = new mongoose.Schema({
    reviewId: {
        type: Number,
    },
    numberOfReviews: {
        type: Number,
        min: 0,
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
    rating: {
        type: String,
        neum: ['Excellent', 'Average', 'very Good', 'Good'],
        default: 'Excellent',
    },
});
module.exports = mongoose.model("Review", reviewScemha);