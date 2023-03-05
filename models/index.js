const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');
const ProfilesModel = require('./profiles.model');

UsersModel.sync();
StudentsModel.sync();
TeachersModel.sync();
ProfilesModel.sync();
module.exports = sequelize;