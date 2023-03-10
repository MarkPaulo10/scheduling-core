const DataType = require("sequelize");
const sequelize = require("../utils/database");

const Notifications = sequelize.define("notifications", {
    _id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataType.STRING,
    },
    description: {
        type: DataType.STRING
    },
    scheduleId: {
        type: DataType.INTEGER,
    },
    studentId: {
        type: DataType.INTEGER,
    },
    teacherId: {
        type: DataType.INTEGER
    },
    status:{
        type: DataType.ENUM,
        values: ['Unviewed', 'viewed']
    }
})

module.exports = Notifications;