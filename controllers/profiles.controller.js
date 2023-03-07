const ProfilesModel = require('../models/profiles.model');
const Teachers = require('../models/teachers.model');


exports.getProfileById = async (req,res) => {
    try {
        let _id = req.params.id
        console.log(_id)
        let result = await ProfilesModel.findOne({
            where : {_id},
            include: ['teacher', 'student']
        })
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

exports.createProfile = async(req,res) => {
    try {
        let payload = req.body;
        let result =  await ProfilesModel.create(payload)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}