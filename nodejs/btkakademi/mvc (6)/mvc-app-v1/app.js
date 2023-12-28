const express = require("express");
const app = express();

app.set('view engine','pug');

const bodyParser= require('body-parser');
const path = require('path');

const adminRoutes= require('./routes/admin');
const userRoutes = require('./routes/user');
const errorController= require('./controllers/errors');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(userRoutes);


app.use(errorController.get404);


app.listen(3000,()=>{
    console.log("listening on port 3000");
});