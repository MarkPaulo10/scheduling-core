const express = require('express');
const router = express.Router();
const { getSchedules, getSchedulesById, addSchedules, updateAppointment, setAppointment} = require('../controllers/schedules.controller')

router.get('/', getSchedules);
router.get('/:id', getSchedulesById);
router.post('/', addSchedules);
router.post('/appointment', setAppointment);
router.put('/:id', updateAppointment);

module.exports = router;