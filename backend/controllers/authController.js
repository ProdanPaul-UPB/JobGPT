const User = require('../models/User');
const Token = require('../models/Token');
const CustomError = require('../errors');
const {createToken} = require('../utils/token');
const {StatusCodes} = require("http-status-codes");


const register = async (req, res) => {
    const {username, email, password} = req.body;

    const emailAlreadyExists = await User.findOne({email});
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError('Email already exists');
    }

    const usernameAlreadyExists = await User.findOne({username});
    if (usernameAlreadyExists) {
        throw new CustomError.BadRequestError('Username already exists');
    }

    const user = await User.create({username, email, password});
    res.status(StatusCodes.CREATED).json({result: 'success'});
};

const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        if (!username || !password) {
            throw new CustomError.BadRequestError('Please provide email and password');
        }

        const user = await User.findOne({username});
        if (!user) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }

        const isPasswordCorrect = user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }


        const token = createToken({username: user.username, active: user.active, uuid: user.uuid});

        await Token.destroy({where: {userId: user.uuid}});
        await Token.create({userId: user.uuid, token});

        res.status(StatusCodes.OK).json({token: token});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {register, login};