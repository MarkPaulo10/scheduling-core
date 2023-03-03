const ProfilesModel = require('../models/profiles.model');

exports.getProfile = async (req,res) => {
    try {
        let _id = req.params.id
        let result = await ProfilesModel.findOne({
            where : {_id},
            include: 'teacher'
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