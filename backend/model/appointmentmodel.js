const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const appointmentSchema = new  Schema({

    appointmentDate:{
        type : Date,
        required : true,
        //trim : true,
    },
    Status:{
        type : String,
        //required : true,
        //trim : true,
    },
    createdAt:{
        type : Date,
        default : Date.now,
    },
    updatedAt:{
        type : Date,
        default : Date.now,
    }
},
{
    timeStamps : true,
}
)
module.exports = mongoose.model('appointment',appointmentSchema)