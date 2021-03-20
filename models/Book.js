const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    title: String,
    authors: [ String ],
    description: String,
    image: String,
    link: String
    
    // add validations
 
});

const Book= mongoose.model("book", bookSchema);

module.exports = Book;
