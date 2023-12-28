const express = require("express");
const app = express();

app.set('view engine','pug');

const bodyParser= require('body-parser');
const path = require('path');

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController= require('./controllers/errors');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);


app.listen(3000,()=>{
    console.log("listening on port 3000");
});