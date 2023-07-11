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


    } catch (err) {
        res.status(400).json({
            status: "fail",
            messages: "error",
        });
    }
};




exports.getAllBlogs = async (req, res) => {
    try {

        const queryObj = { ...req.query };

        //ovoj objket go konvertirame vo string
        let queryString = JSON.stringify(queryObj);

        // go konvertime vo string poradi sto mozeme da upotrebime metoda replace so koja metoda kje modificirame
        // go modificirame stringot

        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        const query = JSON.parse(queryString);
        const blogs = await Blog.find(query);

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

//* Po ID
// exports.getBlogs = async (req, res) => {
//     try {
//         console.log(req.params)
//         const blog = await Blog.findById(req.params.id)
//         res.status(200).json({
//             status: "Success",
//             data: {
//                 blog,
//             }
//         })
//     } catch (err) {
//         res.status(404).json({
//             status: "fail",
//             messages: err,
//         })
//     }
// }

//* po naslov 

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.find({ naslov: req.params.naslov });
        res.status(200).json({
            status: "Success",
            data: {
                blog,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}


//! UPDATE

exports.updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "Success",
            data: {
                updatedBlog,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}

//!DELETE

exports.deleteBlogs = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "Success",
            data: null,
        })

    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}

