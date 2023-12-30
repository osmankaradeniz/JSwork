 const connection = require('../utilty/database') 


module.exports = class Product{

    constructor(name,price,imgUrl,description,categoryid)
    {
        //id AI otomatik oluşacak.
        this.name=name;
        this.price=price;
        this.imgUrl=imgUrl;
        this.description=description;
        this.categoryid=categoryid;
    }

    saveProduct(){
        return connection.execute('insert into products(name,price,imgUrl,description,categoryid) values(?, ?, ?, ?, ?)',[this.name,this.price,this.imgUrl,this.description,this.categoryid]);
    }

    static getAll(){
        return connection.execute("select * from products");
    }

    static getById(id){
        return connection.execute('select * from products where products.id=?',[id]);
    }

    static getProductsByCategoryId(categoryid){ 
        return connection.execute('select * from products where products.categoryid=?',[categoryid]);
    }

    static Update(product){
      return connection.execute("update products set products.name=?, products.price=?, products.imgUrl=?, products.description=?, products.categoryid=? where products.id=?",[product.name,product.price,product.imgUrl,product.description,product.categoryid,product.id]);
    }

    static DeleteById(id){
        return connection.execute("delete from products where products.id=?",[id]);
    }

}