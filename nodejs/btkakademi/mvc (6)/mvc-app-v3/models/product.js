 

const products = [
    {id:"12354",name:'samsung s6',price:2000,imgUrl:'1.jpg',description:'iyi telefon',categoryid:"1"},
    {id:"63354",name:'toshiba',price:30020,imgUrl:'2.jpg',description:'orta telefon',categoryid:"2"},
    {id:"12452",name:'samsung s8',price:4000,imgUrl:'3.jpg',description:'çok iyi telefon',categoryid:"1"}

];

module.exports = class Product{

    constructor(name,price,imgUrl,description,categoryid)
    {
        this.id=(Math.floor(Math.random()*99999)+1).toString();
        this.name=name;
        this.price=price;
        this.imgUrl=imgUrl;
        this.description=description;
        this.categoryid=categoryid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }

    static getById(id){
        const product = products.find(i=> i.id === id);
        return product;
    }

    static getProductsByCategoryId(categoryid){ 
        return products.filter(i=> i.categoryid === categoryid);
    }

    static Update(product){
        const index = products.findIndex(i=> i.id === product.id);

        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imgUrl=product.imgUrl;
        products[index].description=product.description;
        products[index].categoryid=product.categoryid;

    }

    static DeleteById(id){
        const index = products.findIndex(i=> i.id===id);
        products.splice(index,1);
    }

}