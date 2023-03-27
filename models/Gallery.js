const { default: mongoose } = require("mongoose")

module.exports= require("mongoose")

module.exports = mongoose.model(
    "gallery", 
    mongoose.Schema({
       user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        require:true
    },
    url:{
        type:[String],
        required:true
    }
    }, {timestamps:true})
    )