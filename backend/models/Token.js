const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const Token = sequelize.define('Token', {
    token: {
        type: DataTypes.STRING, allowNull: false,
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    },

});

const User = require('./User');
Token.belongsTo(User, {foreignKey: 'userId'});

module.exports = Token;
