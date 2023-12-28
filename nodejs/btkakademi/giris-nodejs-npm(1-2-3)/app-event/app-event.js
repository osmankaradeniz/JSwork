const Logger = require("./logger"); 
const logger = new Logger();

//listener kayıt et.
//emitter.addListener da kullanabilirdik.
logger.on('connection',function(args){
    console.log("bağlantı kuruldu",args);
});

logger.log("Osman login oldu");

