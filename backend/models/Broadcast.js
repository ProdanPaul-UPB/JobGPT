const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const Broadcast = sequelize.define('Broadcast', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, enabled: {
        type: DataTypes.BOOLEAN, defaultValue: true,
    }, description: {
        type: DataTypes.STRING, defaultValue: '',
    }, title: {
        type: DataTypes.STRING, allowNull: false, defaultValue: '',
    }, tags: {
        type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [],
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    },
});

const User = require('./User');
Broadcast.belongsTo(User, {foreignKey: 'userId'});

module.exports = Broadcast;

