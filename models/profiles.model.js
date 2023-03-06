const DataType = require('sequelize');
const sequelize = require('../utils/database');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');

const Profiles = sequelize.define("profiles", {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fname: {
        type: DataType.STRING,
        allowNull: false
    },
    mname: {
        type: DataType.STRING,
        allowNull: true
    },
    lname: {
        type: DataType.STRING,
        allowNull: false
    },
    suffix: {
        type: DataType.STRING,
        allowNull: true
    },
    teacherId: {
        type: DataType.INTEGER,

    },
    studentId: {
        type: DataType.INTEGER,

    },


    
})
Profiles.belongsTo(TeachersModel, { foreignKey: 'teacherId', as: 'teacher' });
Profiles.belongsTo(StudentsModel, { foreignKey: 'studentId', as: 'student' });

module.exports = Profiles;