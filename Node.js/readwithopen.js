const fs = require("fs");

fs.open("student.txt", "r", (err, fd) => {
    if (err) {
        console.log("Error opening file");
        return;
    }

    const buffer = Buffer.alloc(100);

    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:");
        console.log(buffer.toString("utf8", 0, bytesRead));

        fs.close(fd, () => {
            console.log("File closed.");
        });
    });
});