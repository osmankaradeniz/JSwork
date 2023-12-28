const http = require("http");
const fs= require('fs');

const server = http.createServer((req,res)=>{
    /*
        //res.setHeader('Content-Type','text/plain');
        //res.setHeader('Content-Type','application/json');
        res.setHeader('Content-Type','text/html');
        res.statusCode=200;
        res.statusMessage='OK';
        //response body
        //res.write('Hello world');
        //res.write(JSON.stringify({name:"s8 plus",price:3000}));
        res.write("<html>");
        res.write("<head><title>Merhaba nodejs simple</title></head>");
        res.write("<body><h1>test message</h1></body>");
        res.write("</html>");
        res.end();
        console.log(res.statusMessage)
        */
        fs.readFile('./app-http/index.html','utf-8',(error,file)=>{
            if(error){
                res.setHeader('Content-Type','text/plain');
                res.statusCode=404;
                res.statusMessage="Not Found";
                res.end("Dosya bulunamadı");
            }else{
                res.setHeader('Content-Type','text/html');
                res.statusCode=200;
                res.statusMessage="OK";
                res.end(file);
            }

        });
        
});
    

server.listen(3000);

