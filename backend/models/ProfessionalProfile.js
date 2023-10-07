const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const ProfessionalProfile = sequelize.define('ProfessionalProfile', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, birthdate: {
        type: DataTypes.DATEONLY
    }, address: {
        type: DataTypes.STRING, defaultValue: '',
    }, studies: {
        type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: [],
    }, experience: {
        type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: [],
    }, cv: {
        type: DataTypes.STRING, defaultValue: '',
    },
});

const User = require('./User');
ProfessionalProfile.belongsTo(User, {foreignKey: 'userId'});

module.exports = ProfessionalProfile;
