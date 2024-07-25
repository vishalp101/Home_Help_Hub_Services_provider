const appointmentSchema = require("../model/appointmentmodel");

exports.addappointment = (req,res) => {
  const appointment = new appointmentSchema(req.body);
  appointment.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Appointment",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Appointment add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Appointment",
          status: 400,
          error: err,
        });
  })
}


exports.getAllappointment = (req,res) => {
    appointmentSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Appointment",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Appointment saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Appointment",
            status: 400,
            error: err,
          });
    })
}


exports.getappointmentById = (req, res) => {
  appointmentSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Appointment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Appointment fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Appointment",
        status: 400,
        error: err,
      });
    });
};



exports.updateappointmentById = (req, res) => {
    appointmentSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Appointment",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Appointment updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Appointment",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteappointmentById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    appointmentSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Appointment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Appointment deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Appointment",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllappointment= (req,res) => {
    appointmentSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Appointment",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All appointment deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All appointment",
            status: 400,
            error: err,
      })
    })
  }*/
