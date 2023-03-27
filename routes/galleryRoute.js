const { addImagesToGallery } = require("../controllers/galleryController")

const router= require("express").Router()

router
.post("/add",addImagesToGallery)

module.exports=router