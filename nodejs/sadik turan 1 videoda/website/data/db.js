const mysql = require("mysql2");
const config= require("../config");


let connection = mysql.createConnection(config.db);

connection.connect(function(err){

   if(err){
      console.log(err)
      return;
   }  
   console.log("Mysql bağlantısı başarılı");
});

module.exports=connection.promise();