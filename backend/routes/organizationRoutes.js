const express = require('express');
const router = express.Router();
const {
    getAllOrganizations,
    getOrganization,
    getOrganizationByUsername,
    createOrganization,
    updateOrganization,
    deleteOrganization
} = require("../controllers/organizationController");

const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllOrganizations);

router.route('/').post(authenticateUser, createOrganization);

router.route('/').put(authenticateUser, updateOrganization);

router.route('/').delete(authenticateUser, deleteOrganization);

router.route('/:uuid').get(getOrganization);

router.route('/username/:username').get(getOrganizationByUsername);

module.exports = router;
