// ********** Fonksiyona Parametre Atamak ve Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "Lorem Ipsum";

function greetings(firstName="Guest", lastName="") { // default parametre aliyor.
    // console.log(`Merhaba ${firstName ? firstName : "Guest"}`);
    console.log(`Merhaba ${firstName} ${lastName}`);
};

console.log(firstName); // degisken

greetings(); // fonksiyona parametre gondermedik ??

let info = greetings("Parametre");

greetings("isim","soyisim");

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`;
    return info;
};

let info2 = greetings2("Alex", "de Souza");

console.log(info2);

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`${id}`);
    domObject.innerHTML = info;
};

let htmlInfo = `<span style="color:red;">COLOR RED !</span>`

domIdWriteInfo(".baslik",htmlInfo);