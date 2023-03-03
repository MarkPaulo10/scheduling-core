const express = require('express');
const router = express.Router();
const { createStudent, getStudent } = require('../controllers/students.controller');

router.get('/', getStudent);
router.post('/', createStudent);


module.exports = router;