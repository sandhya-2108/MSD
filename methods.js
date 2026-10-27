var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send(`
        <h2>Student Form</h2>
        <form method="POST" action="/submit">
            <input name="name" placeholder="Enter name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', function(req, res) {
    res.send("Welcome " + req.body.name);
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});