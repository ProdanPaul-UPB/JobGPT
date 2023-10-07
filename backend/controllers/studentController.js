const {StatusCodes} = require('http-status-codes');
const User = require('../models/User');
const CustomError = require('../errors');
const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
    const students = await Student.findAll({
        where: {enabled: true}, attributes: ['uuid', 'firstname', 'lastname', 'enabled', 'description', 'createdAt', 'userId']
    });
    res.status(StatusCodes.OK).json({students, count: students.length});
};

const getStudent = async (req, res) => {
    try {
        const {uuid} = req.params;
        const student = await Student.findOne({where: {uuid}});
        if (!student) {
            throw new CustomError.NotFoundError(`Student with uuid ${uuid} does not exist`);
        }
        res.status(StatusCodes.OK).json(student);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const getStudentByUsername = async (req, res) => {
    try {
        const {username} = req.params;
        const user = await User.findOne({where: {username}});

        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }

        const student = await Student.findOne({where: {userId: user.uuid}});
        if (!student) {
            throw new CustomError.NotFoundError(`Student with username ${username} does not exist`);
        }
        res.status(StatusCodes.OK).json(student);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const createStudent = async (req, res) => {
    try {
        const {firstname, lastname, description} = req.body;
        const {uuid} = req.user;
        const student = await Student.create({firstname, lastname, description, userId: uuid});
        res.status(StatusCodes.CREATED).json({student});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const updateStudent = async (req, res) => {
    try {
        const {uuid} = req.user;
        const student = await Student.findOne({where: {userId: uuid}});
        if (!student) {
            throw new CustomError.NotFoundError(`Student with uuid ${uuid} does not exist`);
        }
        await student.update(req.body);
        res.status(StatusCodes.OK).json({student});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const deleteStudent = async (req, res) => {
    try {
        const {uuid} = req.user;
        const student = await Student.findOne({where: {userId: uuid}});
        if (!student) {
            throw new CustomError.NotFoundError(`Student with uuid ${uuid} does not exist`);
        }
        await student.destroy();
        res.status(StatusCodes.OK).json({message: 'Student deleted successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {
    getAllStudents, getStudent, getStudentByUsername, createStudent, updateStudent, deleteStudent
};
