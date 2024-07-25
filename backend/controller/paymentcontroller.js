const paymentSchema = require("../model/paymentmodel");

exports.addpayment = (req,res) => {
  const payment = new paymentSchema(req.body);
  payment.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Payment",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Payment add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Payment",
          status: 400,
          error: err,
        });
  })
}


exports.getAllpayment = (req,res) => {
    paymentSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Payment",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Payment saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Payment",
            status: 400,
            error: err,
          });
    })
}


exports.getpaymentById = (req, res) => {
  paymentSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Payment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Payment fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Payment",
        status: 400,
        error: err,
      });
    });
};



exports.updatepaymentById = (req, res) => {
    paymentSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Payment",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Payment updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Payment",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletepaymentById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    paymentSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Payment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Payment deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Payment",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllpayment= (req,res) => {
    paymentSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Payment",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Payment deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Payment",
            status: 400,
            error: err,
      })
    })
  }*/
