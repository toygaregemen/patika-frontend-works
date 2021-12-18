// Array - Dizilerle Calismak

// Array olusturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = []; // bos liste

// Array icindeki eleman/oge sayisini ogrenmek

console.log(items.length); // Array icindeki oge sayisi

document.querySelector('#info').innerHTML = items.length;

// Array icindeki ilk elemanin cagirilmasi

console.log(items[0]);

// Array icindeki son elemanin cagirilmasi

console.log(items[items.length - 1]);

// Array icindeki oratadaki elemanin cagirilmasi

console.log(items[Math.round(items.length -1) / 2]);

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi

console.log(typeof(items)); // object olarak cikti veriyor

console.log(Array.isArray(items)); // true (Evet bu bir arraydir diyor.)

// Hangileri isArray -> true verir ?

console.log("[] : ", Array.isArray( [] )); // true
console.log("1 : ", Array.isArray( 1 )); // false
console.log("true : ", Array.isArray( true )); // false

