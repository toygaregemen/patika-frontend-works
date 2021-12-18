// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array

let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

console.log(items);

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length);
console.log(items[0][0]);

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(2, 4);
console.log(newItems);

// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf('ipsum'));
console.log(items.indexOf('lorem'));

// Array kopyalamak -> slice, [...ES6]
let copyItems = items.slice();
copyItems.pop();
console.log(items);
console.log(copyItems);

let es6Items = [...items];
console.log(es6Items);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(items.toString());
console.log(items.join(" --- "));

// Iki Array bilgisini birlestirmek -> [...ES6i ...ES6]
let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// Istedigimiz index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);