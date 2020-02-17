const express = require("express");

const app = express();

app.listen(3000, function(){
    console.log("Server 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});

app.post("/", function(req, res){
    res.sendFile(__dirname + "/AccountSetUp.jsx");
});