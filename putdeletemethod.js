var express = require('express');
var app = express();

app.use(express.json());

app.put('/student', function(req, res) {
    res.send("Student updated successfully");
});

app.delete('/student', function(req, res) {
    res.send("Student deleted successfully");
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});