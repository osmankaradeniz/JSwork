const Product= require('../models/product');
const Category = require('../models/category');

exports.getIndex=(req,res,next)=>{ 

    const products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/index',
          {
             title:"Shopping", 
             products:products,
             categories:categories,
             path: req.originalUrl
          }
    );
 
 }

exports.getProducts=(req,res,next)=>{ 
    const products = Product.getAll();
    const categories = Category.getAll();
   
    res.render('shop/products',
          {
             title:"Products", 
             products:products,
             categories:categories,
             path: req.originalUrl
          }
    );
 
 }

 exports.getProductsByCategoryId=(req,res,next)=>{  

   const products = Product.getProductsByCategoryId(req.params.categoryid); 
   const categories = Category.getAll();
  
   res.render('shop/products',
         {
            title:"Products", 
            products:products,
            categories:categories,
            path: req.originalUrl
         }
   );

}


 exports.getProduct=(req,res,next)=>{ 

   // id verisi var mı kontrol edilebilirdi burada ve err yönetimi.
   const product = Product.getById(req.params.productid)

   res.render('shop/product-detail',{
      title:product.name,
      product:product,
      path: req.originalUrl
   })
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