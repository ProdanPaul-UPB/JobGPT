const express = require('express');
const router = express.Router();
const {
    getAllJobs, getJobById, createJob, updateJob, deleteJob,
} = require('../controllers/jobsController');
const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllJobs);
router.route('/:uuid').get(getJobById);
router.route('/').post(authenticateUser, createJob);
router.route('/').put(authenticateUser, updateJob);
router.route('/:uuid').delete(authenticateUser, deleteJob);

module.exports = router;
