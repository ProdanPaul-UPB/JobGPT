const {DataTypes} = require('sequelize');
const sequelize = require('../db/connect');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    uuid: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true,
    }, username: {
        type: DataTypes.STRING, allowNull: false, unique: true
    }, email: {
        type: DataTypes.STRING, allowNull: false, unique: true, validate: {
            isEmail: true,
        },
    }, active: {
        type: DataTypes.BOOLEAN, defaultValue: false,
    }, icon: {
        type: DataTypes.STRING,
    }, password: {
        type: DataTypes.STRING, allowNull: false, set(password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            this.setDataValue('password', hashedPassword);
        },
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    }, updatedAt: {
        type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,
    },
});

User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;
