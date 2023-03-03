const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');
const ProfilesModel = require('./profiles.model');

UsersModel.sync();
StudentsModel.sync({froce: true});
TeachersModel.sync();
ProfilesModel.sync({force: true});
module.exports = sequelize;