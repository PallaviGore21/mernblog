const {getAllBlogs, createBlog,updateBlog, getSingleBlog, deleteBlog, deleteAllBlog, getAllInfiniteBlogs}= require("./../controllers/blogController")
const {protected} = require("./../middlewares/authMiddleware")
const router = require("express").Router()
router
.get("/infinite",getAllInfiniteBlogs)
.get("/:id", getSingleBlog)
.post("/add",createBlog)
.put("/update/:id",protected ,updateBlog)
.delete("/delete/:id",protected,deleteBlog)
.delete("/destroy",deleteAllBlog)
 
module.exports=router