const express = require('express');
const router = express.Router()
const reviewcontroller = require("../controller/reviewcontroller");


router.post('/review',reviewcontroller.addreview)
router.get("/review",reviewcontroller.getAllreview)
router.post("/review/:id",reviewcontroller.getreviewById);
router.post("/review/:id",reviewcontroller.updatereviewById);
router.delete("/review/:id",reviewcontroller.deletereviewById);
//router.delete("/review",reviewcontroller.deleteAllReview);

module.exports = router