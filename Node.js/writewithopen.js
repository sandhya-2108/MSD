const fs = require("fs");

fs.open("student.txt", "w", (err, fd) => {
    if (err) {
        console.log("Error opening file");
        return;
    }

    const data = "Hello, this is Node.js file handling.";

    fs.write(fd, data, (err) => {
        if (err) {
            console.log("Error writing file");
            return;
        }

        console.log("Data written successfully.");

        fs.close(fd, () => {
            console.log("File closed.");
        });
    });
});