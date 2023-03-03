const UsersModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const salt = 10;

exports.getUser =  async (req,res) => {
    try {
        let data = await UsersModel.findAll()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req,res) => {
    try {
        let payload = req.body;
        console.log(payload);
        let user = await UsersModel.findOne({where: {username: payload.username}})

        if(user){
            res.send('Email already Exist');
            return;
        }
        bcrypt.hash(payload.password, salt, async (err, hash) => {
            payload.password = hash;
            payload.username = payload.username.toLowerCase();
            let result = await UsersModel.create(payload)
            res.send(result);
        })

    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req,res) => {
    try {
        let { username, password } = req.body;
        console.log(username,password)
        if(!username || !password){
            res.send(createError(401));
            return;
        }
        let user = await UsersModel.findOne({where: {username: username}})
        console.log('user: >> ', user)
        if(!user || !bcrypt.compareSync(password, user.password)){
            res.send(createError(401));
            return;
        }
        let token = jwt.sign({ userId: user._id }, 'mySecretToken')
        return res.send({message: 'Logged in successfully', token});
    } catch (error) {
        console.log(error);
    }
}
exports.profile = async (req,res) => {
    try {
        let token = req.headers.token;
        if(!token){
            res.send(createError(401));
            return;
        }
        jwt.verify(token, 'mySecretToken', async (err, token) => {
            if(!token){
                res.send(createError(401))
                return;
            }
            let user = await UsersModel.findOne({where: {_id : token.userId}})
            res.send(user)
        })

    } catch (error) {
        console.log(error);
    }
}