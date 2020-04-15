const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/events");

/*---------- Public Routes ----------*/
router.post("/get", eventsCtrl.getEvents);

/*---------- Protected Routes ----------*/

module.exports = router;
