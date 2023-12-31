const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('node-app','root','toor',
   { 
   dialect:'mysql', 
   host:'localhost' 
   }); 


module.exports= sequelize;




//Database synchronization
//ister model/table seviyesinde
//ister database seviyesinde
//işlemler yaparız
/*

örneğin product tablosu/model şeması oluşturduktan sonra
>
Product.sync() : tabloyu oluştur
Product.sync({force:true}) tabloyu varsa drop et sonra oluştur
Product.drop() tabloyu drop et
Product.[sync|drop].then(()=>{
   herşey yolunda gitti işlemler..
}).catch(error=>{
   bazı şeyler sorun oluşturdu işlemler..
})

veya

database seviyesinde şema ile hareket ediyorsak; 
sequelize.sync()
sequelize.sync({force:true})
sequelize.drop()
.. promise biçiminde...


*/