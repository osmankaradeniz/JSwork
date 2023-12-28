const products = [];

module.exports = class Product{

    constructor(name,price,imgUrl,description)
    {
        this.name=name;
        this.price=price;
        this.imgUrl=imgUrl;
        this.description=description;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }
}