const Product= require('../models/product');

exports.getProducts=(req,res,next)=>{ 

    const products = Product.getAll();
    
    res.render('index',
          {
             title:"Home Page", 
             products:products,
             path: req.url
          }
    );
 
 }



exports.getAddProduct = (req,res,next)=>{  

    res.render('add-product',
                  {
                  title:"Add Product",
                  path: req.url
                  }
    ); 
  }


exports.postAddProduct=(req,res,next)=>{
    
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imgUrl,
        req.body.description
        );

    product.saveProduct();

    res.redirect('/');
}