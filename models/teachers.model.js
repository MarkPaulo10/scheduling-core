const DataType = require('sequelize');
const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const ProfilesModel = require('./profiles.model');


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
    },
    profileId:{
        type: DataType.INTEGER
    }
    
})

Teachers.belongsTo(UsersModel, { foreignKey: 'userId', as: 'user'});
Teachers.belongsTo(ProfilesModel, {foreignKey: 'profileId', as: 'profile'})

module.exports = Teachers;