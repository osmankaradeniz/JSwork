const Product= require('../models/product');
const Category = require('../models/category');

exports.getIndex=(req,res,next)=>{ 

    Category.getAll()
      .then((categories)=>{

            Product.getAll()
               .then((products)=>{
                  res.render('shop/index',{
                        title:"Shopping", 
                        products:products[0],
                        categories:categories[0],
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
   
   Category.getAll()
      .then((categories)=>{ 

            Product.getAll().then((products)=>
            {
               res.render('shop/products',
                  {
                     title:"Products", 
                     products:products[0],
                     categories:categories[0],
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

   Product.getProductsByCategoryId(req.params.categoryid)
   .then((products)=>{

      Category.getAll()
         .then((categories)=>{
            res.render('shop/products',{
               title:"Products", 
               products:products[0],
               categories:categories[0],
               path: req.originalUrl
            })
         })
         .catch((err) => console.log(err));
      
   })
   .catch((err) => console.log(err));

}


 exports.getProduct=(req,res,next)=>{ 

   Product.getById(req.params.productid)
    .then((product)=>{
      res.render('shop/product-detail',{
         title:product[0][0].name,
         product:product[0][0],
         path: req.originalUrl
      })
    })
    .catch((err)=>{
      console.log(err);
    });

   
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