// ********** number **********
// number veri turu ile calismak :
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax
console.log(
    "Fiyat :", price,
    "KDV Orani :", tax,
    "KDV Tutari :", priceTax,
    "Fiyat :", total
);

let stringNumber = "11"; // string
console.log(stringNumber);
let newNumber = Number(stringNumber); // string int'e donustu
console.log(newNumber); // int

// aritmetik islemler :
let counter = 320;
counter = counter + 1; // uzun yontem
counter += 1; // kısa yöntem
counter ++; // 1 arttırma kısa yöntem
console.log(counter);

counter --; // 1 azaltma kısa yöntem
counter -= 1; // azaltma kısa yöntem
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);


// islem onceligi
console.log(2 + 3 * 10);
console.log((2+3)*10);

// mod(kalan) alma % :
console.log(3%2); // 2'ye bölümden kalan 0 ise çift 1 ise tek sayı demektir.
console.log("Koli Kalan Urun Ornegi :", 18 % 8); // 18 tane ürünü 8'li paketler haline getirirsek kaç ürün dışarıda kalır.

// us alma ** :
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);


// asagi yuvarlama islemi -> Math.floor() :
console.log("Asagi Yuvarlama :", Math.floor(1.9)); // -> sonuc 1

// yukari yuvarlama -> Math.ceil() :
console.log("Yukari Yuvarlama :", Math.ceil(1.9)); // -> sonuc 2

// yakina yuvarlama islemi -> Math.round() :
console.log("Yakina Yuvarlama :", Math.round(1.2)) // -> sonuc 1
console.log("Yakina Yuvarlama :", Math.round(1.5)) // -> sonuc 2
