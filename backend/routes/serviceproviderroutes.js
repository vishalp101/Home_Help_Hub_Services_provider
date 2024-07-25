const express = require('express');
const router = express.Router()
const serviceprovidercontroller = require("../controller/serviceprovidercontroller");


router.post('/serviceprovider',serviceprovidercontroller.addserviceprovider)
router.get("/serviceprovider",serviceprovidercontroller.getAllserviceprovider)
router.post("/serviceprovider/:id",serviceprovidercontroller.getserviceproviderById);
router.post("/serviceprovider/:id",serviceprovidercontroller.updateserviceproviderById);
router.delete("/serviceprovider/:id",serviceprovidercontroller.deleteserviceproviderById);
//router.delete("/service",serviceprovidercontroller.deleteAllserviceprovider);

module.exports = router