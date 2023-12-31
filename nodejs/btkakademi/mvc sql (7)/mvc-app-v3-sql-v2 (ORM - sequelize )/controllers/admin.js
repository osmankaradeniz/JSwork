const Product= require('../models/product');
const Category = require('../models/category');

exports.getProducts=(req,res,next)=>{ 

    
    Product.findAll().then((products)=>{
        res.render('admin/products', {
            title:"Admin products", 
            products:products,
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
    
    Category.findAll()
    .then((categories)=>{
        res.render('admin/add-product',{
            title:"Add Product",
            categories:categories,
            path: req.originalUrl
        })
    })
    .catch((err)=>{
        console.log(err);
    });
 
}


exports.postAddProduct=(req,res,next)=>{
     
    const name = req.body.name;
    const price = req.body.price;
    const imgUrl=  req.body.imgUrl;
    const description = req.body.description;
    const categoryId = req.body.categoryid;
    
    /*
    //non-persisten 
    const prd = Product.build({
        name: name,
        price: price,
        imgUrl:imgUrl,
        description:description
    });

    prd.save().then((result)=>{
        console.log(result);
        res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
    */

    
    //persistent
    Product
    .create({
        name: name,
        price: price,
        imgUrl:imgUrl,
        description:description,
        categoryId: categoryId
    })
    .then((result)=>{
       // console.log(result);
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err);
    });

    // model üzerinden gelen bir objeyi işlemek üzere
    // create() metodu ile kullanacağız
    // non-persisten , persistent instances'lar
    // build ederek  ,  -
    // save()        , create()
    //        promise
    // şeklinde kullanılabiliyor
    
    

    

}


exports.getEditProduct = (req,res,next)=>{  
    // attributes belirtmez isek * olarak alacaktır.
   Category.findAll()
    .then((categories)=>{

        Product.findByPk(req.params.productid).then((product)=>{ 
            //kodların aşşağı doğru gitmesini return ile engelledik.
            if(!product){
                return res.redirect('/');
            }

            res.render('admin/edit-product',{
                title:"Edit Product",
                categories:categories,
                path: req.originalUrl,
                product : product
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
     
    const id= req.body.id;
    const name= req.body.name;
    const price= req.body.price;
    const description= req.body.description;
    const imgUrl=req.body.imgUrl;
    const categoryId=req.body.categoryid;

    Product.findByPk(id).then((product)=>{
        product.name=name;
        product.price=price;
        product.imgUrl=imgUrl;
        product.description=description;
        product.categoryId=categoryId;
        //buda bir promise yapıdır.
        //bu sebeble 2 defa catch oluşturmamak için
        //return ederiz 
        return product.save();

    })
    .then((result)=>{
        console.log('updated')
        res.redirect('/admin/products?action=edit');
    })
    .catch((err)=>{
        console.log(err);
    });
 
 
}

exports.postDeleteProduct=(req,res,next)=>{

    const id = req.body.productid; 

    Product.findByPk(id)
        .then((product)=>{
            return product.destroy();
        })
        //destroy'da bir promise olduğu için bir sonraki
        //then ile yakalamak için return
        //ediyoruz silindi ise işlem yapıyoruz.
        // 2 catch kullanmamak için bu yapıyı tercih ediyoruz
        .then(()=>{
            console.log('product deleted !');
            res.redirect('/admin/products?action=delete&productid=' + req.body.productid);
        })
        .catch((err)=>{
            console.log(err);
        });

    /*
    //silme işlemi için destroy() yöntemi
    Product
        .destroy({
            where: {id:id}
        })
        .then(()=>{
            res.redirect('/admin/products?action=delete&productid=' + req.body.productid);
        })
        .catch((err)=>{
            console.log(err);
        }); 
    */
    
}