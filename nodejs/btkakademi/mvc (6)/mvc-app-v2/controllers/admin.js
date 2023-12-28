const Product= require('../models/product');

exports.getProducts=(req,res,next)=>{ 

    const products = Product.getAll(); 
    res.render('admin/products', {
             title:"Admin products", 
             products:products,
             path: req.originalUrl,
             action: req.query.action,
             //url üzerinden gelen ?productid=x bilgisinin req.query.param yapısında alınması.
             productid: req.query.productid
    });
 }



exports.getAddProduct = (req,res,next)=>{  

    res.render('admin/add-product',{
        title:"Add Product",
        path: req.originalUrl
    }); 
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


exports.getEditProduct = (req,res,next)=>{  
    const product = Product.getById(req.params.productid);

   // console.log(product);   

    res.render('admin/edit-product',{
        title:"Edit Product",
        path: req.originalUrl,
        product : product
    }); 
}


exports.postEditProduct=(req,res,next)=>{

    const product = Product.getById(req.body.id);

    product.name= req.body.name;
    product.price= req.body.price;
    product.description= req.body.description;
    product.imgUrl=req.body.imgUrl;

    Product.Update(product);

    res.redirect('/admin/products?action=edit');
}

exports.postDeleteProduct=(req,res,next)=>{

    Product.DeleteById(req.body.productid);
    res.redirect('/admin/products?action=delete&productid=' + req.body.productid);

}