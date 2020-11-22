const mongoose = require('mongoose');

// POST SET UP
// Post Schema Declaration 
const SchemaPost = mongoose.Schema;
// Post Schema
const PostSchema = new SchemaPost ({
    post: String,
    date: {
        type: String,
        default: Date.now()
    },
    univID: Number,
    numLikes: Number
});
// Post Model
const Post = mongoose.model('Post', PostSchema);  // 'Post' refers to name of collection

module.exports = Post;
