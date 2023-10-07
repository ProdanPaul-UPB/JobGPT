const express = require('express');
const router = express.Router();

const {
    getAllSocialProfiles, getSocialProfile, createSocialProfile, updateSocialProfile
} = require("../controllers/socialProfileController");

const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllSocialProfiles);

router.route('/:uuid').get(getSocialProfile);

router.route('/').post(authenticateUser, createSocialProfile);

router.route('/').put(authenticateUser, updateSocialProfile);

module.exports = router;