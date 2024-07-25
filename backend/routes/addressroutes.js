const express = require('express');
const router = express.Router()
const addresscontroller = require("../controller/addresscontroller");


router.post('/address',addresscontroller.addaddress)
router.get("/address",addresscontroller.getAlladdress)
router.post("/address/:id",addresscontroller.getaddressById);
router.post("/address/:id",addresscontroller.updateaddressById);
router.delete("/address/:id",addresscontroller.deleteaddressById);
//router.delete("/address",addresscontroller.deleteAlladdress);

module.exports = router