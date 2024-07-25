const categorySchema = require("../model/servicecategorymodel");

exports.addcategory = (req,res) => {
  const category = new categorySchema(req.body);
  category.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Category",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Category add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Category",
          status: 400,
          error: err,
        });
  })
}


exports.getAllcategory = (req,res) => {
    categorySchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Category",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Category saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Category",
            status: 400,
            error: err,
          });
    })
}


exports.getcategoryById = (req, res) => {
  categorySchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Category fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Category",
        status: 400,
        error: err,
      });
    });
};



exports.updatecategoryById = (req, res) => {
    categorySchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Category",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Category updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Category",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletecategoryById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    categorySchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Category deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Category",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllcategory= (req,res) => {
    categorySchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Category",
            status: 400,
            error: err,
      })
    })
  }*/
