const Sequelize = require('sequelize');
const sequelize = require('../utilty/database');


const Category = sequelize.define('category',{

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports= Category;