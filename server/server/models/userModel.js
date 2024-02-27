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
        // required: true,
    },
    nationality: {
        type: String,
    },
    address: {
        type: String,
    },
    

},
{
  timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);


// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//     },
//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// module.exports = mongoose.model('User', userSchema)