const express = require("express");
const mongoose = require("mongoose");
const app = express();

const blogController = require("./controllor/blogController")

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://majarajkovcevska:bnnnjjbiknh@cluster0.fec5f9j.mongodb.net/Vezbi?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }
).then(() => {
    console.log("Succesfull connection")
}).catch((err) => {
    console.log(err)
});

app.post("/blogs", blogController.createBlog)
app.get("/blogs", blogController.getAllBlogs)

app.listen(10000, () => {
    console.log("Aplication running")
});