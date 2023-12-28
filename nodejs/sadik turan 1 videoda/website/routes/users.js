/*
const data=[
   {id:1,name:"iphone 14",price:30000 , isHome:true,isActive:true , image_url:"1.jpg"},
   {id:2,name:"iphone 15",price:40000, isHome:false,isActive:true , image_url:"2.jpg"},
   {id:3,name:"iphone 16",price:50000, isHome:true,isActive:true , image_url:"3.jpg"},
]
*/

// dinamik veri yönetimi için veritabanı entegrasyonu yapıyoruz
//bunun için mysql'ı tercih ettik.
const express = require("express");
const router = express.Router();
const db= require("../data/db")


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
router.use("/products/:id",async function(req,res){
    //res.send(req.params);
    //res.send("products detail " + req.params.id);
    //const urun = data.find(u => u.id == req.params.id);

    try{
      //sql injection'a karşı dizi olarak parametreyi al sql sözcüğünün içerisine.
      const [products,]= await db.execute("select * from products where id="+[req.params.id]);
      res.render("product-details",products[0]);
    }catch(err){
       console.log(err)
    }

   //objeyi direk render sayfasına iletebiliriz.    
    //res.render("product-details",urun);

 });

 // ejs file'na data gönderirken object olarak paketlemeliyiz.
 router.use("/products",async function(req,res){

   try{
      const [products,]= await db.execute("select * from products");
      res.render("products",{urunler:products});
    }catch(err){
       console.log(err)
    }

 });


//await ile kulanıyorsak 
//try catch ile hata yönetimini yapabilir
//async olarak functionun durumunu belirtmemiz gerekir.
router.use("/",async function(req,res){ 

   try{
     const [products,]= await db.execute("select * from products where isHome=1 and isActive=1");
     res.render("index",{urunler:products});
   }catch(err){
      console.log(err)
   }

   /*
   db.execute("select * from products")
   .then(result=> { 
 
       res.render("index", {
         urunler: result[0]
       });
      
      }) 
   .catch(err=> console.log(err));
   */

});

// DOSYA YOLU BELİRLEMEDEN DOSYA GÖNDERMEK İÇİN
// RENDER ETMEK İÇİN "TEMPLATE ENGİNE" LAR KULLANMAN GEREK.
// views klasörü oluşturduk ve içerisinde html yapılarını
// .ejs olarak uzantıladık.

module.exports=router;