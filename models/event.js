const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: String,
    ticketmasterId: String
});

module.exports = mongoose.model('Event', eventSchema)