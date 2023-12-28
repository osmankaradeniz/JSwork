
// //var lastName="karadeniz";
// //console.log(lastName);
// //console.log(firstName)
// //console.log(window)
// // bu değişken içerisinde
// // setInterval , console , ve benzeri birçok metoda erişebiliriz global düzeyde 
// // tarayıcı tarafındaki windows object benzeri
// //console.log(global);


// //IIFE(Immediately-invoked Function Expressions)

// var ControllerB= (function(){
//     //private
//     var age=5;
//     var lastName="karadeniz";
//     var log = function(){
//         console.log(this.lastName);
//     }

//     //public
//     return {lastName,log}
// })();

// console.log(ControllerB.lastName)
// console.log(ControllerA.lastName)

// ControllerB.log();
// ControllerA.log();

// BİRKAÇ FARKLI JS DOSYASINI BERABER SENKRONİZE ETMEK 
// BİRBİRLERİ ARASINDA DEĞİŞKEN ÇAĞIRIMLARI VB. İŞLEVLER İÇİN
// global.module yapısını inceliyoruz.
//console.log(module);

//private members 
var lastName="karadeniz";

//public members
var firstName="osman";

var log = function(name){
    console.log(name);   
}

// module.exports.name=firstName;
// module.exports.log=log;

// module.exports= {
//     name : firstName,
//     log  : log
// }

module.exports= {
    firstName,
    log
}
    
// ÇALIŞAN HER MODULE BİR IIFE YAPISINDA ÇALIŞIYOR
// ve bu yapı global olarak module , exports , require  , __filename , __dirname
// değişkenlerini kullanabileceğimiz şekilde taşıyor ,  derliyor.
console.log(__filename); // çalıştığımız dosyanın tam yolu ve ismi
console.log(__dirname); // çalıştığımız dosyanın bulunduğu dizin




