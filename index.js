const fs = require('fs');
const http = require('http');
const url = require('url');


//api
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

// Server
const server = http.createServer((req, res) => {
    const path = req.url;
    //overview
    if (path === "/" || path === "/overview") {
        res.end("this is overview");
        //product
    } else if (path === "/product") {
        res.end("this is product");
        //api
    } else if (path === "/api") {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data); 
    }
    // not found 404
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world"
        });
        res.end("<h1>page not found</h1>");
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log("hcb");
})