const express = require('express');
const router = express.Router();
const { createTeacher, getTeacher, getTeacherById } = require('../controllers/teachers.controller');


router.get('/:id', getTeacherById)
router.post('/', createTeacher);
module.exports = router;