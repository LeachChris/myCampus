// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const postString = "test";
const commentString = "test";
const profString = "test";
const univString = "test";

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
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

//function makePost(p) {
    // p = postString;

    // postData
    // const postData = {
    //     post: p,
    //     univID: 1,
    //     numLikes: 0
    // };

    // Post Save
    // const newPost = new Post(postData);  // Instance of the new model

    // Post Save
    //  newPost.save((error) => {
    //      if (error) {
    //          console.log('Something went wrong with post save');
    //      }
    //      else {
    //          console.log('Post data has ben saved');
    //      }
    //  });
//}

function makeComment(c) {
    c = commentString;

    // commentData
    const commentData = {
        comment: c,
        postID: 1,
        numLikes: 0
    };

    // Comment Save
    const newComment = new Comment(commentData);

    // Comment Save
    newComment.save((error) => {
        if (error) {
            console.log('Something went wrong with comment save');
        }
        else {
            console.log('Comment data has ben saved');
        }
    });
}

function addProf(pr) {
    pr = profString;

    // profData
    const profData = {
        name: pr, 
        univID: 1,
        department: "SE",
        classes: "Applied Research"
    };

    // Prof Save
    const newProf = new Prof(profData);

    // Prof Save
    newProf.save((error) => {
        if (error) {
            console.log('Something went wrong with prof save');
        }
        else {
            console.log('Prof data has ben saved');
        }
    });
}

function addUniv(u) {
    u = univString;

    // univData
    const univData = {
        university: u
    };

    // University Save
    const newUniv = new University(univData);

    // Universoty Save
    newUniv.save((error) => {
        if (error) {
            console.log('Something went wrong with university save');
        }
        else {
            console.log('University data has ben saved');
        }
    });
}



 // COMMENT SET UP
 // Comment Schema Declaration
 const SchemaComment = mongoose.Schema;
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
 // Comment Model
 const Comment = mongoose.model('Comment', CommentSchema);

 

//  // THIS CODE HAS BEEN MOVED TO PROJS.JS
//  //PROF SET UP
//  // Prof Schema Declaration
//  const SchemaProf = mongoose.Schema;
//  // Professor Schema
//  const ProfSchema = new SchemaProf ({
//      name: String,
//      univID: Number,
//      department: String,
//      classes: String
//  });
//  // Professor Model
//  const Prof = mongoose.model('Professor', ProfSchema);


 // UNIV SET UP
 // University Schema Declaration
 const SchemaUniv = mongoose.Schema;

 // University Schema
 const UnivSchema = new SchemaUniv ({
     university: String,
 });
 // University Model
 const University = mongoose.model('University', UnivSchema);


//TESTING FUNCTIONS
// makePost(postString);
// makeComment(commentString);
// addProf(profString);
// addUniv(univString); 




app.listen(PORT, console.log(`Server is starting at ${PORT}`));

//app.listen(3000, function(){
//    console.log("Server 3000");
//});

/*
app.get("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});

app.post("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});
*/