const ProfilesModel = require("../models/profiles.model");
const TeachersModel = require("../models/teachers.model");
const StudentsModel = require("../models/students.model");
const SchedulesModel = require("../models/schedules.model");

exports.getSchedules = async (req,res) => {
    try {
        let result = await SchedulesModel.findAll({
            include: 'teacher'
        });
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}
exports.getSchedulesById = async (req, res) => {
    try {
        let _id = req.params.id;
        let result = await SchedulesModel.findOne({where: {_id}}, { include: 'teacher'})
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

exports.addSchedules = async (req, res) => {
    try {
       let payload = req.body;
       let result = await SchedulesModel.create(payload);
       res.send(result)
    } catch (error) {
        console.log(error);
    }
}
exports.setAppointment = async (req, res) => {
    try {
        let payload = req.body;
        let result = await SchedulesModel.create(payload);
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}