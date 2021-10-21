
const mongoose = require('mongoose');

const Event = mongoose.model('Event',{
    eventName: String,
    firstName: String,
    lastName: String,
    email: String,
    EventDate: Date
});

module.exports = Event;