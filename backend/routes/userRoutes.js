const express = require('express');
const router = express.Router();
const {getAllUsers, getUser, updateMe, deleteMe} = require("../controllers/userController");
const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllUsers);

router.route('/').put(authenticateUser, updateMe);

router.route('/').delete(authenticateUser, deleteMe);

router.route('/:username').get(getUser);

module.exports = router;
