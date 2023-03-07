const ProfilesModel = require("../models/profiles.model");
const TeachersModel = require("../models/teachers.model");
const StudentsModel = require("../models/students.model");
const SchedulesModel = require("../models/schedules.model");

exports.getSchedules = async (req,res) => {
    try {
        let result = await SchedulesModel.findAll({
            include: [
                {
                    model: TeachersModel,
                    as: 'teacher',
                    include: [
                       'profile'
                    ]
                    
                },
                {
                    model: StudentsModel,
                    as: 'student',
                    include: [
                       'profile'
                    ]
                    
                }
            ]
        });
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

exports.getSchedulesById = async (req, res) => {
    try {
        let teacherId = req.params.id;
        console.log("teacherId", teacherId);
        let result = await SchedulesModel.findAll(
            {
                where: { teacherId },
                include: [
                    {
                        model: TeachersModel,
                        as: 'teacher',
                        include: ['profile']
                    },
                    {
                        model: StudentsModel,
                        as: 'student',
                        include: ['profile']
                    }
                ]
            }
        )
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
exports.updateAppointment = async (req,res) => {
    try {
      let _id = req.params.id;
        let status = req.body;
        console.log("id&& payload", status);
      let schedule = await SchedulesModel.findOne({where: {_id}});
      console.log("schedule", schedule);
      if(schedule){
        let result = await SchedulesModel.update(status, {
            where: {_id}
        })
        
      }
      res.send(schedule);
    } catch (error) {
        console.log(error);
    }
}