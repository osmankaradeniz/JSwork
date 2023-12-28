const http= require("http");

const server = http.createServer((req,res)=>{
    //console.log(req.url);
    //console.log(res.statusCode);

    if(req.url==="/api/products")
    {   
        //console.log(req.method)
        res.write("product list");
        res.end();
    }

    if(req.url==="/")
    res.write("SELAM",function(err){
        console.log("ok");
    res.end();
});

    

    //console.log(req.url,req.method);
    //bir talep gelir
    //talep işlenir
    //http metodları ile yönetiyoruz
    //ve yanıt verilir"
});

// server.on('connection',function(){
//     console.log('new connection');
// });


server.listen(3000);
console.log("listening port on 3000");