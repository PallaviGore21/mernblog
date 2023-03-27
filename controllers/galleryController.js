const { galleryUpload } = require("../middlewares/UploadMiddle")
const gallery = require("./../models/Gallery")

exports.addImagesToGallery = async(req,res)=>{
  try {

    galleryUpload(req, res, (err)=>{
        if(err){
            return res.status(400).json({
                success:false,
                message:"multer Error" + err, 
            })
        }
        console.log(req.files);
        res.json({
          success:true,
          message:"upload success"
        })
    })
   
  } catch (error) {
    console.log(error);
    res.json({message:""+error})
  }
}