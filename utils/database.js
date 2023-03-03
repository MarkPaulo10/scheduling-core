const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    hostname: 'localhost',
    database: 'scheduling_activity',
    username: 'root',
    password: '',
    dialect: 'mysql'
})
module.exports = sequelize;