const express = require('express');
const router = express.Router();
const {
    getAllStudents, getStudent, getStudentByUsername, createStudent, deleteStudent, updateStudent
} = require("../controllers/studentController");
const {authenticateUser} = require("../middleware/authenticate");

router.route('/').get(getAllStudents);

router.route('/').post(createStudent);

router.route('/').put(authenticateUser, updateStudent);

router.route('/').delete(authenticateUser, deleteStudent);

router.route('/:uuid').get(getStudent);

router.route('/username/:username').get(getStudentByUsername);

module.exports = router;
