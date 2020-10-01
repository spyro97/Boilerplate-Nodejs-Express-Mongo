const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', UserSchema);