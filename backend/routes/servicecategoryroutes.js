const express = require('express');
const router = express.Router()
const categorycontroller = require("../controller/servicecategorycontroller");


router.post('/category',categorycontroller.addcategory)
router.get("/category",categorycontroller.getAllcategory)
router.post("/category/:id",categorycontroller.getcategoryById);
router.post("/category/:id",categorycontroller.updatecategoryById);
router.delete("/category/:id",categorycontroller.deletecategoryById);
//router.delete("/user",usercontroller.deleteAllcategory);

module.exports = router