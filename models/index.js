const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');
const ProfilesModel = require('./profiles.model');
const SchedulesModel = require('./schedules.model');

UsersModel.sync();
StudentsModel.sync();
TeachersModel.sync();
ProfilesModel.sync();
SchedulesModel.sync();
module.exports = sequelize;