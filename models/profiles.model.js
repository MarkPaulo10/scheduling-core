const DataType = require('sequelize');
const sequelize = require('../utils/database');

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
})
// Profiles.belongsTo(TeachersModel, { foreignKey: 'profile', as: 'profile' });


module.exports = Profiles;