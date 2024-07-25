const express = require('express');
const router = express.Router()
const usercontroller = require("../controller/usercontroller");


router.post('/user',usercontroller.adduser)
router.get("/user",usercontroller.getAlluser)
router.post("/user/:id",usercontroller.getuserById);
router.post("/user/:id",usercontroller.updateuserById);
router.delete("/user/:id",usercontroller.deleteuserById);
//router.delete("/user",usercontroller.deleteAlluser);

module.exports = router