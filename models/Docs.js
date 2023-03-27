const mongoose = require("mongoose")

const docSchema = mongoose.Schema({
    userDocs:{
        type:[String],
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        required:true

    },
    name:{
        type:String,
        required:true

    }
},{
    timestamps:true
})
module.exports = mongoose.model("doc" ,docSchema)

