var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
    console.log("Middleware executed");
    next();
});

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(3000);