const path = require("path");

let result = path.resolve("app-path.js"); //bir dosyanın bulunduğu yolu gösterir.
result = path.extname("app-path.js"); //verilen dosyanın uzantısını döndedir. extesion name
result = path.parse(__filename); // __filename değişkenini parçalayarak birçok metod ile elde
//ederek getirmek yerine tek satırda yol ve dosya adını içeren değişken üzerinden object olarak
//direkt istediğimiz root/dir/base/ext/name gibi tanımlara ulaşabiliriz.

console.log(result.base)
console.log(result.name)
console.log(result);

// ÖRNEĞİN ; resim yüklerken gelen resmin dosya ismini değiştirerek dizinler arasında oynamalar yaparak
// yönetebilir , çakışmaları önleyebiliriz ayrıca diğer noktada tüm dosyalar için geçerli olduğu için
// dosya işlemleri ile ilgili farklı bir çok noktada işimize yarayacak bir modül olduğunu söyleyebiliriz.