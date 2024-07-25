const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const serviceproviderSchema = new  Schema({

    companyName:{
        type : String,
        required : true,
        //trim : true,
    },
    Rating:{
        type : String,
        //required : true,
        //trim : true,
    },
    Biography:{
        type : String,
        //required : true,
        //unique: true,
        //trim : true,
    },
    Experience:{
        type :number,
        //require : true,
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
module.exports = mongoose.model('serviceprovider',serviceproviderSchema)