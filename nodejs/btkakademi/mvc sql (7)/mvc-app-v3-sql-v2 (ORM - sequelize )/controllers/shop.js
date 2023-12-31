const Product= require('../models/product');
const Category = require('../models/category');

exports.getIndex=(req,res,next)=>{ 

    Category.findAll()
      .then((categories)=>{ 
            Product.findAll()
               .then((products)=>{
                  res.render('shop/index',{
                        title:"Shopping", 
                        products:products,
                        categories:categories,
                        path: req.originalUrl
                     })
               })
            .catch((err)=>{
               console.log(err);
            }); 

      })
      .catch((err)=>{
         console.log(err);
      });


 }

 
exports.getProducts=(req,res,next)=>{ 
   
   Category.findAll()
      .then((categories)=>{ 

            Product.findAll({
               attributes:['id','name','price','imgUrl'],
               })
               .then((products)=>
               {
                  res.render('shop/products',
                     {
                        title:"Products", 
                        products:products,
                        categories:categories,
                        path: req.originalUrl
                     })
               })
               .catch((err)=>{
                  console.log(err);
               }); 
      })
      .catch((err)=>{
         console.log(err);
      });
 }

 
 exports.getProductsByCategoryId=(req,res,next)=>{  

   const categoryid= req.params.categoryid;

   // model sonuçlarında thenler arasında veri taşımak için 
   const model = [];

   Category.findAll()
      .then((categories)=>{
         
         //kategori verilerini taşımak için
         //bu menu tarafındaki bilgileri 
         //sorgu sonrası elde edip ancak
         //render sayfasına aktaramama problemini çözen bir yaklaşım.
         model.categories=categories;

         //hangi kategoriye ait verileri getireceğiz ?
         const category = categories.find(i=> i.id==categoryid);
      
         //XMODEL.getYMODELs() 
         // kategori ve ürün daha önce ilişkilendirildiği
         // için sequelize tarafında belongTo/hasOne hasMany yapısıyla
         // kullanabiliriz.
         // generate bir yapı
         // ilgili kategoriye bağlı ürünleri getirmek üzere
         return category.getProducts()
         //sonraki then'e aktardır return ile.
      })
      .then((products)=>{
            //gelen ürünleri...
            //gelen kategorileri..

            res.render('shop/products',{
               title:"Products", 
               products:products,
               categories:model.categories,
               path: req.originalUrl
            })

      })
      .catch((err)=>{
         console.log(err);
      })

}


 exports.getProduct=(req,res,next)=>{ 
   
   //where kullanırsak dönen bir dizi olmaktadır
   Product.findAll({ 
      //sorgu sonucu gelecek alanlar *
      attributes:['id','name','price','imgUrl','description'],
      //sorgu
      where: {id: req.params.productid} 
   })
   .then((products)=>{
      console.log(products);
      res.render('shop/product-detail',{
         title:products[0].name,
         product:products[0],
         path: req.originalUrl
      })
   })
   .catch((err)=>{
      console.log(err);
   })


   /*
   Product.findByPk(req.params.productid)
    .then((product)=>{
      res.render('shop/product-detail',{
         title:product.name,
         product:product,
         path: req.originalUrl
      })
    })
    .catch((err)=>{
      console.log(err);
    });
*/
   
}


 exports.getCart=(req,res,next)=>{ 
 
    res.render('shop/cart',
          {
             title:"Cart",  
             path: req.originalUrl
          }
    );
 
 }

 exports.getOrders=(req,res,next)=>{ 
 
    res.render('shop/orders',
          {
             title:"Orders",  
             path: req.originalUrl
          }
    );
 
 }

 exports.getProductDetails=(req,res,next)=>{ 
 
    res.render('shop/details',
          {
             title:"Details",  
             path: req.originalUrl
          }
    );
 
 }