const express = require("express");
const mongoose = require("mongoose");
const app = express();

const blogController = require("./controllor/blogController")

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://majarajkovcevska:2101993maja@cluster0.fec5f9j.mongodb.net/Vezbi?retryWrites=true&w=majority",
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
// app.get("/blogs/:id", blogController.getBlogs);
app.get("/blogs/:naslov", blogController.getBlog)
app.patch("/blogs/:id", blogController.updateBlog)
app.delete("/blogs/:id", blogController.deleteBlogs)

app.listen(10000, (err) => {
    if (err) return console.log("Error")
    console.log("Aplication running")

});