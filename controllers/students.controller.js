const StudentsModel = require('../models/students.model');

exports.getStudent = async (req,res) => {
    try {
        console.log(req.query.includes)
        if(req.query.includes == "user"){
            let result = await StudentsModel.findAll({include: 'user'})
            res.send(result);
            return;
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getStudentById = async (req,res) => {
    try {
        let userId = req.params.id;
        let result = await StudentsModel.findOne({where: {userId}, include: 'profile'},)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}
exports.createStudent = async (req,res) => {
    try {
        let data = req.body;
        console.log(data);
        let result = await StudentsModel.create(data)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}