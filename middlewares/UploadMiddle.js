const multer = require("multer")
const path = require("path")
const fs =require("fs")
const {v4:uuid} =require("uuid")
// console.log(file.mimetype);
const storage = multer.diskStorage({
    filename:(req,file, cb)=>{
        const fn = uuid()+ path.extname(file.originalname)
        if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
            cb("this file extension is not supported")
        }else{
            req.body.heroImage=`upload/${fn}`
            cb(null,fn)
        }
        cb(null,fn)
    },
    destination:(req,file, cb)=>{
        const loc = "public/upload"
        fs.mkdirSync(loc,{recursive:true})
        cb(null,loc)
    }
})


const galleryStorage = multer.diskStorage({

        filename:(req,file,cb)=>{
            const ext = path.extname(file.originalname)
            const fn =  uuid()+ ext
            req.body.url = `gallery/${fn}`
            cb(null,fn)
        },
        destination:(req,file,cb)=>{
         fs.mkdirSync("public/gallery",{recursive: true})
         cb(null, "public/gallery")
           //recursive folder madhe folder banavt
        },
    
})
exports.galleryUpload = multer({storage:galleryStorage}).array("url",5)

module.singleUpload=multer({storage}).single("heroImage")