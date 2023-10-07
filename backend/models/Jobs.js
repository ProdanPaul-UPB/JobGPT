const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');
const Broadcast = require('./Broadcast');

const Job = sequelize.define('Job', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, content: {
        type: DataTypes.STRING, allowNull: false,
    }, broadcastId: {
        type: DataTypes.UUID, allowNull: false,
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    },
});

Job.belongsTo(Broadcast, {foreignKey: 'broadcastId'});

module.exports = Job;
