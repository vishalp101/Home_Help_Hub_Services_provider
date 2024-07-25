const serviceproviderSchema = require("../model/serviceprovidermodel");

exports.addserviceprovider = (req,res) => {
  const serviceprovider = new serviceproviderSchema(req.body);
  serviceprovider.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Service Provider",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Service Provider add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Service Provider",
          status: 400,
          error: err,
        });
  })
}


exports.getAllserviceprovider = (req,res) => {
    serviceproviderSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Service Provider",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Service Provider saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Service Provider",
            status: 400,
            error: err,
          });
    })
}


exports.getserviceproviderById = (req, res) => {
  serviceproviderSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Service Provider",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service Provider fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Service Provider",
        status: 400,
        error: err,
      });
    });
};



exports.updateserviceproviderById = (req, res) => {
    serviceproviderSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Service Provider",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Service Provider updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Service Provider",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteserviceproviderById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    serviceproviderSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Service Provider",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service Provider deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Service Provider",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllserviceprovider= (req,res) => {
    serviceproviderSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All service provider",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All service provider deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All service provider",
            status: 400,
            error: err,
      })
    })
  }*/
