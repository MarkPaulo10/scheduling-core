const sequelize = require('../utils/database');
const UsersModel = require('./users.model');
const StudentsModel = require('./students.model');
const TeachersModel = require('./teachers.model');
const ProfilesModel = require('./profiles.model');
const SchedulesModel = require('./schedules.model');
const NotificationsModel = require('./notifications.model');

UsersModel.sync();
StudentsModel.sync();
TeachersModel.sync();
ProfilesModel.sync();
SchedulesModel.sync();
NotificationsModel.sync();

module.exports = sequelize;