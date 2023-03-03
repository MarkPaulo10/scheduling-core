const sequelize = require('../utils/database');
const DataType = require('sequelize');


const Schedules = sequelize.define('schedules', {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: false
    },
    date: {
        type: DataType.DATE,
        allowNull: false
    },
    teacherId: {
        type: DataType.INTEGER,
    },
    studentId: {
        type: DataType.INTEGER,
    }
    
})

modules.exports = Schedules;