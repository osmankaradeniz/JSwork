const express = require("express");
const app = express();

// template engine
app.set("view engine","ejs");
//pug , handlebars... ta kullanabilirdik ejs yerine

// statik dosyaları kullancak isek bunları bildirmemiz gerekiyor
// middleware kullanarak.
app.use(express.static("public"));
app.use(express.static("node_modules")); 


const data=[
   {id:1,name:"iphone 14",price:30000 , isActive:true , image_url:"1.jpg"},
   {id:2,name:"iphone 15",price:40000, isActive:true , image_url:"2.jpg"},
   {id:3,name:"iphone 16",price:50000, isActive:true , image_url:"3.jpg"},
]


//route oluşturma
//yukarıdan aşağıya doğru okunur 
//kural dizisi işler "/" ifadesi ile "/test" 
// sıralamsında / önce yazılır
// "/test" sonra yazılır ise
// /test istek gönderirken karşılayacak olan "/" olacak
// bu sebeple buna dikkat ederek "/" sonra tanımlamak
// buna göre route tanımlarını yapmak doğrudur.
// eşleşen ilk'e bakar.

//app.use bir middleware'dır.

//routelar..
app.use("/products/:id",function(req,res){
    //res.send(req.params);
    //res.send("products detail " + req.params.id);
    const urun = data.find(u => u.id == req.params.id);

   //objeyi direk render sayfasına iletebiliriz.    
    res.render("product-details",urun);

 });

 // ejs file'na data gönderirken object olarak paketlemeliyiz.
 app.use("/products",function(req,res){
    res.render("products", {
      urunler:data
    }); 
 });

app.use("/",function(req,res){
   res.render("index") 
});

// DOSYA YOLU BELİRLEMEDEN DOSYA GÖNDERMEK İÇİN
// RENDER ETMEK İÇİN "TEMPLATE ENGİNE" LAR KULLANMAN GEREK.
// views klasörü oluşturduk ve içerisinde html yapılarını
// .ejs olarak uzantıladık.




app.listen(3000,()=>{
    console.log("Listening on port 3000");
});
