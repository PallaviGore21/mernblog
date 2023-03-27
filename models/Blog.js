const mongoose = require("mongoose")

module.exports = mongoose.model("blog",mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    publish:{
        type:Boolean,
        default:false
    },
    heroImage:{
        type:String,
        required:true
    },
    auther:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    
},{timestamps:true}))