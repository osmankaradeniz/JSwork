const connection = require('../utilty/database');
 
module.exports= class Category{

    constructor(name,description){
        this.name=name;
        this.description=description;
    }

    //obje üzerinde işlem yapıyoruz.
    saveCategory(){
        return connection.execute('insert into categories(name,description) values(?, ?)'[this.name,this.description])
    }

    //sınıfın üzerinden çağırıyoruz.
    static getAll(){
       return connection.execute('select * from categories');
    }

    static getById(id){
        return connection.execute("select * from categories where categories.id=?",[id])
    }

    static update(category){
        return connection.execute('update categories set categories.name=?, categories.description=? where categories.id=?',[category.name,category.description,category.id]);
    }

    static deleteById(id){
        return connection.execute('delete from categories where categories.id=?',[id]) 
    }
 

}