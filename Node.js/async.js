const fs = require("fs");

fs.writeFile("student.txt", "Name: Kiran\nCourse: IT", (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }

    console.log("File written successfully.");

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log(data);
    });
});
console.log("Program continues");