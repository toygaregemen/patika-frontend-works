// ********** String Veri Turu Islemleri **********

let email = "toygaregemen12@gmail.com";
let firstName = "toygar";
let lastName = "EGEMEN";

// string karakter sayisi -> length
console.log(email.length);

// Ilk Karakteri Bulmak -> [0] :
console.log(firstName[0]);

// buyuk harf / kucuk harf :
console.log(firstName.toUpperCase()); // buyuk harf
console.log(lastName.toLowerCase()); // kucuk harf

// String icince Icinde istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search :
console.log(email.search("@")); // bulundugu index numarasını döner
console.log(email[14]);
console.log(email.search("!")); // eger yoksa -1 doner

// belli bir yere kadar al -> slice :
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf(".")) // nokta işaretine kadar al dedik
);

// bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org');
console.log(email);

// istedigim bilgi var mi ? -> includes :
console.log(email.includes("@")); // true
console.log(email.includes("3r34t")); // false

// istedigim bilgiyle basladi mi ? bitti mi ? -> startsWith, endsWith :
console.log(email.startsWith("toygar")); // true
console.log(email.startsWith("asdah")); // false

console.log(email.endsWith("kodluyoruz.org")); // true
console.log(email.endsWith("wefwef3")); // false

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST";
lastName = "LAST";

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

console.log(fullName);
