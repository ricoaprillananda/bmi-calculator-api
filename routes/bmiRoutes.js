const express = require('express');
const router = express.Router();
const { calculateBMI } = require('../controllers/bmiController');

router.post('/', calculateBMI);

module.exports = router;
