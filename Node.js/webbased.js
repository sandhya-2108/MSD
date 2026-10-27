const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Welcome to Node.js</h1>");
    res.write("<p>This is a simple web-based application.</p>");

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});