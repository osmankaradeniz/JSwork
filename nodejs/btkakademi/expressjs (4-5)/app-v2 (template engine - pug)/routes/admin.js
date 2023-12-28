const express= require("express");
const router = express.Router();
const qs=require("querystring");

const products =[
    {name:"samsung s8",price:2000,image:"1.jpg",description:"çok iyi telefon"},
    {name:"samsung s7",price:3000,image:"2.jpg",description:"iyi telefon"},
    {name:"samsung s6",price:4000,image:"3.jpg",description:"orta telefon"},
    {name:"samsung s5",price:5000,image:"4.jpg",description:"kötü telefon"}
 ];

// app.js'te middleware'de use içerisinde
// /admin ön eki ile erişileceğini belirttik
router.get('/add-product', (req,res,next)=>{
      //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
      //template engine ile dosya göndermek için.
      res.render('add-product',{title:"Add Product"});
    });

router.post('/add-product',(req,res,next)=>{
    //database kayıt
    //formdan gelen veriler bu route'a gelecek yönlendirdik.
    // data - end eventi nodejs'te veriyi
    //chunklar ile bufferlar oluşup
    //toplayıp işliyorduk

    //express üzerinde
    //body-parser middleware üzerinden
    //bu işlemi çok daha basit şekilde 
    //yapıyoruz.
    //console.log(req.body);

    //formdan post sonrası bir datayı bu şekilde alıyoruz.
     
    //products.push(req.body);
    products.push({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        description: req.body.description
    });

    //express yönlendirme
    res.redirect('/');

});

module.exports.routes=router;
module.exports.products=products;