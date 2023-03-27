const {addDocs} = require("./../controllers/docControlller")

const router = require("express").Router()

router.post("/add",addDocs)
router.get("/get", addDocs)

module.exports=router