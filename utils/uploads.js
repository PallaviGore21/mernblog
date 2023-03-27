const multer = require("multer")
const fs = require("fs")
const path =require("path")
const {v4:uuid} =require("uuid")



const handleStorage=(loc)=>{
    return multer.diskStorage({
        filename:(req,file,cb)=>{
           const fn = uuid()+ path.extname(file.originalname)
           req.body.docs =fn
           cb(null,fn)
        },
        destination:(req,file,cb)=>{
          fs.mkdirSync(loc,{recursive:true})
          cb(null,loc)
        }
   })
}

const profileStorage= handleStorage("public/profile")

const documentsStorage = handleStorage("public/docs")

exports.docsUpload = multer({storage:documentsStorage}).array("docs",5)
exports.profileUpload = multer({storage:profileStorage}).single("profile")



