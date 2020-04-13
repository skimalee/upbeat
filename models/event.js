const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    
})

const eventSchema = new Schema({
    name: String,
    date: Date,
    price: {
        type: Number,
        min: 0
    },
    images: [imageSchema]
});

module.exports = mongoose.model('Event', eventSchema)