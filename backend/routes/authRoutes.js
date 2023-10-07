const express = require('express');
const router = express.Router();

const {register, login, emailConfirmation} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/email-confirmation', emailConfirmation);

module.exports = router;