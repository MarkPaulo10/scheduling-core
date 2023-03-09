const express = require('express');
const router = express.Router();
const { createTeacher, updateTeacher, getTeacherById } = require('../controllers/teachers.controller');


router.get('/:id', getTeacherById)
router.put('/:id', updateTeacher)
router.post('/', createTeacher);
module.exports = router;