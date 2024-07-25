const serviceSchema = require("../model/servicemodel");

exports.addservice = (req,res) => {
  const service = new serviceSchema(req.body);
  service.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Service",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Service add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Service",
          status: 400,
          error: err,
        });
  })
}


exports.getAllservice = (req,res) => {
    serviceSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Service",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Service saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Service",
            status: 400,
            error: err,
          });
    })
}


exports.getserviceById = (req, res) => {
  serviceSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Service",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Service",
        status: 400,
        error: err,
      });
    });
};



exports.updateserviceById = (req, res) => {
    serviceSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Service",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Service updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Service",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteserviceById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    serviceSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Service",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Service",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllservice= (req,res) => {
    serviceSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Service",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Service deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Service",
            status: 400,
            error: err,
      })
    })
  }*/
