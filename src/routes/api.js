const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const https = require("https");

const Post = require('../models/post');  // This is the model to use
const { on } = require('process');

//Routes
router.get('/', (req, res) => {
    Post.find( {  })
        .then((data) => {
            //console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', daerrorta);  
        });
});

// router.get("/", function(req, res){
    
//     https.get(Post, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(Post){
//             const dataP = JSON.parse(Post)
//             console.log(dataP);
//         })
//     })
//     res.send("hello")
// })

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newPost = new Post(data);
    newPost.save((error) => {
        if (error) {
            res.json({ msg: 'Sorry, internal server errors'});
        }
        else {
            // Post
            res.json({
                msg: 'Your data has been saved!!'
            });
        }
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'name',
        age: 20
    };
    res.json(data);
});

module.exports = router;