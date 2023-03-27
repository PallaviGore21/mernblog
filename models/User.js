const  mongoose = require("mongoose");

module.exports=mongoose.model("user",mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide Name"]
    },
    email:{
        type:String,
        required:[true,"Please Provide email"]
    },
    password:{
        type:String,
        required:[true,"Please Provide password"]
    },
    profile:{
        type:String,
    },
},{timestamps:true }))


// object relational mapping === mongoose 