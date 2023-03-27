const Blog = require("./../models/Blog")


exports.getAllBlogs = async (req, res) => {

    try {
        const { limit = 5, skip = 0 } = req.query
        const total = await Blog.countDocuments()
        const result = await Blog
            .find()
            .skip( skip)
            .limit(limit)
            .populate("auther", "name -_id")

        res.json({
            success: true,
            message: `All blogs fetched successfully`,
            result: {
                blogs: result,
                total,
                totalBtn: Math.ceil(total / limit),

            }
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.getAllInfiniteBlogs = async (req, res) => {
    try {
        const total = await Blog.countDocuments()
         const {limit=5,skip=0, currentPage=0 }=req.query
        const result = await Blog
        .find()
        .skip(limit * currentPage )
        .limit(limit)
        .populate('auther',"name -_id")
        res.json({
            success: true,
            message: "All Blogs Fetched Successfully",
            // count: total,
            result:{
                blog:result,
                total,
                totalBtn:Math.ceil(total/limit),
                // count:total
               
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.getSingleBlog = async (req, res) => {
    try {
        const result = await Blog.findById(req.params.id).populate("auther","name-_id")
        res.json({
            success: true,
            message: " Blog Fetched Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.createBlog = async (req, res) => {
    try {
        await Blog.create(req.body)
        res.json({
            success: true,
            message: " Blog Created Successfully",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success: true,
            message: " Blog Updated Successfully",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: " Blog deleted Successfully",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.deleteAllBlog = async (req, res) => {
    try {
        await Blog.deleteMany()
        res.json({
            success: true,
            message: "All  Blogs deleted Successfully",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}