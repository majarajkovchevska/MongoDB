const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    naslov: {
        type: String,
        required: [true, "Mora da ima naslov"],
    },
    opis: {
        type: String,

    },
    ocenka: {
        type: Number,
        default: 2,

    },
    avtor: {
        type: String,
        required: [true, "Mora da se vnese avtor"],
    },
    vreme: {
        type: Date,
        default: Date.now,
    }
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
