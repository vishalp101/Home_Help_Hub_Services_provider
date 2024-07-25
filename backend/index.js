const express = require("express"); // creating the server
const app = express();

const mongoose = require("mongoose"); // For Connecting to Database




mongoose
  .connect("mongodb://127.0.0.1:27017/HomeHelpHub Services project")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3000);
  }
}); //where my services will called()