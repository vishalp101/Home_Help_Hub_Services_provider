const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const addressSchema = new  Schema({

    Street:{
        type : String,
        //required : true,
        //trim : true,
    },
    City:{
        type : String,
        //required : true,
        //trim : true,
    },
    State:{
        type : String,
        //required : true,
        //unique: true,
        //trim : true,
    },
    postalCode:{
        type :String,
        //require : true,
    },
    Country:{
        type : String,
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
module.exports = mongoose.model('address',addressSchema)