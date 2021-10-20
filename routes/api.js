const express = require('express');
const router = express.Router();
const testController = require('../controllers/api/test');

router.get('/', testController.homepage)



module.exports = router;