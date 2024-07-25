const express = require('express');
const router = express.Router()
const paymentcontroller = require("../controller/paymentcontroller");


router.post('/payment',paymentcontroller.addpayment)
router.get("/payment",paymentcontroller.getAllpayment)
router.post("/payment/:id",paymentcontroller.getpaymentById);
router.post("/payment/:id",paymentcontroller.updatepaymentById);
router.delete("/payment/:id",paymentcontroller.deletepaymentById);
//router.delete("/payment",paymentcontroller.deleteAllpayment);

module.exports = router