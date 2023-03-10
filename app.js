const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRouter = require('./routes/users');
const StudentsRouter = require('./routes/students');
const TeachersRouter = require('./routes/teachers');
const ProfilesRouter = require('./routes/profiles');
const SchedulesRouter = require('./routes/schedules');
const NotificationsRouter = require('./routes/notifications');
const createError = require('http-errors');


app.use(bodyParser.json());
app.use(cors());
app.use('/users', UserRouter);
app.use('/students', StudentsRouter);
app.use('/teachers', TeachersRouter);
app.use('/profiles', ProfilesRouter);
app.use('/schedules', SchedulesRouter);
app.use('/notifications', NotificationsRouter);
app.use((req, res)=> res.send(createError(404)))

module.exports = app;

