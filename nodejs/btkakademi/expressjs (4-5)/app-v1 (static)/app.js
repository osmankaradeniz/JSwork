const express = require("express");
const app = express();




//from verileri için req.body
const bodyParser= require('body-parser');

const path = require('path');

const adminRoutes= require('./routes/admin');
const userRoutes = require('./routes/user');
const exp = require("constants");

//public klasörünü dışardan erişime açıyoruz.
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware'i
app.use(bodyParser.urlencoded({extended:false}));

//admin routes
// alt routerlara erişmek için
// admin/router-filtresi şeklinde erişmek için.
app.use('/admin',adminRoutes);

//user routes
app.use(userRoutes);


//hiçbir route ve middleware çalışmaz ise.
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});




// app.get('/',(req,res)=>{
//     res.send("hello world");
// });

// bir get isteği olması durumunda filtreleme yaparak isteği kontrol ettirmek
// app.get('/api/products',(req,res)=>{
//     res.send("ürünler listelendi");
// });

//middleware şeklinde alalım istekleri
// app.use((req,res,next)=>{
//     console.log("middleware 1 çalıştı");
//     next();
// });

//middleware yapısında
//app.use genel bir tanımdır filtreleme parametreye bğalı
//yapılır ve app.getten daha farklı şekilde 
//tüm http metodlarını karşılar filtreye göre
// "/" başa tanımlandı ise next() ile devam ettirmemiz gerek
// çünkü tüm isteklerde "/" içerdiği için next() olmaz ise
//diğer filtereler yönetilemez.


 
app.listen(3000,()=>{
    console.log("listening on port 3000");
});