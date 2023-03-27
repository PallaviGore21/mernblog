const { getAllregisterUser, registerUser, loginUser, destroyUsers } = require("../controllers/userController")

const router = require("express").Router()


router
.get("/", getAllregisterUser)
.post("/register", registerUser)
.post("/login",loginUser )
.delete("/destroy", destroyUsers)

module.exports=router