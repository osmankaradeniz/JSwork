const Sequelize = require('sequelize');
const sequelize = require('../utilty/database');

const User = sequelize.define('user',{

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    
});

module.exports= User;