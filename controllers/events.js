const Event = require('../models/event')
const User = require('../models/user')
const fetch = require('node-fetch')


async function getEvents(req, res) {
    const query=`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${req.body.query}&apikey=${process.env.TICKETMASTER_API}`.replace(' ', '%')
    await fetch(query)
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Bad call')
        })
        .then(data => {
            res.json({data})
        })
}

async function  addEvent(req, res) {
    const event = await Event.findOne({eventId: req.body.event.eventId})
    if (event) {
        event.user.push(req.user)
        event.save();
        console.log(event)
        res.status(201).json({event})
    } else {
        const newEvent = await Event.create(req.body.event)
        newEvent.user.push(req.user)
        newEvent.save();
        console.log(newEvent)
        res.status(201).json({newEvent})
    }
}

async function getRandom(req, res) {
    console.log(req.body)
    const query = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&latlong=${req.body.location.lat},${req.body.location.long}&apikey=${process.env.TICKETMASTER_API}`
    await fetch(query)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad call')
    })
    .then(data => {
        res.json({data})
    })
}
module.exports = { getEvents, addEvent, getRandom };
