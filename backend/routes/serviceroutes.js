const express = require('express');
const router = express.Router()
const servicecontroller = require("../controller/servicecontroller");


router.post('/service',servicecontroller.addservice)
router.get("/service",servicecontroller.getAllservice)
router.post("/service/:id",servicecontroller.getserviceById);
router.post("/service/:id",servicecontroller.updateserviceById);
router.delete("/service/:id",servicecontroller.deleteserviceById);
//router.delete("/service",usercontroller.deleteAllservice);

module.exports = router