// type öğelerine erişmek için model dosyalarına
// kütüphaneyi dahil ettik
const Sequelize = require('sequelize'); 
const sequelize = require('../utilty/database');


const Product = sequelize.define('product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    imgUrl :{
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports= Product;