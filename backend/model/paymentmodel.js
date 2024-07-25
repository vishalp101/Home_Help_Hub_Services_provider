const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const paymentSchema = new  Schema({

    Amount:{
        type : String,
        //required : true,
        //trim : true,
    },
    payment_Method:{
        type : String,
        //required : true,
        //trim : true,
    },
    payment_date:{
        type : Date,
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
module.exports = mongoose.model('payment',paymentSchema)