const User = require("../models/User");
const PasswordReset = require("../models/PasswordReset");
const CustomError = require("../errors");
const {generateRandomString} = require("../utils/functions");
const {StatusCodes} = require("http-status-codes");

const changePassword = async (req, res) => {
    try {
        const {username} = req.user;
        const {oldPassword, newPassword} = req.body;
        const user = await User.findOne({where: {username}});
        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }
        const isPasswordCorrect = user.comparePassword(oldPassword);
        if (!isPasswordCorrect) {
            throw new CustomError.BadRequestError('Invalid password');
        }
        await user.update({password: newPassword});
        res.status(StatusCodes.OK).json({result: 'success'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const sendResetPasswordEmail = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw new CustomError.NotFoundError(`User with email ${email} does not exist`);
        }

        const passwordReset = await PasswordReset.create({email: email, code: generateRandomString(10)});

        const link = `${process.env.CLIENT_URL}/reset-password/${passwordReset.code}`;
        const emailOptions = {
            to: email, subject: 'Resetare parola', text: `Acceseaza link-ul pentru a reseta parola: ${link}`
        };
        const sendResetPasswordEmail = await sendEmail(emailOptions);
        if (sendResetPasswordEmail.result === 'error') {
            throw new CustomError.InternalServerError('Error sending email');
        }
        res.status(StatusCodes.OK).json({result: 'success'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const resetPassword = async (req, res) => {
    try {
        const {code, newPassword} = req.body;
        const passwordReset = await PasswordReset.findOne({where: {code}});
        if (!passwordReset) {
            throw new CustomError.NotFoundError(`Password reset request with code ${code} does not exist`);
        }
        const user = await User.findOne({where: {email: passwordReset.email}});
        if (!user) {
            throw new CustomError.NotFoundError(`User with email ${passwordReset.email} does not exist`);
        }
        await user.update({password: newPassword});
        await passwordReset.destroy();
        res.status(StatusCodes.OK).json({result: 'success'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {
    changePassword, sendResetPasswordEmail, resetPassword
}