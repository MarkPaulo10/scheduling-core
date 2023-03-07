const express = require('express');
const router = express.Router();
const { createStudent, getStudent,getStudentById } = require('../controllers/students.controller');

router.get('/', getStudent);
router.get('/:id', getStudentById);
router.post('/', createStudent);


module.exports = router;