const DataType = require('sequelize');
const sequelize = require('../utils/database');
const UsersModel = require('./users.model');

const Students = sequelize.define("students", {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    course: {
        type: DataType.STRING,
        allowNull: true
    },
    year: {
        type: DataType.STRING,
        allowNull: true
    },
    section: {
        type: DataType.STRING,
        allowNull: true
    },
    userId: {
        type: DataType.INTEGER,
        allowNull: false
    }
    
})

Students.belongsTo(UsersModel, { foreignKey: 'userId', as: 'user'});
module.exports = Students;