// ********** karsilastirma operatorleri ve mantiksal operatorler **********

let price = 100;

// == Esitse
console.log(price == 1); // false
console.log(price == 100); // true
console.log(price == '100'); // true

// === Hem degeri hem de turu esitse
console.log(price === 1); // false
console.log(price === 100); // true
console.log(price === '100'); // false

// != Esit degilse
console.log(price != 1); // true
console.log(price != 100); // false
console.log(price != '100'); // false
console.log(price !== '100'); // true

// < Kucukse
console.log(price < 100); // false
console.log(price < 1000); // true 

// <= Kucuk veya esitse
console.log(price <= 100); // true

// > Buyukse
console.log(price > 1000); // false
console.log(price > 90); // true

// >= Buyuk veya esitse
console.log(price >= 100); // true

// && ve
price = 0;
let user = "Toygar";
console.log(price > 0 && user != 'guest'); // false

// || veya
console.log(price > 0 || user != 'guest'); // true

// ! degil (tersi)
user = 'guest';
price = 1;
console.log(price > 0 && !user == 'guest'); // false

