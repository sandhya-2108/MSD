const fs = require("fs");

fs.writeFileSync("student.txt", "Name: Shravani \nCourse: Computer Science");

const data = fs.readFileSync("student.txt", "utf8");

console.log(data);
console.log("File reading completed.");