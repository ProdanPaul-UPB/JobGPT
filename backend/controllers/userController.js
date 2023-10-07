const {StatusCodes} = require('http-status-codes');
const User = require('../models/User');
const CustomError = require('../errors');


const getAllUsers = async (req, res) => {
    const users = await User.findAll({attributes: ['uuid', 'username', 'email', 'active', 'icon', 'createdAt']});
    res.status(200).json({users, count: users.length});
};

const getUser = async (req, res) => {
    try {
        const {username} = req.params;
        const user = await User.findOne({
            where: {username}, attributes: ['uuid', 'username', 'email', 'active', 'icon', 'createdAt']
        });
        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const updateMe = async (req, res) => {
    try {
        const {username} = req.user;
        const user = await User.findOne({
            where: {username}, attributes: ['uuid', 'username', 'email', 'active', 'icon', 'createdAt']
        });
        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }
        await user.update(req.body);
        res.status(200).json({user});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const deleteMe = async (req, res) => {
    try {
        const {username} = req.user;
        const user = await User.findOne({where: {username}});
        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }
        await user.destroy();
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {getAllUsers, getUser, updateMe, deleteMe};
