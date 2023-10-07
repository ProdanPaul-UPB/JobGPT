const express = require('express');
const router = express.Router();
const {
    getAllJobsInBroadcast, createJob, getJob, updateJobInBroadcast
} = require('../controllers/jobsController');
const {authenticateUser} = require("../middleware/authenticate");

router.route('/:uuid').get(getAllJobsInBroadcast);
router.route('/:uuid').get(getJob);
router.route('/').post(authenticateUser, createJob);
router.route('/').put(authenticateUser, updateJobInBroadcast);

module.exports = router;
