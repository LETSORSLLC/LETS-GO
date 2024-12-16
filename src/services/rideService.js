const Ride = require('../models/rideModel');

// Function to create a new ride
exports.createRide = async (userId, driverId, origin, destination) => {
  try {
    const newRide = new Ride({
      user: userId,
      driver: driverId,
      origin,
      destination,
    });
    await newRide.save();
    return newRide;
  } catch (error) {
    throw new Error('Error creating ride: ' + error.message);
  }
};

// Function to get the status of a ride
exports.getRideStatus = async (rideId) => {
  try {
    const ride = await Ride.findById(rideId);
    if (!ride) {
      throw new Error('Ride not found');
    }
    return ride.status;
  } catch (error) {
    throw new Error('Error getting ride status: ' + error.message);
  }
};

// Function to get the ride history of a user
exports.getRideHistory = async (userId) => {
  try {
    const rides = await Ride.find({ user: userId });
    return rides;
  } catch (error) {
    throw new Error('Error getting ride history: ' + error.message);
  }
};
