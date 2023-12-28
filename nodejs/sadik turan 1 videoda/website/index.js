const express = require("express");
const app = express();
const userRoutes= require("./routes/users");


// template engine
app.set("view engine","ejs");
//pug , handlebars... ta kullanabilirdik ejs yerine

// statik dosyaları kullancak isek bunları bildirmemiz gerekiyor
// middleware kullanarak.
app.use(express.static("public"));
app.use(express.static("node_modules")); 

app.use(userRoutes);





app.listen(3000,()=>{
    console.log("Listening on port 3000");
});
