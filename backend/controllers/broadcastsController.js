const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');
const Broadcast = require('../models/Broadcast');
const CustomError = require('../errors');
const {StatusCodes} = require('http-status-codes');

// Create a new broadcast
const createBroadcast = async (req, res) => {
    try {
        const {title, description} = req.body;
        const {userId} = req.user;

        // Create a new broadcast
        const broadcast = await Broadcast.create({title, description, userId});

        res.status(StatusCodes.CREATED).json({broadcast});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Get all broadcasts
const getAllBroadcasts = async (req, res) => {
    try {
        const broadcasts = await Broadcast.findAll();

        res.status(StatusCodes.OK).json({broadcasts});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Get a single broadcast by ID
const getBroadcastById = async (req, res) => {
    try {
        const {broadcastId} = req.params;

        const broadcast = await Broadcast.findByPk(broadcastId);

        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        res.status(StatusCodes.OK).json({broadcast});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Update a broadcast by ID
const updateBroadcast = async (req, res) => {
    try {
        const {broadcastId} = req.params;
        const {title, description} = req.body;

        const broadcast = await Broadcast.findByPk(broadcastId);

        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        // Check if the user is the owner of the broadcast
        if (broadcast.userId !== req.user.userId) {
            throw new CustomError.ForbiddenError('You are not allowed to update this broadcast');
        }

        // Update the broadcast's title and description
        await broadcast.update({title, description});

        res.status(StatusCodes.OK).json({broadcast});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
}

module.exports = {
    createBroadcast, getAllBroadcasts, getBroadcastById, updateBroadcast,
};
