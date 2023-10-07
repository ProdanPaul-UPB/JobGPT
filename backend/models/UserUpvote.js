const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const UserUpvote = sequelize.define('UserUpvote', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    },
});

const User = require('./User');
UserUpvote.belongsTo(User, {foreignKey: 'userId'});

const Post = require('./Posts');
UserUpvote.belongsTo(Post, {foreignKey: 'postId'});

module.exports = UserUpvote;
