const sequelize = require('../utils/database');
const DataType = require('sequelize');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');
const ProfilesModel = require('./profiles.model');




const Schedules = sequelize.define('schedules', {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataType.DATE,
        allowNull: false,
    },
    status: {
        type: DataType.ENUM,
        values: ['pending', 'approved', 'rejected',]
    },
    teacherId: {
        type: DataType.INTEGER,
 
    },
    studentId: {
        type: DataType.INTEGER,

    },
})

Schedules.belongsTo(StudentsModel, { foreignKey: 'studentId', as: 'student' });
Schedules.belongsTo(TeachersModel, { foreignKey: 'teacherId', as: 'teacher' });
// Schedules.belongsTo(ProfilesModel, { foreignKey: 'teacherId', as: 'profile' });

module.exports = Schedules;