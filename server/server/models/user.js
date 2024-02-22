const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password_hash: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    dateofBirth: {
        type: Date,
        required: true,
    },
    nationality: {
        type: String,
    },
    address: {
        type: String,
    },

});

module.exports = mongoose.model("User", userSchema);