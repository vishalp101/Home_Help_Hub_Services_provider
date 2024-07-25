const express = require('express');
const router = express.Router()
const appointmentcontroller = require("../controller/appointmentcontroller");


router.post('/appointment',appointmentcontroller.addappointment)
router.get("/appointment",appointmentcontroller.getAllappointment)
router.post("/appointment/:id",appointmentcontroller.getappointmentById);
router.post("/appointment/:id",appointmentcontroller.updateappointmentById);
router.delete("/appointment/:id",appointmentcontroller.deleteappointmentById);
//router.delete("/appointment",appointmentcontroller.deleteAllappointment);

module.exports = router