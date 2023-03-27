const user = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { profileUpload } = require("../utils/uploads")
exports.registerUser=async(req,res)=>{
    try{
        const f = await user.findOne({email: req.body.email})
        if (f){
            return res.status(400).json({
                success:false,
                message:"email already exist, please login with another email"
            })
        }
      profileUpload(req,res,async(err)=>{
         if(err){
            return res.status(400).json({
                success:false,
                message:"multer error" + err
            })
         }
         req.body.password= bcrypt.hashSync(req.body.password)
    const result = await  user.create(req.body)
    const token=jwt.sign({id:result._id},process.env.JWT_KEY)
     res.json({
        success:true,
        message:`${result.name} registerd successfully`,
        result:{
                 name:result.name,
                 email:result.email,
                 id:result._id,

                 token
        }
     })
      })
    }catch(error){
     
        res.status(400).json({
            message:`Error ${error.message}`
        })
    
    }
}

exports.getAllregisterUser=async(req,res)=>{
    try{
       const {limit=5,skip=0} = req.query
       const total = await user.countDocuments() 
           const result = await  user.find().limit(limit).skip(skip)//find function always returns array
     res.json({
        success:true,
        count:result.length,
        message:`All Users Fetched registerd successfully`,
        result:{
            users:result,
            total,
            totalBtn: Math.ceil(total/limit),
        }
     })
    }catch(error){
        res.status(400).json({
            message:`Error ${error.message}`
        })
    
    }
}

exports.loginUser= async(req,res)=>{
    try{
        const result = await user.findOne({email:req.body.email})
        if(!result){
            return res.status(401).json({
                   success:false,
                   message:"Email not found"
            })
        }
      const verify=  bcrypt.compareSync(req.body.password,result.password)
      if(!verify){
        return res.status(401).json({
            success:false,
            message:"password not found"
        })
      }
      const token= jwt.sign({id:result._id}, process.env.JWT_KEY)
      res.json({
        success:true,
        message:"login sucess",
        result:{
            name:result.name,
            email: result.email,
            id:result._id,
            token
        }
      })
    }catch(error){
        res.status(400).json({
            message:`Error ${error.message}`
        })
    
    }
}

exports.destroyUsers = async (req,res)=>{
    try{
      await user.deleteMany()
      res.json({
        success:true,
        message:"all users deleted Successfully"
      })
    }catch{
         res.status(400).json({
            success:false,
            message:"error" + error
         })
    }
}