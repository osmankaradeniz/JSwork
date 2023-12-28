const express = require("express");
const app = express();

const bodyParser= require('body-parser');
const path = require('path');

const admin= require('./routes/admin');
const userRoutes = require('./routes/user');
 
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',admin.routes);
app.use(userRoutes);

app.set('view engine','pug');

//defaullta views'tir zaten bunu değiştirebilirsin.
//app.set('views','./views');

//set ile global değer tanımlar
//get ile çekebiliriz
//app.set('title',"my site");
//console.log(app.get('title'));










app.use((req,res)=>{
   res.render('404',{title:"404 not found"});
});


app.listen(3000,()=>{
    console.log("listening on port 3000");
});