const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: String,
    eventId: String,
    thumbnail: String,
    venue: String,
    dateTime: Date,
    seatMap: String,
    user: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }]
});


module.exports = mongoose.model('Event', eventSchema)