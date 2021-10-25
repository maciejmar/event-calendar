
const mongoose = require('mongoose');
const { database } = require('../../config');
const EventSchema = new mongoose.Schema({
    eventName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match:  /.+\@.+\..+/,
        unique: true
    },
    eventDate: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;