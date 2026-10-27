
const express = require('express');
const app = express();

app.post('/student', (req, res) => {
    res.send("Student added successfully");
});

app.listen(3000, () => {
    console.log("Server is running");
});