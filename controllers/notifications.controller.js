const NotificationsModel = require("../models/notifications.model");

exports.addNotifications = async (req,res) => {
    try {
        let payload = req.body;
        let data = await NotificationsModel.create(payload)
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}
exports.teacherNotifications = async (req, res) =>{
    try {
        let _id = req.params.id;
        let data = await NotificationsModel.findAll({where: {teacherId: _id}})
        res.send(data);
       
    } catch (error) {
        console.log(error);
    }
}
exports.studentNotifications = async (req, res) => {
    try {
        let _id = req.params.id;
        console.log(_id);
        let data = await NotificationsModel.findAll({where: {studentId: _id}})
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}