const express = require('express');
const router = express.Router();
const { getUser,createUser, login, profile, getEmail, resetPassword,updatePassword } = require('../controllers/users.controller');


router.get('/', getUser )
router.post('/', createUser ) 
router.post('/login', login )
router.get('/profile', profile )
router.get('/:email', getEmail)
router.post('/reset/', resetPassword )
router.put('/', updatePassword )
module.exports = router;