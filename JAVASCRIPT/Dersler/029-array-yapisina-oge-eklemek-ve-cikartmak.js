// Array yapisina gore oge eklemek ve Array icerisinden istenilen ogenin cikartilmasi

let items = [10, 20, 30, 40];
console.log("items - il hali : ", items);

// Array: sona oge/eleman eklemek -> push
items.push(50);
console.log(items);

// Array: sona oge eklemek -> unshift
items.unshift(5);
console.log(items);

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop();
console.log(items);
console.log(lastItem);

// Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift();
console.log(items);
console.log(firstItem);

// Array icindeki bir ogenin bilgisinin degistirilmesi

// bastaki elemani degistirme
items[0] = 3;
console.log(items);

// son elemani degistirme
items[items.length - 1] = 100;
console.log(items);