const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.headers.host+""+req.url);
});

server.listen(3000);