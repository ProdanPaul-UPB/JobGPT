const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const Student = sequelize.define('Student', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, enabled: {
        type: DataTypes.BOOLEAN, defaultValue: true,
    }, description: {
        type: DataTypes.STRING,
    }, firstname: {
        type: DataTypes.STRING, allowNull: false,
    }, lastname: {
        type: DataTypes.STRING, allowNull: false,
    },
});

const User = require('./User');
Student.belongsTo(User, {foreignKey: 'userId'});

module.exports = Student;
