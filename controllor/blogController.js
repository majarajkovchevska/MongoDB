const Blog = require("../model/blogModel");

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                blog: newBlog
            },
        });
        res.send(newBlog)

    } catch (err) {
        res.status(400).json({
            status: "fail",
            messages: "error",
        });
    }
};


exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            status: "Success",
            data: {
                blogs: blogs,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: "Error",
        });
    }
};