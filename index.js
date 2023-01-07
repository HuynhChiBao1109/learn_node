const fs = require('fs');
const http = require('http');
const url = require ('url');
//////////////////////////
// Files
// Blocking 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `Huynh Chi Bao : ${textIn}`;    
// fs.writeFileSync('./txt/ouput.txt', textOut);
// console.log(textOut)
// Non-Blocking
// fs.readFile('./txt/start.txt', 'utf-8', (err,data1) => {
//     fs.readFile('./txt/${data1}.txt', 'utf-8', (err,data2) => {
//         console.log(data2);
//     });
// });
///////////////////////////////
/// Server
const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === '/product') {
        res.end("This is product");
    } else if (path === '/api') {
        res.end('./templates/overview');
    }

})

server.listen(8000 , '127.0.0.1', () => {
    console.log("hcb");
})