const express = require('express');
const router = express.Router();
const eventController = require('../controllers/api/eventController');



//getting all events
router.get('/events', eventController.getAllEvents)
//getting the note
router.get('/event/:id', eventController.getEvent);
//saving event
router.post('/event', eventController.saveEvent);
//editing an event
router.put('/event/:id', eventController.updateEvent);
//deleting an event
router.delete('/event/:id', eventController.deleteEvent);

module.exports = router;