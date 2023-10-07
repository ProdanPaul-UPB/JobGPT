const Organization = require('../models/Organization');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const User = require('../models/User');


const createOrganization = async (req, res) => {
    try {
        const {name, description, category, funds, plan, userId} = req.body;
        const {uuid} = userId;
        const organization = await Organization.create({
            name, description, category, funds, plan, userId: uuid,
        });
        res.status(StatusCodes.CREATED).json({organization});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.findAll({
            where: {enabled: true},
            attributes: ['uuid', 'name', 'description', 'category', 'funds', 'plan', 'createdAt'],
        });
        res.status(StatusCodes.OK).json({organizations, count: organizations.length});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};


const getOrganization = async (req, res) => {
    try {
        const {uuid} = req.params;
        const organization = await Organization.findOne({where: {uuid}});

        if (!organization) {
            throw new CustomError.NotFoundError(`Organization with UUID ${uuid} does not exist`);
        }

        res.status(StatusCodes.OK).json(organization);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

const getOrganizationByUsername = async (req, res) => {
    try {
        const {username} = req.params;
        const user = await User.findOne({where: {username}});

        if (!user) {
            throw new CustomError.NotFoundError(`User with username ${username} does not exist`);
        }

        const organization = await Organization.findOne({where: {userId: user.uuid}});
        if (!organization) {
            throw new CustomError.NotFoundError(`Organization with username ${username} does not exist`);
        }
        res.status(StatusCodes.OK).json(organization);
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}


const updateOrganization = async (req, res) => {
    try {
        const {uuid} = req.user;
        const organization = await Organization.findOne({where: {userId: uuid}});
        if (!organization) {
            throw new CustomError.NotFoundError(`Organization with user uuid ${uuid} does not exist`);
        }
        await organization.update(req.body);
        res.status(StatusCodes.OK).json({organization});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}

const deleteOrganization = async (req, res) => {
    try {
        const {uuid} = req.user;
        const organization = await Organization.findOne({where: {userId: uuid}});
        if (!organization) {
            throw new CustomError.NotFoundError(`Organization with user uuid ${uuid} does not exist`);
        }
        await organization.destroy();
        res.status(StatusCodes.OK).json({message: 'Student deleted successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
};

module.exports = {
    createOrganization,
    getAllOrganizations,
    getOrganization,
    updateOrganization,
    deleteOrganization,
    getOrganizationByUsername
};
