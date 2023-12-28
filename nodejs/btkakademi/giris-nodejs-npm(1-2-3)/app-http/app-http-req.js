const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
   
    res.setHeader('Content-Type','text/html');

    if(url==="/")
    {
        res.write(`
        <html>
        <head>
             <title>Mesaj</title>
        </head>
         <body>
            <form method="POST" action="/log">
                <input type="text" name="message"/>
                <button type="submit"> Save</button>
            </form>
         </body>
        </html>
        `);
        return res.end();
    }

    if(url==="/log" && method==="POST"){
        //fs.writeFileSync('./app-http/message.txt','deneme');
        fs.appendFileSync('./app-http/message.txt','\ndeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }

});




server.listen(3000);
console.log("listening on port 3000");
