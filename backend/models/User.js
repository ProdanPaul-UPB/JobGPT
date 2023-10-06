const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, email: {
        type: DataTypes.STRING, allowNull: false, unique: true, validate: {
            isEmail: true,
        },
    }, active: {
        type: DataTypes.BOOLEAN, defaultValue: true,
    }, icon: {
        type: DataTypes.STRING,
    }, password: {
        type: DataTypes.STRING, allowNull: false, set(password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            this.setDataValue('password', hashedPassword);
        },
    }, created_at: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    }, updated_at: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    },
});

module.exports = User;
