const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleBookId: String
 
});

const Book= mongoose.model("book", bookSchema);

module.exports = Post;
