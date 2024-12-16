const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// Route to create a new ride
router.post('/rides', rideController.createRide);

// Route to get the status of a ride
router.get('/rides/:rideId/status', rideController.getRideStatus);

// Route to get the ride history of a user
router.get('/users/:userId/rides', rideController.getRideHistory);

module.exports = router;
