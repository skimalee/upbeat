
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

module.exports = { getEvents };
