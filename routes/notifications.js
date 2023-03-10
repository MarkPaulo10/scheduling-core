const express = require("express");
const router = express.Router();
const {teacherNotifications, studentNotifications, addNotifications} = require("../controllers/notifications.controller");

router.post("/", addNotifications);
router.get("/teachers/:id", teacherNotifications);
router.get("/students/:id", studentNotifications);

module.exports = router;