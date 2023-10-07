const express = require('express');
const router = express.Router();

const {changePassword, resetPassword, sendResetPasswordEmail} = require('../controllers/passwordController');
const {authenticateUser} = require("../middleware/authenticate");

router.route('/change-password').post(authenticateUser, changePassword);

router.route('/request-password-reset').post(sendResetPasswordEmail);

router.route('/reset-password/:code').post(resetPassword);

module.exports = router;