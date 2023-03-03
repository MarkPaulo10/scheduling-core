const TeachersModel = require('../models/teachers.model');

exports.getTeacher = async (req,res) => {
    try {
        console.log(req.query.includes)
        if(req.query.includes == "user"){
            let result = await TeachersModel.findAll({include: 'user'})
            res.send(result);
            return;
        }
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