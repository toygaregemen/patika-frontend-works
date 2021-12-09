// ********** let ve const ile Degisken Tanimlama **********

// var ile degisken tanimlamak :
// var serverName = "api.kodluyoruz.org";
// console.log(serverName);

// let ile degiskeni bos tanimlamak :
let serverName;
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak
let password = "1234";
console.log(password);

// degisken atamasi yapmadan once kullanmaya calismak :

/* HATALI KULLANIM
console.log(fullName);
let fullName = "Toygar Egemen";
*/
let fullName = "Toygar Egemen";

// let ile tanımlanan degiskenin icindeki bilgiyi degistirmek :
fullName = "Lorem Ipsum Dolor"
console.log(fullName);

// birlestirme veya ekleme islemi
fullName += "Yeni Eklenen Bilgi";
console.log(fullName);

// const ile degisken tanimlamak :

const SERVER_PASSWORD = 1212342424215;
console.log(SERVER_PASSWORD);
