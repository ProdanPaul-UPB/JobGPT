const {StatusCodes} = require('http-status-codes');
const User = require('../models/User');
const Token = require('../models/Token');
const CustomError = require('../errors');


const authenticateUser = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const tokenExists = await Token.findOne({where: {token}});
        if (!tokenExists) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }
        const user = await User.findByPk(tokenExists.userId);
        if (!user) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }
        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {authenticateUser};
