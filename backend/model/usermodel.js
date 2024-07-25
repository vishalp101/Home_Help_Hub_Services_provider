const mongoose = require("mongoose"); 
const express = require('express');
//const { number } = require("zod");
//const { string } = require("zod");
const Schema = mongoose.Schema
const userSchema = new  Schema({

    userName:{
        type : String,
        required : true,
        //trim : true,
    },
    email:{
        type : String,
        //required : true,
        //trim : true,
    },
    password:{
        type : String,
        //required : true,
        //unique: true,
        //trim : true,
    },
    firstName:{
        type :String,
        //require : true,
    },
    lastName:{
        type : String,
        required : true,
        //trim : true,
    },
    phoneNumber:{
        type : Number,
        //required : true,
        //trim : true,
    },
    Address:{
        type : String,
        //required : true,
        //trim : true,
    },
    user_type:{
        type : String,
        //required : true,
        //trim : true,
    },
    userProfilePicture:{
        type : String,
        //type : Buffer,
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
module.exports = mongoose.model('user',userSchema)