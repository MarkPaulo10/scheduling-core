const express = require('express');
const router = express.Router();
const { getSchedules, getSchedulesById, addSchedules, setAppointment} = require('../controllers/schedules.controller')

router.get('/', getSchedules);
router.get('/', getSchedulesById);
router.post('/', addSchedules);
router.post('/appointment', setAppointment);

module.exports = router;