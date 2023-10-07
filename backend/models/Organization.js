const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const Organization = sequelize.define('Organization', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, enabled: {
        type: DataTypes.BOOLEAN, defaultValue: true,
    }, description: {
        type: DataTypes.STRING,
    }, category: {
        type: DataTypes.ENUM('company', 'university'),
    }, funds: {
        type: DataTypes.DECIMAL(10, 2), defaultValue: 0.00,
    }, plan: {
        type: DataTypes.ENUM('free', 'standard', 'premium'), defaultValue: 'free',
    }, name: {
        type: DataTypes.STRING, allowNull: false,
    },
});

const User = require('./User');
Organization.belongsTo(User, {foreignKey: 'userId'});

module.exports = Organization;
