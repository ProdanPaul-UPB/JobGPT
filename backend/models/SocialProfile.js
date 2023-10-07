const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const SocialProfile = sequelize.define('SocialProfile', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, favorite_tags: {
        type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: [],
    }
});

const User = require('./User');
SocialProfile.belongsTo(User, {foreignKey: 'userId'});

module.exports = SocialProfile;
