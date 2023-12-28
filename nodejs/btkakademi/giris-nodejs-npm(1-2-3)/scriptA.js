//var firstName = "osman";
/*
var ControllerA= (function(){
    var lastName="yıldırım";

    var log = function(){
        console.log(this.lastName);
    }

    return {lastName,log}
})();
*/

const scriptB = require('./scriptB');
scriptB.log("osman2");
console.log(scriptB.firstName);
