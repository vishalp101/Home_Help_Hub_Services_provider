const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const reviewSchema = new  Schema({

    Rating:{
        type : String,
        //required : true,
        //trim : true,
    },
    Comment:{
        type : String,
        //required : true,
        //trim : true,
    },
    reviewData:{
        type : String,
        //required : true,
        //unique: true,
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
module.exports = mongoose.model('review',reviewSchema)