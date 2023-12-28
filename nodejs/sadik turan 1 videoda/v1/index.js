//console.log("merhaba");
//request = response
//talep   = yanıt => server

//http modülü (nodejs kurulumu ile geliyor.)
//require kütüphaneyi modulü dahil etmek.
var http = require("http");

//dosya okuma ve alma ve gönderme
var fs = require("fs");
// dosya okuma,silme,isim değiştirme.


//fs (file system), os (operating system) gibi modullerde node kurulumu ile gelmekte.

//arrow function'da req,res ile gelen istek yanıtları
//yönetebiliriz.

var server = http.createServer( (req,res) =>{
    //talep bağlantı adresi
    //console.log(req.url);

    if(req.url=="/")
    {
        fs.readFile("index.html", (err,html) =>{
            //if(err)..
            res.write("<h1>anasayfa</h1>");
            res.end();
        } );
    }
    else if(req.url=="/urunler"){
        fs.readFile("urunler.html",(err,html)=>{
            res.write(html);    
            res.end();
        });
    }
    else
    {
        fs.readFile("404.html", (err,html) =>{
            res.write(html);
            res.end();
        });
    }

    //response end , talep tamamlandığında kullanılabilir.
    //response göndermek için write res.write() 
    //res.write("<h1>anasayfa</h1>");
    //mutlaka resposu kapat.
    
});
//veya şöyle yazabiliriz
// var server=http.createServer(function(){});


//serveri belli bir port altında hizmete açmamız gerek.
// server.listen(port,callback function)
// 3000 portu hizmete girer ve bir mesaj döner.
server.listen(3000, ()=>{
    console.log("node.js server at port 3000");
});




