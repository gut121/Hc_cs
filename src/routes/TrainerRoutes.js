const express = require('express');
const router = express.Router();
const TrainerController = require('../controllers/TrainerController');


router.get('/:id', TrainerController.getTrainerProfile);

module.exports = router;
