const express = require("express");
const app = express();

app.set('view engine','pug');

const bodyParser= require('body-parser');
const path = require('path');

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController= require('./controllers/errors');
const sequelize = require('./utilty/database');

const Category = require('./models/category');
const Product = require('./models/product');
const User =  require('./models/user');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);



app.use(errorController.get404);

/* ## ürün kategori ilişkilendirme başla*/

//Assocations - ilişki tipleri referansı inceleyebiliriz.
//bir kategori bir çok ürüne sahiptir
Category.hasMany(Product);

//bir product bir kategori içerir
//Product.hasOne(Category) 
// * iki biçimde de kullanabiliriz.
//bir ürün bir kategoriye aittir
Product.belongsTo(Category,{
    foreignKey:{
        allowNull : false
    }
});

//bir kullanıcı birden fazla ürüne sahip olabilir
//bir ürün sadece bir kullanıcıya ait olabilir.
Product.belongsTo(User);
User.hasMany(Product);

/* ## ürün kategori ilişkilendirme bitir */

//ilgili şemaların db'ye aktarılması
sequelize
    // oluşturduk devamında drop olmaması için tabloların kapattık.
    .sync({force: true})
    //.sync()
    .then(()=>{

        User.findByPk(1)
            .then((user)=>{
                //kullanıcıları oluşturma veya varlık kontrolü sonrası
                //döndürmedeki amacımız oluşturma sonrası tekrar
                //kod devam edip bir sonraki return'ı çalıştırmasın.
                if(!user)
                    {   //yoksa bir kullanıcı oluştur dönder
                        return User.create({name:'osman',email:'mail@gmail.com'});
                    }
                    //varsa bir kullanıcı dönder
                return user;
            })
            .then((user)=>{

                    //result kullanmıyoruz boş geçtik arrow function'ı
                    //test data giriyoruz.
                    //her çalıştığında tekrar tekrar drop edilmediğinden
                    //ekleme yapmasını istemediğimiz için kayıtları saydırıyoruz.
                    //ona göre şartlandırıp ekliyoruz.
                    Category.count()
                    .then((count)=>{
                        if(count === 0){
                            Category.bulkCreate([
                                {name:'Telefon',description:'telefon kat.'},
                                {name:'bilgisayar',description:'bilgisayar kat.'},
                                {name:'elektronik',description:'elektronik kat.'},

                            ]);
                        }
                    });
            }) 

    }).catch((err)=>{
        console.log(err);
    });


app.listen(3000,()=>{
    console.log("listening on port 3000");
});