const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const Post = sequelize.define('Post', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, content: {
        type: DataTypes.TEXT, allowNull: false,
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    }, upvotes: {
        type: DataTypes.INTEGER, defaultValue: 0,
    },
});

const Broadcast = require('./Broadcast');
Post.belongsTo(Broadcast, {foreignKey: 'broadcastId'});

const UserUpvote = require('./UserUpvote');
Post.hasMany(UserUpvote, {foreignKey: 'postId'});

module.exports = Post;
