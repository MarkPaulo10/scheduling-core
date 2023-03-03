const express = require('express');
const router = express.Router();
const { getUser,createUser, login, profile } = require('../controllers/users.controller');


router.get('/', getUser )
router.post('/', createUser ) 
router.post('/login', login )
router.get('/profile', profile )
module.exports = router;