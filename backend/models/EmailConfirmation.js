const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const EmailConfirmation = sequelize.define('EmailConfirmation', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, code: {
        type: DataTypes.STRING, allowNull: false, defaultValue: generateRandomString(10)
    }, email: {
        type: DataTypes.STRING, allowNull: false
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    }
});

const User = require('./User');
EmailConfirmation.belongsTo(User, {foreignKey: 'userId'});

module.exports = EmailConfirmation;