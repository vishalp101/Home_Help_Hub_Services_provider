const reviewSchema = require("../model/reviewmodel");

exports.addreview = (req,res) => {
  const review = new reviewSchema(req.body);
  review.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Review",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Review add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Review",
          status: 400,
          error: err,
        });
  })
}


exports.getAllreview = (req,res) => {
    reviewSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Review",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Review saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Review",
            status: 400,
            error: err,
          });
    })
}


exports.getreviewById = (req, res) => {
  reviewSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Review",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Review fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Review",
        status: 400,
        error: err,
      });
    });
};



exports.updatereviewById = (req, res) => {
    reviewSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Review",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Review updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Review",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletereviewById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    reviewSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Review",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Review deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Review",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllReview= (req,res) => {
    reviewSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Review",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Review deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Review",
            status: 400,
            error: err,
      })
    })
  }*/
