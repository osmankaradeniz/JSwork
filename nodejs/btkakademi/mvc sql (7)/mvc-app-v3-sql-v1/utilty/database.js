const mysql = require("mysql2");
const { connect } = require("../routes/admin");

const connection = mysql.createConnection(
   {
   host:"localhost",
   database:'node-app',
   user:'root',
   password:'toor'
   }
);
//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'toor';

connection.connect(function(err){

   if(err){
      console.log(err)
      return;
   }  
   console.log("Mysql bağlantısı başarılı");
 
});

/*
connection.promise().execute('select * from products')
      .then((result)=>{
         console.log(result[0]);
      }).catch((err)=>{
         console.log(err);
      });
connection.end();
*/



// sorgular asenkron şekilde işlemek üzere
// promise ile erişime açıyoruz. 
module.exports= connection.promise();


 
/*
//app.js'ten aldık promise ederek alman gerek..
connection.execute('select * from products')
    .then((result)=>{
        console.log(result[0]);
    }).catch((err)=>{
        console.log(err);
    });
*/