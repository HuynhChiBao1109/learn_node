const e = require('express');
const http = require('http');
const url = require('url');

// Server
const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === "/" || path === "/overview") {
        res.end("this is overview");
    } else if (path === "/product") {
        res.end ("this is product");
    } else {
        res.writeHead(404 , {
            "Content-type" : "text/html",
            "my-own-header" : "hello-world"
        });
        res.end("<h1>page not found</h1>");
    }

})

server.listen(8000 , '127.0.0.1', () => {
    console.log("hcb");
})