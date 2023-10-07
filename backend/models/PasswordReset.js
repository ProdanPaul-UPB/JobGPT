const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const PasswordReset = sequelize.define('PasswordReset', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, code: {
        type: DataTypes.STRING, allowNull: false,
    }, email: {
        type: DataTypes.STRING, allowNull: false,
    }
});

module.exports = PasswordReset;
