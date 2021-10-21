const express = require('express');
const router = express.Router();
const eventController = require('../controllers/api/events');

router.get('/', eventController.saveEvent);



module.exports = router;