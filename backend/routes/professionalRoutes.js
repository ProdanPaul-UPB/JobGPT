const express = require('express');
const router = express.Router();

const {
    getAllProfessionalProfiles, getProfessionalProfile, createProfessionalProfile, updateProfessionalProfile
} = require("../controllers/professionalProfileController");
const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllProfessionalProfiles);

router.route('/:uuid').get(getProfessionalProfile);

router.route('/').post(authenticateUser, createProfessionalProfile);

router.route('/').put(authenticateUser, updateProfessionalProfile);

module.exports = router;
