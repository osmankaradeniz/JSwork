//tüm  dosya işlemlerini yürütebiliriz
// klasör / dosya okuma , oluşturma , silme , güncelleme , yeniden adlandırma

const fs = require('fs');

// const files = fs.readdir('./',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// const fileData = fs.readFile('./index.html','utf-8', function(err,data){
//     if(err)  throw err;  
//     console.log(data)
// });
 
/*
function readFileAndProcess() {
    fs.promises.readFile('./index.html', 'utf-8')
        .then(fileData => {
            console.log(fileData); 
        })
        .catch(err => {
            console.error(err);
        });
}

// Dosya içeriğini okuma fonksiyonunu çağırma
readFileAndProcess();
*/


// let fileData; // let veya var kullanılabilir

// fs.readFile('./index.html', 'utf-8', function(err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     } 
//     fileData = data;
//     console.log(fileData);
//     // Burada dosya verisini kullanabilirsiniz
// });


/************** DOSYA OLUŞTURMA *******************/

// dosya oluşturur , aynı dosya oluşturulursa üzerine yazar.
// fs.writeFile('deneme.txt',"merhaba bu bir deneme verisi...",function(err){

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("dosya oluşturuldu.");
//     }
// });

// dosya içerisine veri ekler , dosya yok ise oluşturur.
// fs.appendFile("deneme1.txt","merhaba2",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("appendFile başarılı !");
//         }
// });

// dosya silme işlemi için
// fs.unlink("deneme.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("dosya başarı ile silindi.");
//     }
// });


//dosya ismi değiştirmek için .
// fs.rename("./deneme1.txt","./deneme2.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("dosya ismi başarı ile değiştirildi !");
//     }
// });