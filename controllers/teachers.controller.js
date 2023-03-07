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
exports.createTeacher = async (req,res) => {
    try {
        let data = req.body;
        console.log(data);
        let result = await TeachersModel.create(data)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}