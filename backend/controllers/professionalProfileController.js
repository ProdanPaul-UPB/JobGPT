const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const ProfessionalProfile = require('../models/ProfessionalProfile');

const getAllProfessionalProfiles = async (req, res) => {
    const professionalProfiles = await ProfessionalProfile.findAll({
        where: {enabled: true}, attributes: ['uuid', 'birthdate', 'address', 'studies', 'experience', 'cv']
    });
    res.status(StatusCodes.OK).json({professionalProfiles, count: professionalProfiles.length});
};

const getProfessionalProfile = async (req, res) => {
    try {
        const {username} = req.params;
        const professionalProfile = await ProfessionalProfile.findOne({where: {username}});
        if (!professionalProfile) {
            throw new CustomError.NotFoundError(`ProfessionalProfile with username ${username} does not exist`);
        }
        res.status(StatusCodes.OK).json(professionalProfile);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const createProfessionalProfile = async (req, res) => {
    try {
        const {birthdate, address, studies, experience, cv} = req.body;
        const {uuid} = req.user;
        const professionalProfile = await ProfessionalProfile.create({
            birthdate, address, studies, experience, cv, userId: uuid
        });
        res.status(StatusCodes.CREATED).json({professionalProfile});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const updateProfessionalProfile = async (req, res) => {
    try {
        const {uuid} = req.user;
        const professionalProfile = await ProfessionalProfile.findOne({where: {userId: uuid}});
        if (!professionalProfile) {
            throw new CustomError.NotFoundError(`ProfessionalProfile with username ${username} does not exist`);
        }
        await ProfessionalProfile.update(req.body, {where: {userId: uuid}});
        res.status(StatusCodes.OK).json({message: 'ProfessionalProfile updated successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {
    getAllProfessionalProfiles, getProfessionalProfile, createProfessionalProfile, updateProfessionalProfile
};