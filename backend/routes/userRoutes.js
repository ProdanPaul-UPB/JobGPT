const express = require('express');
const router = express.Router();
const {getAllUsers, getUser, updateMe, deleteMe} = require("../controllers/userController");
const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllUsers);

router.route('/me').put(authenticateUser, updateMe);

router.route('/me').delete(authenticateUser, deleteMe);

router.route('/:username').get(getUser);

module.exports = router;
