const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('<h1>Hello World</h1>');
});

app.get('/about',function(req,res){
    res.send('<h1>I am Raheman</h1>');
});

app.listen(7000,function(){
    console.log("Server listening to port 7000");
});