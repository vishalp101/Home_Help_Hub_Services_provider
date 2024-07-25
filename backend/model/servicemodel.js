const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const serviceSchema = new  Schema({

    serviceName:{
        type : String,
        required : true,
        //trim : true,
    },
    Description:{
        type : String,
        //required : true,
        //trim : true,
    },
    Price:{
        type : String,
        //required : true,
        //unique: true,
        //trim : true,
    },
    Duration:{
        type :String,
        //require : true,
    },
    serviceImage:{
        type : String,
        //type : Buffer,
        required : true,
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
module.exports = mongoose.model('service',serviceSchema)