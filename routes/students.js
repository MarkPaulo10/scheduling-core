const express = require('express');
const router = express.Router();
const { createStudent, getStudent, getStudentById, updateStudent} = require('../controllers/students.controller');

router.get('/', getStudent);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);


module.exports = router;