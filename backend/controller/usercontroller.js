const userSchema = require("../model/usermodel");

exports.adduser = (req,res) => {
  const user = new userSchema(req.body);
  user.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the User",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "User add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the User",
          status: 400,
          error: err,
        });
  })
}


exports.getAlluser = (req,res) => {
    userSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the User",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "User saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the User",
            status: 400,
            error: err,
          });
    })
}


exports.getuserById = (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the User",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "User fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the User",
        status: 400,
        error: err,
      });
    });
};



exports.updateuserById = (req, res) => {
    userSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the User",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "User updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the User",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteuserById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    userSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the User",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "User deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete User",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAlluser= (req,res) => {
    userSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All User",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All User deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All User",
            status: 400,
            error: err,
      })
    })
  }*/
