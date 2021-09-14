const Event = require('../models/event')
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
    let event = await Event.findOne({eventId: req.body.event.eventId})
    if (event) {
        event.user.push(req.user)
        event.save();
        res.status(201).json({event})
    } else {
        event = await Event.create(req.body.event)
        event.user.push(req.user)
        event.save();
        res.status(201).json({event})
    }
}

async function getRandom(req, res) {
    const query = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&radius=5&page=${req.body.page}&latlong=${req.body.location.lat},${req.body.location.long}&apikey=${process.env.TICKETMASTER_API}`
    await fetch(query)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad call')
    })
    .then(data => {
        res.json({data})
    })
}

async function getTrackList(req, res) {
    const events = await Event.find()
    const trackList = events.filter(e => e.user.includes(req.user._id))
    res.status(201).json(trackList)
}

async function untrack(req, res) {
    const event = await Event.findOne({eventId: req.body.eventId})
    const idx = event.user.indexOf(req.user._id)
    event.user.splice(idx, 1)
    await event.save();
    const events = await Event.find()
    const trackList = events.filter(e => e.user.includes(req.user._id))
    res.status(201).json(trackList)
}

module.exports = { getEvents, addEvent, getRandom, getTrackList, untrack };
