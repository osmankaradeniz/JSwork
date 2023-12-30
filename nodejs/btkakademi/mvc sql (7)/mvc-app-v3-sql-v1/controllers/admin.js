const Product= require('../models/product');
const Category = require('../models/category');

exports.getProducts=(req,res,next)=>{ 

    
    Product.getAll().then((products)=>{

        res.render('admin/products', {
            title:"Admin products", 
            products:products[0],
            path: req.originalUrl,
            action: req.query.action,
            //url üzerinden gelen ?productid=x bilgisinin req.query.param yapısında alınması.
            productid: req.query.productid
        })

    }).catch((err)=>{
        console.log(err);
    });
 
 }



exports.getAddProduct = (req,res,next)=>{  
    Category.getAll()
    .then((categories)=>{
        res.render('admin/add-product',{
            title:"Add Product",
            categories:categories[0],
            path: req.originalUrl
        })
    }).catch((err)=>{
        console.log(err);
    });
    
}


exports.postAddProduct=(req,res,next)=>{
    
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imgUrl,
        req.body.description,
        req.body.categoryid
        );

    product.saveProduct().then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    });

   
}


exports.getEditProduct = (req,res,next)=>{  
    
   Category.getAll()
    .then((categories)=>{

        Product.getById(req.params.productid).then((product)=>{ 
            res.render('admin/edit-product',{
                title:"Edit Product",
                categories:categories[0],
                path: req.originalUrl,
                product : product[0][0]
            })
         }).catch((err)=>{
            console.log(err);
         });
    })
    .catch((err)=>{
        console.log(err);
    });
    
}


exports.postEditProduct=(req,res,next)=>{
    
    const product = new Product();
    
    product.id= req.body.id;
    product.name= req.body.name;
    product.price= req.body.price;
    product.description= req.body.description;
    product.imgUrl=req.body.imgUrl;
    product.categoryid=req.body.categoryid;

    Product.Update(product).then(()=>{
        res.redirect('/admin/products?action=edit');
    }).catch((err)=>{
        console.log(err);
    });
 
}

exports.postDeleteProduct=(req,res,next)=>{

    Product.DeleteById(req.body.productid)
    .then(()=>{
        res.redirect('/admin/products?action=delete&productid=' + req.body.productid);
    }).catch((err)=>{
        console.log(err);
    });
    
}