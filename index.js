const http = require('http');

// Server
const server = http.createServer((req, res) => {
    res.end("Huynh Chi Bao");
})

server.listen(8000 , '127.0.0.1', () => {
    console.log("hcb");
})