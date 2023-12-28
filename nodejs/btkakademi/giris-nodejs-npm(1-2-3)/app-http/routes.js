const fs = require("fs");

//formlardan gelen verileri
//objelere dönüştürmek için kullanabiliriz.
const qs =  require("querystring");

const routeHandler= (req,res)=>{

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


    if(url==="/log" && method==="POST")
    {
            
            //body parsin (bodyParser) kullanarak yapabiliriz
            // buffer'lar ile uğraşmadan .
            //okunabilir her bir bilgi parçacığı server tarafına
            // ulaştığında tetiklenir.

            const body=[];
            //her chunk oluştuğunda tetiklenen
            req.on('data',(chunk)=>{
                body.push(chunk);
                //console.log(chunk);
            });
            //tüm bufferlar oluştuğunda tetiklenir.
            req.on('end', ()=>{
                const bodyParsed = Buffer.concat(body).toString();
                //let message = bodyParsed.split('=')[1];
                
                let message = qs.parse(bodyParsed).message;
                
                fs.appendFileSync('./app-http/message.txt',"\n"+message);
            
            });

            
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
    }
}

module.exports=routeHandler;