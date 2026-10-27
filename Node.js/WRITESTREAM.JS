var fs = require("fs");
var data = `Udemy is giving self learning content`;

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();
writerStream.on('finish', function() {
   console.log("Write completed.");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("Program Ended");
