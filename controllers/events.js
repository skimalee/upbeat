const Event = require('../models/event')
const User = require('../models/user')
const fetch = require('node-fetch')


async function getEvents(req, res) {
    const query=`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${req.body.query}&apikey=${process.env.TICKETMASTER_API}`.replace(' ', '%')
    await fetch(query)
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Bad call')
        })
        .then(data => {
            res.json({data})
        })
}

async function addEvent(req, res) {
    const user = await User.findById(req.body.event.user._id)
    console.log(user)
    // const incomingEvent = { 
    //     name: req.body.event.name,
    //     ticketmasterId: req.body.event.id,
    // }
    // const event = new Event(incomingEvent)
    // res.json({event})
    res.send('hihi')
}

module.exports = { getEvents, addEvent };
