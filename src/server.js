// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// MONGODB ACCOUNT INFO:
// Usermame: MyCampusAdmin
// Password: AdminForMyCampus

// MongoDB URI
const MONGODB_URI = 'mongodb+srv://MyCampusAdmin:AdminForMyCampus@mycampus-whyic.mongodb.net/MyCampus?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/MyCampus', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})

// SCHEMA DECLARATIONS
// Post Schema Declaration
const SchemaPost = mongoose.Schema;
// Prof Schema Declaration
const SchemaProf = mongoose.Schema;
// Comment Schema Declaration
const SchemaComment = mongoose.Schema;
// University Schema Declaration
const SchemaUniv = mongoose.Schema;

// SCHEMAS (Similar to database design)
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
// Professor Schema
const ProfSchema = new SchemaProf ({
    name: String,
    univID: Number,
    department: String,
    classes: String
});
// Comment Schema
const CommentSchema = new SchemaComment ({
    comment: String,
    postID: Number,
    date: {
        type: String,
        default: Date.now()
    },
    numLikes: Number,
});
// University Schema
const UnivSchema = new SchemaUniv ({
    university: String,
});

// MODELS
// Post Model
const Post = mongoose.model('Post', PostSchema);  // 'Post' refers to name of collection
// Professor Model
const Prof = mongoose.model('Professor', ProfSchema);
// Comment Model
const Comment = mongoose.model('Comment', CommentSchema);
// University Model
const University = mongoose.model('University', UnivSchema);

// DATA THINGS
// postData
const postData = {
    post: "Post goes here",
    univID: 1,
    numLikes: 0
};
// profData
const profData = {
    name: "Name goes here", 
    univID: 1,
    department: "SE",
    classes: "Applied Research"
};
// commentData
const commentData = {
    comment: "Comment goes here",
    postID: 1,
    numLikes: 0
};
// univData
const univData = {
    university: "St. Cloud State University"
};

// Saving data into the db (create different funcitons for this eventually?)
// Post Save
const newPost = new Post(postData);  // Instance of the new model
// Prof Save
const newProf = new Prof(profData);
// Comment Save
const newComment = new Comment(commentData);
// University Save
const newUniv = new University(univData);

// FINAL SAVE
// Post Save
newPost.save((error) => {
    if (error) {
        console.log('Something went wrong with post save');
    }
    else {
        console.log('Post data has ben saved');
    }
});
// Prof Save
newProf.save((error) => {
    if (error) {
        console.log('Something went wrong with prof save');
    }
    else {
        console.log('Prof data has ben saved');
    }
});
// Comment Save
newComment.save((error) => {
    if (error) {
        console.log('Something went wrong with comment save');
    }
    else {
        console.log('Comment data has ben saved');
    }
});
// Universoty Save
newUniv.save((error) => {
    if (error) {
        console.log('Something went wrong with university save');
    }
    else {
        console.log('University data has ben saved');
    }
});

// HTTP request logger
app.use(morgan('tiny'));

// Routes (IGNORE THIS FOR NOW - WILL BE USEFULL LATER)
/*
app.get('/api', (req, res) => {
    const data = {
        username: 'username',
        age: 5
    };
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'name',
        age: 20
    };
    res.json(data);
});
*/

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

app.listen(3000, function(){
    console.log("Server 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});

app.post("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});