const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const Broadcast = require('../models/Broadcast');
const Job = require('../models/Job');

const createJob = async (req, res) => {
    try {
        const {content, broadcastId} = req.body;

        const broadcast = await Broadcast.findByPk(broadcastId);
        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        const job = await Job.create({content, broadcastId});

        res.status(StatusCodes.CREATED).json({job});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

const getAllJobsInBroadcast = async (req, res) => {
    try {
        const {broadcastId} = req.params;

        const broadcast = await Broadcast.findByPk(broadcastId);
        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        const jobs = await Job.findAll({where: {broadcastId}});

        res.status(StatusCodes.OK).json({jobs});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

const getJobInBroadcastById = async (req, res) => {
    try {
        const {broadcastId, jobId} = req.params;

        const broadcast = await Broadcast.findByPk(broadcastId);
        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        const job = await Job.findOne({where: {broadcastId, uuid: jobId}});

        if (!job) {
            throw new CustomError.NotFoundError('Job not found');
        }

        res.status(StatusCodes.OK).json({job});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

const updateJobInBroadcast = async (req, res) => {
    try {
        const {broadcastId, jobId} = req.params;
        const {content} = req.body;

        const broadcast = await Broadcast.findByPk(broadcastId);
        if (!broadcast) {
            throw new CustomError.NotFoundError('Broadcast not found');
        }

        const job = await Job.findOne({where: {broadcastId, uuid: jobId}});

        if (!job) {
            throw new CustomError.NotFoundError('Job not found');
        }

        await job.update({content});

        res.status(StatusCodes.OK).json({job});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

module.exports = {
    createJob, getAllJobsInBroadcast, getJobInBroadcastById, updateJobInBroadcast,
};
