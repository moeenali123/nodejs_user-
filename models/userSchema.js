const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    number: {
        type: Number,  // Fixed incorrect type
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    Account_status: {  
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;