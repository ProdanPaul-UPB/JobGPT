const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const SocialProfile = require('../models/SocialProfile');

const getAllSocialProfiles = async (req, res) => {
    const socialProfiles = await SocialProfile.findAll({
        where: {enabled: true}, attributes: ['uuid', 'favorite_tags']
    });
    res.status(StatusCodes.OK).json({socialProfiles, count: socialProfiles.length});
};

const getSocialProfile = async (req, res) => {
    try {
        const {username} = req.params;
        const socialProfile = await SocialProfile.findOne({where: {username}});
        if (!socialProfile) {
            throw new CustomError.NotFoundError(`SocialProfile with username ${username} does not exist`);
        }
        res.status(StatusCodes.OK).json(socialProfile);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const createSocialProfile = async (req, res) => {
    try {
        const {favorite_tags} = req.body;
        const {uuid} = req.user;
        const socialProfile = await SocialProfile.create({favorite_tags, userId: uuid});
        res.status(StatusCodes.CREATED).json({socialProfile});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const updateSocialProfile = async (req, res) => {
    try {
        const {uuid} = req.user;
        const socialProfile = await SocialProfile.findOne({where: {userId: uuid}});
        if (!socialProfile) {
            throw new CustomError.NotFoundError(`SocialProfile with username ${username} does not exist`);
        }
        await SocialProfile.update(req.body, {where: {userId: uuid}});
        res.status(StatusCodes.OK).json({message: 'SocialProfile updated successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {
    getAllSocialProfiles, getSocialProfile, createSocialProfile, updateSocialProfile
};