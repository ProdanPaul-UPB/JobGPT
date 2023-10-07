const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost', dialect: 'postgres'
});

sequelize.sync().then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log('Unable to connect to database', err);
});

module.exports = sequelize;
