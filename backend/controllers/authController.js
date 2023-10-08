const User = require('../models/User');
const Token = require('../models/Token');
const EmailConfirmation = require('../models/EmailConfirmation');
const CustomError = require('../errors');
const {createToken} = require('../utils/token');
const {StatusCodes} = require("http-status-codes");
const {generateRandomString} = require('../utils/functions');
const sendEmail = require('../utils/emails');


const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const emailAlreadyExists = await User.findOne({where: {email}});
        if (emailAlreadyExists) {
            throw new CustomError.BadRequestError('Email already exists');
        }

        const usernameAlreadyExists = await User.findOne({where: {username}});
        if (usernameAlreadyExists) {
            throw new CustomError.BadRequestError('Username already exists');
        }
        const user = await User.create({username, email, password});

        //create email confirmation
        const code = generateRandomString(5);
        await EmailConfirmation.create({email, userId: user.uuid, code: code});

        //send email
        const emailOptions = {
            to: email,
            subject: 'Confirmare email',
            text: `Pentru a confirma adresa de email, introdu codul in aplicatie: ${code}`
        };
        const sendConfirmationEmail = await sendEmail(emailOptions);
        if (sendConfirmationEmail.result === 'error') {
            throw new CustomError.CustomError(sendConfirmationEmail.error);
        }
        res.status(StatusCodes.CREATED).json({result: 'success', userId: user.uuid});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        if (!username || !password) {
            throw new CustomError.BadRequestError('Please provide email and password');
        }

        const user = await User.findOne({where: {username}});
        if (!user) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }

        if (!user.active) {
            throw new CustomError.UnauthenticatedError('Please confirm your email');
        }

        const isPasswordCorrect = user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new CustomError.UnauthenticatedError('Invalid credentials');
        }

        const token = createToken({username: user.username, active: user.active, uuid: user.uuid});

        await Token.destroy({where: {userId: user.uuid}});
        await Token.create({userId: user.uuid, token});

        res.status(StatusCodes.OK).json({token: token, uuid: user.uuid});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const emailConfirmation = async (req, res) => {
    try {
        const {code} = req.body;
        const emailConfirmation = await EmailConfirmation.findOne({where: {code}});
        if (!emailConfirmation) {
            throw new CustomError.BadRequestError('Invalid code');
        }
        const user = await User.findOne({where: {uuid: emailConfirmation.userId}});
        if (!user) {
            throw new CustomError.BadRequestError('Invalid code');
        }
        await user.update({active: true});
        await emailConfirmation.destroy();
        res.status(StatusCodes.OK).json({result: 'success'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {register, login, emailConfirmation};