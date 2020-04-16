const express = require("express");
const router = express.Router();
const Event = require('../../models/event')
const eventsCtrl = require("../../controllers/events");

/*---------- Public Routes ----------*/
router.use(require('../../config/auth'));
router.post("/get", checkAuth, eventsCtrl.getEvents);
router.post("/", checkAuth, eventsCtrl.addEvent);


/*---------- Protected Routes ----------*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
