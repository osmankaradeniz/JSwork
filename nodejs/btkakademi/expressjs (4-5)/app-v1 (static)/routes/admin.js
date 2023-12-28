const express= require("express");
const router = express.Router();

//dizinler arası geçiş için kullandık
const path= require('path');

// app.js'te middleware'de use içerisinde
// /admin ön eki ile erişileceğini belirttik
router.get('/add-product', (req,res,next)=>{
      res.sendFile(path.join(__dirname,'../','views','add-product.html'));
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
    console.log(req.body);

    //express yönlendirme
    res.redirect('/');

});

module.exports=router;