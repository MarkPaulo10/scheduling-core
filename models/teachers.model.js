const DataType = require('sequelize');
const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const ProfilesModel = require('./users.model');


const Teachers = sequelize.define("teachers", {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subject: {
        type: DataType.STRING,
        allowNull: true
    },
    userId: {
        type: DataType.INTEGER,
        allowNull: false
    },
    
})

Teachers.belongsTo(UsersModel, { foreignKey: 'userId', as: 'user'});

module.exports = Teachers;