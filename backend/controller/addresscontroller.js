const addressSchema = require("../model/addressmodel");

exports.addaddress = (req,res) => {
  const address = new addressSchema(req.body);
  address.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Address",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Address add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Address",
          status: 400,
          error: err,
        });
  })
}


exports.getAlladdress = (req,res) => {
    addressSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Address",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Address saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Address",
            status: 400,
            error: err,
          });
    })
}


exports.getaddressById = (req, res) => {
  addressSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Address",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Address fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Address",
        status: 400,
        error: err,
      });
    });
};



exports.updateaddressById = (req, res) => {
    addressSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Address",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Address updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Address",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteaddressById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    addressSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Address",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Address deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Address",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAlladdress= (req,res) => {
    addressSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Address",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Address deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Address",
            status: 400,
            error: err,
      })
    })
  }*/
