const express = require('express');
const router = express.Router();
const { createTeacher, getTeacher } = require('../controllers/teachers.controller');


router.get('/', getTeacher)
router.post('/', createTeacher);
module.exports = router;