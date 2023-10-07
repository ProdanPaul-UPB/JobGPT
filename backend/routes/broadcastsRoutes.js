const express = require('express');
const router = express.Router();
const {
    getAllBroadcasts, getBroadcastById, createBroadcast, updateBroadcast,
} = require('../controllers/broadcastsController');
const {authenticateUser} = require("../middleware/authenticate");

// Get all broadcasts
router.route('/').get(getAllBroadcasts);

// Get a specific broadcast by its UUID
router.route('/:uuid').get(getBroadcastById);

// Create a new broadcast (requires authentication)
router.route('/').post(authenticateUser, createBroadcast);

// Update a broadcast (requires authentication)
router.route('/').put(authenticateUser, updateBroadcast);

module.exports = router;
