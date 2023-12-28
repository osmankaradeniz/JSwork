// uygulama içerisine gelen istek adreslerinin yönetimi için kullanırız.

const url = require('url');

const address ='https://osmankaradeniz.com/dersler?year=2019&month=nisan';

let result = url.parse(address,true);

console.log(result);