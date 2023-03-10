const TeachersModel = require('../models/teachers.model');

exports.getTeacherById = async (req,res) => {
    try {
            let userId = req.params.id;
            let result = await TeachersModel.findOne({where: {userId: userId }, include: [ 'user', 'profile']})
            res.send(result);
            return;
    } catch (error) {
        console.log(error);
    }
}
exports.updateTeacher = async (req,res) => {
    try {
        let _id = req.params.id;
        let payload = req.body;
        console.log(payload);
        let result = await TeachersModel.update({subject: payload.subject}, {where: {_id}})
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}
exports.createTeacher = async (req,res) => {
    try {
        let payload = req.body;
        let result = await TeachersModel.create(payload)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}