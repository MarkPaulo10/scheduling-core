const DataType = require('sequelize');
const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const ProfilesModel = require('./profiles.model');

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
    },
    profileId:{
        type: DataType.INTEGER
    }
    
})

Students.belongsTo(UsersModel, { foreignKey: 'userId', as: 'user'});
Students.belongsTo(ProfilesModel, {foreignKey: 'profileId', as: 'profile'})

module.exports = Students;