const EventEmitter = require("events");
// sınıfa bunu extend ettik
//const emitter= new EventEmitter();

//istediğimiz kadar listener (logout , login ...)
// istediğimiz zamanda tetikleyebiliriz.

class Logger extends EventEmitter{
    
    log(message){
        console.log(message);
    
    //event tetikle.
    this.emit('connection',{id:1,message:"hello"});
    
    }


}



module.exports=Logger;