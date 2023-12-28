 

const products = [
    {id:"12354",name:'samsung s6',price:2000,imgUrl:'1.jpg',description:'iyi telefon'},
    {id:"63354",name:'samsung s7',price:3000,imgUrl:'2.jpg',description:'orta telefon'},
    {id:"12452",name:'samsung s8',price:4000,imgUrl:'3.jpg',description:'çok iyi telefon'}

];

module.exports = class Product{

    constructor(name,price,imgUrl,description)
    {
        this.id=(Math.floor(Math.random()*99999)+1).toString();
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

    static getById(id){
        const product = products.find(i=> i.id === id);
        return product;
    }

    static Update(product){
        const index = products.findIndex(i=> i.id === product.id);

        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imgUrl=product.imgUrl;
        products[index].description=product.description;

    }

    static DeleteById(id){
        const index = products.findIndex(i=> i.id===id);
        products.splice(index,1);
    }

}