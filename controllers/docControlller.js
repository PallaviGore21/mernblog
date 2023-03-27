const { docsUpload } = require('../utils/uploads')
const doc = require('./../models/Docs')

exports.addDocs =(req,res)=>{
    try {
        docsUpload(req,res,async(err)=>{
              if(err){
                return res.json({
                    success:false,
                    message:"multer error" + err
                })
              }
              const result = await doc.create(req.body)
              console.log(req.body)
              console.log(req.files)
              res.json({
                success:true,
                message:"documents uploaded Successfully"
              })
        })
    } catch (error) {
          res.status(400).json({
            success:false,
            message:`Error ${error.message}`
          })
    }
}