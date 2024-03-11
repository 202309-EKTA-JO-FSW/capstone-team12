const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
    // },
    // eventId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Event",
    //     required:true,
    // }
        
    
});

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    

        // eventId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Event",
        // required:true},
    items: [cartItemSchema]
});

module.exports = mongoose.model('Cart', cartSchema);
